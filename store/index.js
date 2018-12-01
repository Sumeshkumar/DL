import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            isMobile: false
        },
        mutations: {
            setIsMobile (state, flag) {
                state.isMobile = flag
            }
        }
    })
}

export default createStore