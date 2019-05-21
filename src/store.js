import Vue from 'vue'
import Vuex from 'vuex'
import Api from './api-clients/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lines: [],
        selected_lines: {},
    },
    mutations: {
        changeLines(state, lines) {
            state.lines = lines || [];
        },
        setLineSelected(state, [lineId, selected]) {
            if (!selected) {
                Vue.delete(state.selected_lines, lineId);
            } else {
                Vue.set(state.selected_lines, lineId, true);
            }
        },
        clearLinesSelection(state) {
            state.selected_lines = {};
        }
    },
    actions: {
        fetchLines(context) {
            return Api.fetchLines().then(response => {
                context.commit('changeLines', response.data.data);
            });
        },
        setLineSelected(context, [lineId, selected]) {
            context.commit('setLineSelected', [lineId, selected]);
        },
        clearLinesSelection(context) {
            context.commit('clearLinesSelection');
        }
    }
})
