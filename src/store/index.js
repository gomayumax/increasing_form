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
    addBlock (state, obj) {
      if (obj.blockName === 'head') {
        state.form.blocks.splice(obj.prevBlockIndex + 1, 0, {
          name: 'head',
          block: {
            heads_size: 2,
            heads_text: ''
          }
        })
      }
      if (obj.blockName === 'text') {
        state.form.blocks.splice(obj.prevBlockIndex + 1, 0, {
          name: 'text',
          block: {
            text: ''
          }
        })
      }
      if (obj.blockName === 'quotation') {
        state.form.blocks.splice(obj.prevBlockIndex + 1, 0, {
          name: 'quotation',
          block: {
            quotation_text: '',
            quotation_source_url: '',
            quotation_source_title: ''
          }
        })
      }
      if (obj.blockName === 'image') {
        state.form.blocks.splice(obj.prevBlockIndex + 1, 0, {
          name: 'image',
          block: {
            image_url: '',
            image_alt: '',
            image_title: '',
            image_description: '',
            image_source_url: '',
            image_source_title: '',
            image_design_num: '1'
          }
        })
      }
    },
    deleteBlock (state, obj) {
      state.form.blocks.splice(obj.key, 1)
    },
    updateBlock (state, obj) {
      state.form.blocks[obj.index].block[obj.elementName] = obj.data
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
      console.log(JSON.stringify(state.form))
    },
    updateBlocks (state, obj) {
      state.form.blocks = obj
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
