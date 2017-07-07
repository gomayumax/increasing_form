<template>
    <div class="block">
        <el-form-item label="引用">
            <el-form-item label="引用文">
                <el-input placeholder="Please input" :value="block.quotation_text" @input="updateBlockHeadText($event)">
                    <template slot="append">{{ wordCount }}</template>
                </el-input>
            </el-form-item>
            <el-form-item label="引用元(タイトル)">
                <el-input placeholder="Please input" :value="block.quotation_source_title" @input="updateBlockHeadText($event)">
                    <template slot="append">{{ wordCount }}</template>
                </el-input>
            </el-form-item>
            <el-form-item label="引用元(URL)">
                <el-input placeholder="Please input" :value="block.quotation_source_url" @input="updateBlockHeadText($event)">
                    <template slot="append">{{ wordCount }}</template>
                </el-input>
            </el-form-item>
        </el-form-item>
    </div>
</template>

<script>
  export default {
    props: [
      'blockNum'
    ],
    computed: {
      block: function () {
        var targetBlock = this.$store.getters.blocks
        return targetBlock[this.blockNum].block
      },
      indexNum: function () {
        return this.blockNum
      },
      wordCount: function () {
        return this.block.quotation_source_title.length
      }
    },
    methods: {
      updateBlockHeadText: function (e) {
        // TODO: actionを介して読んだほうが本当は良いんだろうな
        this.$store.commit('updateBlockHeadText', {
          text: e,
          index: this.indexNum
        })
      },
      updateBlockHeadSize: function (e) {
        this.$store.commit('updateBlockHeadSize', {
          size: e,
          index: this.indexNum
        })
      }
    }
  }
</script>
