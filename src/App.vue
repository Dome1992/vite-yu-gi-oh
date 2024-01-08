<script setup>
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader />

  <main>

  </main>
</template>

<style lang="scss">
@use './styles/general.scss';

main {
  padding-top: 20px;
}
</style>
