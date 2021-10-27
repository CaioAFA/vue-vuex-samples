<template>
    <div>
        <PageTitle title="Actions" subtitle="Arquivo src/components/SectionActions.vue" />

        <PageContentText>
            <p>Os actions trabalham junto com os mutations. Enquanto os mutations alteram os estados, os actions são responsáveis por chamar os mutations.</p>

            <p>Clique no - e no + para acionar actions que alteram o contador.</p>

            <button
                @click="this.$store.dispatch('decrement')"
            >-</button>

            {{ counter }}

            <button
                @click="this.$store.dispatch('increment')"
            >+</button>

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
            counter: state => state.actionsModule.counter
        })
    },
}
</script>

<style scoped>

</style>