<template>
    <div class="block">
        <el-form-item label="Text">
            <el-input placeholder="Please input" :value="block.text" @input="updateBlockText($event)">
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
      updateBlockText: function (e) {
        // TODO: actionを介して読んだほうが本当は良いんだろうな
        this.$store.commit('updateBlockText', {
          text: e,
          index: this.indexNum
        })
      }
    }
  }
</script>
