<template>
    <div>
        <PageTitle title="Utilização Básica - State" />

        <PageContentText>
            <p>Renderizando um dado vindo direto do VueX:</p>

            <b>{{ getTextFromVuexByComputedProperty }}</b>
        </PageContentText>
    </div>
</template>

<script>
import PageTitle from './PageTitle.vue'
import PageContentText from './PageContentText.vue'

export default {
    components: {
        PageTitle,
        PageContentText
    },

    // We can get the state from Vuex by computed properties
    computed: {
        getTextFromVuexByComputedProperty(){
            // this.$store.state -> State
            // introductionModule -> module name, defined on the store
            // text -> property name

            return this.$store.state.introductionModule.text;
        }
    }
}
</script>

<style scoped>

</style>