import { reactive } from "vue";

class Store {
    constructor() {
        this.state = reactive({
            activeTabs: 'recommendIndex',
            activeMenu: 0
        })
    }
    mutations = {
        SET_ACTIVETABS: (val) => {
            this.state.activeTabs = val
        },
        SET_ACTIVEMENU: (val) => {
            this.state.activeMenu = val
        },
    }
    actions = {
        setActiveTabs: (val) => {
            this.commit('SET_ACTIVETABS', val)
        },
        setActiveMenu: (val) => {
            this.commit('SET_ACTIVEMENU', val)
            console.log(this.state.activeMenu);
        },
    }
    get activeTabs() {
        return this.state.activeTabs
    }
    get activeMenu() {
        return this.state.activeMenu
    }
    commit = (key, val) => {
        this.mutations[key](val)
    }
    dispatch = (key, val) => {
        this.actions[key](val)
    }
}
export default new Store()