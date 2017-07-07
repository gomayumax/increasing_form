<template>
    <div class="block">
        <el-form-item label="Text">
            <el-input placeholder="Please input" :value="block.text" @input="updateBlock($event, 'text')">
                <template slot="append">{{ wordCount }}</template>
            </el-input>
        </el-form-item>
    </div>
</template>

<script>
  export default {
    name: 'Text',
    props: [
      'blockNum'
    ],
    computed: {
      wordCount: function () {
        return this.block.text.length
      },
      block: function () {
        var targetBlock = this.$store.getters.blocks
        return targetBlock[this.blockNum].block
      },
      indexNum: function () {
        return this.blockNum
      }
    },
    methods: {
      updateBlock: function (e, elementName) {
        // TODO: actionを介して読んだほうが本当は良いんだろうな
        this.$store.commit('updateBlock', {
          data: e,
          index: this.indexNum,
          elementName: elementName
        })
      }
    }
  }
</script>
