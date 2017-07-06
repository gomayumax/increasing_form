<template>
    <div class="context">
        <ContextMenu :isView=1></ContextMenu>
        <div class="block" v-for="(block, key) in blocks">
            <BlockHead v-if="block.name === 'head'" :blockNum=key></BlockHead>
            <BlockText v-if="block.name === 'text'" :blockNum=key></BlockText>
            <AddBlockLine :prevBlockIndex=key></AddBlockLine>
        </div>
    </div>
</template>

<script>
  // TODO:Headとかtextとかの名前にすると死ぬ
  import BlockHead from './context_block/BlockHead'
  import BlockText from './context_block/BlockText'
  import ContextMenu from './ContextMenu'
  import AddBlockLine from './AddBlockLine'

  export default {
    components: {
      ContextMenu,
      BlockText,
      BlockHead,
      AddBlockLine
    },
    computed: {
      blocks: function () {
        return this.$store.getters.blocks
      }
    }
  }
</script>

<style>

</style>
