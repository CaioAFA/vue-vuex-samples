import { createStore } from 'vuex'

import sectionBasicUtilization from './modules/sectionBasicUtilization'
import sectionMapState from './modules/sectionMapState'
import sectionGetters from './modules/sectionGetters'
import sectionMapGetters from './modules/sectionMapGetters'

export default createStore({
    namespaced: true,

    modules: {
        introductionModule: sectionBasicUtilization,
        mapStateModule: sectionMapState,
        gettersModule: sectionGetters,
        mapGettersModule: sectionMapGetters
    }
})