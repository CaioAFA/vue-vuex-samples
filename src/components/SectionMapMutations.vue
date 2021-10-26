<template>
    <div>
        <PageTitle title="Map Mutations" />

        <PageContentText>
            <p>Assim como o mapState e o mapGetters, temos o mapMutations para nos ajudar a recuperar os Mutations de forma mais simples.</p>

            <p>Utilizamos a função mapMutations dentro dos métodos do componente.</p>

            Olá! Eu moro em: <b>{{ city }}</b>

            <br>

            <input
                type="text"
                @keyup="this.$store.commit('setCity', $event.target.value)"
                :value="city"
            >

            &nbsp;&nbsp;

            <button
                @click="this.$store.commit('setCity', 'São Paulo')"
            >Reset</button>

        </PageContentText>
    </div>
</template>

<script>
import PageTitle from './PageTitle.vue'
import PageContentText from './PageContentText.vue'
import { mapState, mapMutations } from 'vuex'

export default {
    components: {
        PageTitle,
        PageContentText
    },

    computed: {
        ...mapState({
            city: state => state.mapMutationsModule.city
        })
    },

    methods: {
        myOtherMethod(){
            return 'abc'
        },
        
        ...mapMutations(['setCity'])
    }
}
</script>

<style scoped>

</style>