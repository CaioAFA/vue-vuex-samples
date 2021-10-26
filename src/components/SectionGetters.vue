<template>
    <div>
        <PageTitle title="Getters" />

        <PageContentText>
            <p>Os Getters servem para recuperar estados em sua forma original ou em alguma formatação diferente.</p>

            <p>São muito úteis quando temos dados que serão utilizados em diversos locais do código. Caso algo seja alterado, alteramos apenas o Getter e pronto! Todos os locais onde o dado é utilizado será corrigido.</p>

            <p>Definimos ele no store de algum módulo e recuperamos da forma exibida no código.</p>

            <br>

            <p>Exemplo:</p>

            Valor original: <b>{{ getOriginalValue }}</b>
            <br>
            <br>
            Valor com Getter: <b>{{ getValueByGetter }}</b>

            <br>
            <br>

            <p>Perceba que o estado original não foi alterado, porém no Getter mudamos sua forma de exibição!</p>
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

    computed: {
        getOriginalValue(){
            return this.$store.state.gettersModule.value
        },

        getValueByGetter(){
            return this.$store.getters.getValueFromGettersSample
        }
    }
}
</script>

<style scoped>

</style>