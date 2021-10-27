<template>
    <div id="title-wrapper">
        <h1>{{ title }}</h1>

        <h2>{{ subtitle }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String
        },

        subtitle: {
            required: false,
            type: String
        }
    }
}
</script>

<style scoped>
#title-wrapper {
    padding: 30px;
    background: rgba(0, 0, 0, 0.02);
    margin: 0;
    text-align: center;
    font-style: italic;
}
</style>