<template>
    <div>
        <div class="line">
            <hr class="style-eight" @click="viewMenu" v-if="isAddLine">
        </div>
        <ContextMenu :prevBlockIndex=prevBlockIndex :isView=isViewMenu @viewLine="viewLine"></ContextMenu>
    </div>
</template>

<script>
  import ContextMenu from './ContextMenu'

  export default {
    props: [
      'prevBlockIndex'
    ],
    components: {
      ContextMenu
    },
    data: function () {
      return {
        isAddLine: 1,
        isViewMenu: 0
      }
    },
    methods: {
      viewMenu: function () {
        this.isViewMenu = 1
        this.isAddLine = 0
      },
      viewLine: function () {
        this.isViewMenu = 0
        this.isAddLine = 1
      },
      hiddenLine: function () {
        this.isAddLine = 0
      }
    }
  }
</script>

<style>
    hr.style-eight {
        padding: 0;
        border: none;
        border-top: 5px dashed #eee;
        color: #aaa;
        text-align: center;
    }
    hr.style-eight:after {
        content: "ココに追加";
        display: inline-block;
        position: relative;
        top: -0.7em;
        font-size: 1.5em;
        padding: 0 0.25em;
        background: white;
    }
</style>
