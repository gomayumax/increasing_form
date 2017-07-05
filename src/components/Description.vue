<template>
    <div class="block">
        <el-form-item label="Description">
            <el-input placeholder="Please input" :value="text" @input="updateDescription($event)">
                <template slot="append">{{ wordCount }}</template>
            </el-input>
        </el-form-item>
    </div>
</template>

<script>
  export default {
    computed: {
      text: function () {
        return this.$store.getters.description
      },
      wordCount: function () {
        return this.text.length
      }
    },
    methods: {
      updateDescription: function (e) {
        // TODO: actionを介して読んだほうが本当は良いんだろうな
        this.$store.commit('updateDescription', e)
      }
    }
  }
</script>
