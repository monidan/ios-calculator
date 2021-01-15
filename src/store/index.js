import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: 0,
    calculations: [],
    activeMathAction: '',
    isNewResult: false
  },
  mutations: {
    add(state){
      state.result = state.calculations.reduce((number, total) => total = Number(number) + Number(total));
    },
    subtruct(state){
      state.result = state.calculations.reduce((number, total) => total = Number(number) - Number(total)) 
    },
    divide(state){
      state.result = state.calculations.reduce((number, total) => total = Number(number) / Number(total))
    },
    multiply(state){
      state.result = state.calculations.reduce((number, total) => total = Number(number) * Number(total))
    },
    clearResult(state){
      state.result = 0;
      state.calculations = []
      state.activeMathAction = ''
      state.isNewResult = false
    },
    // floatPoint(state){

    // },
    changeCurrentMathAction(state, mathAction){
      state.activeMathAction = mathAction;
      state.calculations.push(state.result)
      state.isNewResult = true
    },
    writeNumberToResult(state, number){
      if(state.result === 0 || state.isNewResult){
        state.result = number
        state.isNewResult = false
      } else {
        state.result += number;
      }
    }
  },
  actions: {
    solve({commit, state}){
      const taskAction = state.activeMathAction;
      state.calculations.push(state.result);
      switch(taskAction){
        case '+': {
          commit('add')
          state.calculations = []
          break;
        }
        case '-': {
          commit('subtruct')
          state.calculations = []
          break;
        }
        case 'x': {
          commit('multiply')
          state.calculations = []
          break;
        }
        case '÷': {
          commit('divide')
          state.calculations = []
          break;
        }
      }
    },
  },
  modules: {
  }
})
