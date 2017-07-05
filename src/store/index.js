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
      name: 'hogehoge',
      blocks: []
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
    addBlock (state, blackName) {
      if (blackName === 'head') {
        state.form.blocks.push({
          name: 'head',
          block: {
            heads_size: 2,
            heads_text: ''
          }
        })
      }
      if (blackName === 'text') {
        state.form.blocks.push({
          name: 'text',
          block: {
            text: ''
          }
        })
      }
    },
    updateBlockText (state, block) {
      state.form.blocks[block.index].block.text = block.text
    },
    updateBlockHeadSize (state, block) {
      state.form.blocks[block.index].block.heads_size = block.size
    },
    updateBlockHeadText (state, block) {
      state.form.blocks[block.index].block.heads_text = block.text
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
    },
    blocks: function (state) {
      return state.form.blocks
    }
  }
})
