<script>
import { store } from '../store';

export default {
    name: 'AppSearch',
    data () {
        return {
            store,
        }
    },
}

</script>

<template>
  <!-- Aggiungi un menu a discesa per selezionare l'archetipo -->
  <!-- Aggiungiamo il v-model al select cosi' da collegarli-->
        <select class="form-select" aria-label="Default select example" v-model="store.searcharchetype" @change="$emit('filter')">
            <!--Aggiungiamo il v-for all'option di partenza cosi' itera le card filtrate-->
            <option value="">Archetype</option>
            <option v-for="archetype in store.archetypes"   :value="archetype.archetype_name">
            {{ archetype.archetype_name }}
            </option>
            
        </select>

</template>

<style lang="scss" scoped>

</style>