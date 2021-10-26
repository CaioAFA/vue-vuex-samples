<template>
    <div id="page-content">

        <!-- We can use route transitions -->
        <router-view v-slot="{ Component }">
            <transition name="fade-view" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#page-content {
    /* Fill the remaining space */
    flex: 1;
}

/* Fade transition between routes */
.fade-view-enter-from, .fade-view-leave-to {
    opacity: 0;
}
.fade-view-enter-active, .fade-view-leave-active{
    transition: opacity .5s ease;
}
</style>