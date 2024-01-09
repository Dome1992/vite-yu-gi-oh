<script>
// Importa il componente 'SingleCharacter'
import SingleCharacter from './SingleCharacter.vue'

//importo Store
import { store } from '../store';

export default {
    // Nome del componente
    name: 'CharactersList',

    // Componenti utilizzati all'interno di questo componente
    components: {
        SingleCharacter
    },

     // Dati locali del componente
    data () {
        // Restituisce un oggetto con i dati del componente
      return {
        // Assegna lo store a una variabile locale
        store,
      }
    }
}

</script>

<template>
    <!-- Inizia il template del componente -->
    <section class="container">

        <!-- Inizia una riga -->
        <div class ="row">

            <!-- Per ogni personaggio nello store, crea un blocco -->
            <div v-for="character in store.charactersList" :key="character.id" class="col-6 col-md-4 col-lg-3 mb-5">
                
                <!-- Utilizza il componente 'SingleCharacter' e passa le informazioni del personaggio -->
                <SingleCharacter :info="character"/>
            </div>

            
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>