import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        name: sessionStorage.getItem('name')||'',
        stuId: sessionStorage.getItem('stuId')||'',
        count: sessionStorage.getItem('count')||0,
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
        setCount(state, count){
            sessionStorage.setItem('count', count)
            state.count = count;
        }
    },
    actions:{
        updateName(context, name){
            context.commit('setName', name)
        },
        updateStuId(context, stuId){
            context.commit('setStuId', stuId)
        },
        updateCount(context, count){
            context.commit('setCount', count)
        }
    }
})

