<template>
  <el-container>
    <the-header />
    <el-main>
      <p>Test</p>
    </el-main>
    <the-footer />
  </el-container>
</template>

<script>
import { ElContainer } from 'element-plus'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    ElContainer,
    TheHeader,
    TheFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
