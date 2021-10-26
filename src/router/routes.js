import { createRouter, createWebHashHistory } from "vue-router";

import PageNotFound from '../components/PageNotFound'
import SectionBasicUtilization from '../components/SectionBasicUtilization'
import SectionMapState from '../components/SectionMapState'

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
            path: "/:catchAll(.*)",
            component: PageNotFound
        }
    ]
})