<template>
    <div class="context">
        <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="add('head')">head</el-menu-item>
            <el-menu-item index="2" @click="add('text')">text</el-menu-item>
        </el-menu>
        <div class="block" v-for="(block, key) in blocks">
            <BlockHead v-if="block.name === 'head'" :blockNum=key></BlockHead>
            <BlockText v-if="block.name === 'text'" :blockNum=key></BlockText>
        </div>
    </div>
</template>

<script>
  // TODO:Headとかtextとかの名前にすると死ぬ
  import BlockHead from './context_block/BlockHead'
  import BlockText from './context_block/BlockText'

  export default {
    components: {
      BlockText,
      BlockHead
    },
    computed: {
      blocks: function () {
        return this.$store.getters.blocks
      }
    },
    methods: {
      add: function (blockName) {
        // TODO: actionを介して読んだほうが本当は良いんだろうな
        this.$store.commit('addBlock', blockName)
      }
    }
  }
</script>

<style>
</style>
