<template>
  <navigation-bar></navigation-bar>
  <router-view></router-view>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
  components: {
    NavigationBar
  }
}
</script>

<style>
</style>