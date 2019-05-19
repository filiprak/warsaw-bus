import Vue from 'vue'
import Vuex from 'vuex'
import Provider from './providers/active-provider'

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
            return Provider.fetchLines().then(data => {
                context.commit('changeLines', data);
            });
        }
    }
})
