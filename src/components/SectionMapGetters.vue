<template>
    <div>
        <PageTitle
            title="Map Getters"
            subtitle="Arquivo src/components/SectionMapGetters.vue<br/>Store: src/store/modules/sectionMapGetters.js"
        />

        <PageContentText>
            <p>Os Map Getters servem para recuperar os Getters de forma mais simples (assim como o MapState).</p>

            <b>{{ getValueByGetter }}</b> - Getter padrão
            <br>
            <b>{{ getMyValue }}</b> - Map Getter
        </PageContentText>
    </div>
</template>

<script>
import PageTitle from './PageTitle.vue'
import PageContentText from './PageContentText.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        PageTitle,
        PageContentText
    },

    computed: {
        getValueByGetter(){
            return this.$store.getters.getMyValue
        },

        ...mapGetters([
            'getMyValue'
        ])

        /* If you want to change getter name:

        ...mapGetters({
            myNewGetterName: 'getMyValue'
        })
        
        */
    }
}
</script>

<style scoped>

</style>