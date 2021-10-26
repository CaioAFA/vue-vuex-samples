export default {
    state: {
        city: 'São Paulo'
    },

    mutations: {
        setCity(state, newCityName){
            state.city = newCityName
        }
    }
}