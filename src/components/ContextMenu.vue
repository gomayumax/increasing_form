<template>
    <div class="menu" v-if="isView">
        <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="add('head')">head</el-menu-item>
            <el-menu-item index="2" @click="add('text')">text</el-menu-item>
            <el-menu-item index="3" @click="add('quotation')">quotation</el-menu-item>
            <el-menu-item index="4" @click="hiddenMenu">x</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  export default {
    props: [
      'prevBlockIndex',
      'isView'
    ],
    methods: {
      add: function (blockName) {
        // TODO: actionを介して読んだほうが本当は良いんだろうな
        this.$store.commit('addBlock', {blockName: blockName, prevBlockIndex: this.prevBlockIndex})
        this.hiddenMenu()
      },
      hiddenMenu: function () {
        this.$emit('viewLine')
      }
    }
  }
</script>

<style>
    .menu {
        margin-bottom: 10px;
    }
</style>
