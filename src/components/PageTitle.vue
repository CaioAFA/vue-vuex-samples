<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    padding: 50px;
    background: rgba(0, 0, 0, 0.02);
    margin: 0;
    font-style: italic;
}
</style>