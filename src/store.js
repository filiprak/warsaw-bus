import Vue from 'vue'
import Vuex from 'vuex'
import Api from './api-clients/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lines: [],
        selected_lines: {
            2: true
        },
    },
    mutations: {
        changeLines(state, lines) {
            state.lines = lines || [];
        },
        setLineSelected(state, [lineId, selected]) {
            state.selected_lines[lineId] = selected;
        },
    },
    actions: {
        fetchLines(context) {
            return Api.fetchLines().then(response => {
                context.commit('changeLines', response.data.data);
            });
        },
        setLineSelected(context, [lineId, selected]) {
            context.commit('setLineSelected', [lineId, selected]);
        }
    }
})
