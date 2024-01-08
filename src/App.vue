<script>
// importo Axios
import axios from 'axios'

// importo componente figlio
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'

//importo Store
import { store } from './store';

export default {
    components: {
      AppHeader,
      CharactersList
    },
    data () {
      return {
        store,
      }
    },
    methods: {
      getCharacters (){
        axios
          .get(store.apiURL)
          .then((res => {
            console.log(res.data);
          }))
          .catch((err)=>{
            console.log("Errori", err);
          })
      }
    },
    created () {

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
  background-color: rgb(255, 174, 0);
}
</style>
