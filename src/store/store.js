import { createStore } from 'vuex'

import sectionBasicUtilization from './modules/sectionBasicUtilization'
import sectionMapState from './modules/sectionMapState'

export default createStore({
    namespaced: true,

    modules: {
        introductionModule: sectionBasicUtilization,
        mapStateModule: sectionMapState
    }
})