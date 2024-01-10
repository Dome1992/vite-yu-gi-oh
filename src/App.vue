<script>
// importo Axios
import axios from 'axios'

// importo componente figlio
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import AppSearch from './components/AppSearch.vue'

//importo Store
import { store } from './store';

export default {
    components: {
      AppHeader,
      CharactersList,
      AppSearch
    },
    data () {
      return {
        store,
      }
    },
    methods: {
      // Metodo per ottenere i personaggi dalla chiamata API
      getCharacters (){
        


        axios
          .get(store.apiURL)
          .then((res => {
            console.log(res.data.data);
            store.charactersList = res.data.data;
          }))
          .catch((err)=>{
            console.log("Errori", err);
          })
      },
      // Ottieni archetipi 
      getArchetypeCard() {
        axios
        .get((store.archetypeURL)
        .then(res => {
          store.archetypes = res.data;
        }))
        .catch((err)=>{
          console.log("Errori", err);
        })
      },
    },
    created () {
        this.getCharacters ();
        this.getArchetypeCard ();

    }
}
</script>

<template>
  <AppHeader />

  <main>
      <AppSearch @filter ="getCharacters" />
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
