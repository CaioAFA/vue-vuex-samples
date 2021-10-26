export default {
    state: {
        counter: 0
    },

    mutations: {
        incrementCounter(state){
            state.counter++
        },
        decrementCounter(state){
            state.counter--
        }
    },

    actions: {
        increment(context){
            context.commit('incrementCounter')
        },
        decrement(context){
            context.commit('decrementCounter')
        }
    }
}