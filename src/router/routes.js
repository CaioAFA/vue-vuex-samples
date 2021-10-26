import { createRouter, createWebHashHistory } from "vue-router";

import PageNotFound from '../components/PageNotFound'
import SectionBasicUtilization from '../components/SectionBasicUtilization'
import SectionMapState from '../components/SectionMapState'
import SectionGetters from '../components/SectionGetters'
import SectionMapGetters from '../components/SectionMapGetters'
import SectionMutations from '../components/SectionMutations'
import SectionMapMutations from "../components/SectionMapMutations";

export default new createRouter({
    // This CSS class will be applied on active links
    linkExactActiveClass: 'link-active',

    history: createWebHashHistory(),
    
    routes: [
        {
            path: '/basic-utilization',
            alias: '/',
            component: SectionBasicUtilization
        },
        {
            path: '/map-state',
            component: SectionMapState
        },
        {
            path: '/getters',
            component: SectionGetters
        },
        {
            path: '/map-getters',
            component: SectionMapGetters
        },
        {
            path: '/mutations',
            component: SectionMutations
        },
        {
            path: '/map-mutations',
            component: SectionMapMutations
        },
        {
            path: "/:catchAll(.*)",
            component: PageNotFound
        }
    ]
})