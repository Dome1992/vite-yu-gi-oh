<script>
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'

export default {
    components: {
      AppHeader,
      CharactersList
    }
}
</script>

<template>
  <AppHeader />

  <main>
      <CharactersList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';

main {
  padding-top: 20px;
}
</style>
