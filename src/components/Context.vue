<template>
    <div class="context">
        <ContextMenu :isView=1></ContextMenu>
        <draggable v-model="blocks">
                <div class="context-block" v-for="(block, key) in blocks">
                    <el-button type="primary" icon="delete" class="button" @click="deleteBlock(key)"></el-button>
                    <BlockHead v-if="block.name === 'head'" :blockNum=key></BlockHead>
                    <BlockText v-if="block.name === 'text'" :blockNum=key></BlockText>
                    <BlockQuotation v-if="block.name === 'quotation'" :blockNum=key></BlockQuotation>
                    <BlockImage v-if="block.name === 'image'" :blockNum=key></BlockImage>
                    <AddBlockLine :prevBlockIndex=key></AddBlockLine>
                </div>
        </draggable>
    </div>
</template>

<script>
  // TODO:Headとかtextとかの名前にすると死ぬ
  import BlockHead from './context_block/BlockHead'
  import BlockText from './context_block/BlockText'
  import ContextMenu from './ContextMenu'
  import BlockQuotation from './context_block/BlockQuotation'
  import BlockImage from './context_block/BlockImage'
  import AddBlockLine from './AddBlockLine'
  import draggable from 'vuedraggable'

  export default {
    name: 'context',
    components: {
      ContextMenu,
      BlockText,
      BlockHead,
      BlockQuotation,
      BlockImage,
      AddBlockLine,
      draggable
    },
    computed: {
      blocks: {
        get () {
          return this.$store.getters.blocks
        },
        set (value) {
          this.$store.commit('updateBlocks', value)
        }
      }
    },
    methods: {
      deleteBlock: function (key) {
        this.$store.commit('deleteBlock', {key: key})
      },
      onUpdate: function (event) {
        this.list.splice(event.newIndex, 0, this.list.splice(event.oldIndex, 1)[0])
      }
    }
  }
</script>

<style>
    .button {
        text-align: left;
    }


</style>
