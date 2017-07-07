<template>
    <div class="context">
        <ContextMenu :isView=1></ContextMenu>
        <div class="context-block" v-for="(block, key) in blocks">
            <el-button type="primary" icon="delete" class="button" @click="deleteBlock(key)"></el-button>
            <BlockHead v-if="block.name === 'head'" :blockNum=key></BlockHead>
            <BlockText v-if="block.name === 'text'" :blockNum=key></BlockText>
            <BlockQuotation v-if="block.name === 'quotation'" :blockNum=key></BlockQuotation>
            <BlockImage v-if="block.name === 'image'" :blockNum=key></BlockImage>
            <AddBlockLine :prevBlockIndex=key></AddBlockLine>
        </div>
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

  export default {
    components: {
      ContextMenu,
      BlockText,
      BlockHead,
      BlockQuotation,
      BlockImage,
      AddBlockLine
    },
    computed: {
      blocks: function () {
        return this.$store.getters.blocks
      }
    },
    methods: {
      deleteBlock: function (key) {
        this.$store.commit('deleteBlock', {key: key})
      }
    }
  }
</script>

<style>
    .button {
        text-align: left;
    }


</style>
