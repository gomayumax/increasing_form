<template>
  <div id="app">
    <router-view></router-view>
    <el-form ref="form" :model="form" label-width="120px">
      <Title></Title>
      <Description></Description>
      <Context></Context>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import Title from './components/Title'
import Description from './components/Description'
import Context from './components/Context'

export default {
  name: 'app',
  data: function () {
    return {
      form: this.$store.state.form
    }
  },
  components: {
    Title,
    Description,
    Context
  },
  methods: {
    onSubmit: function () {
      this.$store.commit('createJson')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
