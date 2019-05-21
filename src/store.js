import Vue from 'vue'
import Vuex from 'vuex'
import Api from './api-clients/api'
import PositionQueue from './queue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lines: [],
        positions: [],
        selected_lines: {},
        loading_positions: false,
    },
    mutations: {
        changeLines(state, lines) {
            state.lines = lines || [];
        },
        changePositions(state, positions) {
            state.positions = positions || [];
        },
        setLineSelected(state, [line, selected]) {
            if (!selected) {
                Vue.delete(state.selected_lines, line.lineId);
            } else {
                Vue.set(state.selected_lines, line.lineId, line);
            }
        },
        clearLinesSelection(state) {
            state.selected_lines = {};
        },
        setLoadingPositions(state, val) {
            state.loading_positions = val;
        }
    },
    actions: {
        fetchLines(context) {
            return Api.fetchLines().then(response => {
                context.commit('changeLines', response);
            });
        },
        fetchPositions(context, params) {
            if (!context.state.loading_positions) {
                if (params === undefined) {
                    params = {
                        lines: Object.keys(context.state.selected_lines).map(lineId => {
                            return context.state.selected_lines[lineId];
                        })
                    };
                }
                context.commit('setLoadingPositions', true);
                return Api.fetchPositions(params).then(response => {
                    PositionQueue.insert(response);
                    context.commit('changePositions', PositionQueue.lastarray());
                }).then(() => {
                    context.commit('setLoadingPositions', false);
                });
            }
        },
        setLineSelected(context, [line, selected]) {
            context.commit('setLineSelected', [line, selected]);

            if (window.poll_timer) {
                clearTimeout(window.poll_timer);
                window.poll_timer = null;
            }

            window.poll_timer = setTimeout(() => {
                context.dispatch('fetchPositions');
            }, 500);
        },
        clearLinesSelection(context) {
            context.commit('clearLinesSelection');
            context.dispatch('fetchPositions');
        }
    }
})
