<template>
    <div>
        <PageTitle title="Map State" subtitle="Arquivo src/components/SectionMapState.vue" />

        <PageContentText>
            <p>Podemos utilizar o MapState para nos ajudar a recuperar os estados de forma mais fácil:</p>

            <b>{{ myText }}</b>
            <br>
            <br>
            <b>{{ myOtherText }}</b>
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
        someComputedValue(){
            return 'some value'
        },

        // Using the mapState to help us
        ...mapState({
            myText: state => state.mapStateModule.myText,
            myOtherText: state => state.mapStateModule.myOtherText
        })
    }
}
</script>

<style scoped>

</style>