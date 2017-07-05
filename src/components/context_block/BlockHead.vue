<template>
    <div class="block">
        <el-form-item label="Head">
            <el-form-item label="size">
                <el-select :value="block.heads_size" placeholder="Select" @input="updateBlockHeadSize($event)">
                    <el-option
                            v-for="sizeNum in headSize"
                            :value="sizeNum">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="text">
                <el-input placeholder="Please input" :value="block.heads_text" @input="updateBlockHeadText($event)">
                    <template slot="append">{{ wordCount }}</template>
                </el-input>
            </el-form-item>
        </el-form-item>
    </div>
</template>

<script>
  export default {
    name: 'Head',
    props: [
      'blockNum'
    ],
    data: function () {
      return {
        headSize: [
          2,
          3,
          4
        ]
      }
    },
    computed: {
      block: function () {
        var targetBlock = this.$store.getters.blocks
        return targetBlock[this.blockNum].block
      },
      indexNum: function () {
        return this.blockNum
      },
      wordCount: function () {
        return this.block.heads_text.length
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
