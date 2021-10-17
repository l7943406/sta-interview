import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        name: sessionStorage.getItem('name')||'',
        stuId: sessionStorage.getItem('stuId')||'',
    },
    getters:{

    },
    mutations:{
        setName(state, name){
            sessionStorage.setItem('name', name)
            state.name = name;
        },
        setStuId(state, stuId){
            sessionStorage.setItem('stuId', stuId)
            state.stuId = stuId;
        },
    },
    actions:{
        updateName(context, name){
            context.commit('setName', name)
        },
        updateStuId(context, stuId){
            context.commit('setStuId', stuId)
        },
    }
})

