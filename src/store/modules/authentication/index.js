import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const state = () => ({
    loggedIn: false,
    user: undefined
})

export default {
    namespaced: true,
    actions,
    mutations,
    getters,
    state,
}