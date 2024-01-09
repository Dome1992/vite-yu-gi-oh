<script>
import SingleCharacter from './SingleCharacter.vue'

//importo Store
import { store } from '../store';

export default {
    name: 'CharactersList',
    components: {
        SingleCharacter
    },
    data () {
      return {
        store,
      }
    }
}

</script>

<template>
    <section class="container">

        <div class ="row">
            <!-- prototipo da ripetere-->
            <div v-for="character in store.charactersList" :key="character.id" class="col-6 col-md-4 col-lg-3 mb-5">
                <SingleCharacter :info="character"/>
            </div>

            
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>