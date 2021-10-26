export default {
    state: {
        myValue: 9876.54
    },

    getters: {
        getMyValue(state){
          return `$ ${state.myValue}`
        }
    }
}