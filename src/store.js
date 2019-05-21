import Vue from 'vue'
import Vuex from 'vuex'
import Api from './api-clients/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lines: [],
        selected_lines: [],
    },
    mutations: {
        changeLines(state, lines) {
            state.lines = lines || [];
        }
    },
    actions: {
        fetchLines(context) {
            return Api.fetchLines().then(response => {
                context.commit('changeLines', response.data.data);
            });
        }
    }
})
