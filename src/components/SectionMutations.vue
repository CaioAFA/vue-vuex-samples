<template>
    <div>
        <PageTitle
            title="Mutations"
            subtitle="Arquivo src/components/SectionMutations.vue<br/>Store: src/store/modules/sectionMutations.js"
        />

        <PageContentText>
            <p>Com os mutations, podemos alterar algum estado da aplicação.</p>

            <p>Repare como utilizamos a diretiva @keyup para alterar o estado.</p>

            Meu nome é: <b>{{ name }}</b>

            <br>

            <!--
                We need to "commit" the changes with this function.
                
                On the Store, we created the function "setName". The second parameter here
                will be the "newName" variable there.
            -->
            <input
                type="text"
                @keyup="this.$store.commit('setName', $event.target.value)"
                :value="name"
            >

            &nbsp;&nbsp;

            <button
                @click="this.$store.commit('setName', 'Caio Arrabal')"
            >Reset</button>

        </PageContentText>
    </div>
</template>

<script>
import PageTitle from './PageTitle.vue'
import PageContentText from './PageContentText.vue'
import { mapState } from 'vuex'

export default {
    components: {
        PageTitle,
        PageContentText
    },

    computed: {
        ...mapState({
            name: state => state.mutationsModule.name
        })
    }
}
</script>

<style scoped>

</style>