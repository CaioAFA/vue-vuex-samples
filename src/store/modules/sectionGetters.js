export default {
    state: {
        value: 1234.56
    },

    getters: {
        getValueFromGettersSample(state){
          return `R$ ${state.value}`
        }
    }
}