<template>
    <div>
        <PageTitle
            title="Actions"
            subtitle="Arquivo src/components/SectionMapActions.vue<br/>Store: src/store/modules/sectionActions.js"
        />

        <PageContentText>
            <p>Assim como o mapState, mapGetters e mapMutations, temos os mapActions para nos ajudar a recuperar as Actions de forma mais simples.</p>

            <button
                @click="decrement"
            >-</button>

            {{ counter }}

            <button
                @click="increment"
            >+</button>

        </PageContentText>
    </div>
</template>

<script>
import PageTitle from './PageTitle.vue'
import PageContentText from './PageContentText.vue'
import { mapState, mapActions } from 'vuex'

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

    // This way we can use only "increment" and "decrement" function directly
    methods: {
        ...mapActions(['increment', 'decrement'])
    }
}
</script>

<style scoped>

</style>