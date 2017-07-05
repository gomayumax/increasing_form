<template>
    <div class="block">
        <el-form-item label="Title">
            <el-input placeholder="Please input" :value="text" @input="updateTitle($event)">
                <template slot="append">{{ wordCount }}</template>
            </el-input>
        </el-form-item>
    </div>
</template>

<script>
  export default {
    computed: {
      text: function () {
        return this.$store.getters.title
      },
      wordCount: function () {
        return this.text.length
      }
    },
    methods: {
      updateTitle: function (e) {
        // TODO: actionを介して読んだほうが本当は良いんだろうな
        this.$store.commit('updateTitle', e)
      }
    }
  }
</script>
