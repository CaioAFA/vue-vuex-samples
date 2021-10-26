import { createStore } from 'vuex'

import sectionBasicUtilization from './modules/sectionBasicUtilization'
import sectionMapState from './modules/sectionMapState'
import sectionGetters from './modules/sectionGetters'
import sectionMapGetters from './modules/sectionMapGetters'
import sectionMutations from './modules/sectionMutations'
import sectionMapMutations from './modules/sectionMapMutations'

export default createStore({
    namespaced: true,

    modules: {
        introductionModule: sectionBasicUtilization,
        mapStateModule: sectionMapState,
        gettersModule: sectionGetters,
        mapGettersModule: sectionMapGetters,
        mutationsModule: sectionMutations,
        mapMutationsModule: sectionMapMutations
    }
})