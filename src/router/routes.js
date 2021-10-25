import { createRouter, createWebHashHistory } from "vue-router";

import PageNotFound from '../components/PageNotFound'
import SectionIntroduction from '../components/SectionIntroduction'

export default new createRouter({
    // This CSS class will be applied on active links
    linkExactActiveClass: 'link-active',

    history: createWebHashHistory(),
    
    routes: [
        {
            path: '/intro',
            alias: '/',
            component: SectionIntroduction
        },
        {
            path: "/:catchAll(.*)",
            component: PageNotFound
        }
    ]
})