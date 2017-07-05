/**
 * Created by goma on 2017/07/05.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
      title: '',
      description: '',
      name: 'hogehoge'
    },
    json: ''
  },
  mutations: {
    updateTitle (state, text) {
      state.form.title = text
    },
    updateDescription (state, text) {
      state.form.description = text
    },
    createJson (state) {
      console.log(JSON.stringify(state))
    }
  },
  getters: {
    title: function (state) {
      return state.form.title
    },
    description: function (state) {
      return state.form.description
    }
  }
})
