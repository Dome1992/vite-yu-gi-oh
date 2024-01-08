<script>
import SingleCharacter from './SingleCharacter.vue'
export default {
    name: 'CharactersList',
    components: {
        SingleCharacter
    }
}

</script>

<template>
    <section class="container">

        <div class ="row">
            <!-- prototipo da ripetere-->
            <div class="col-6 col-md-4 col-lg-3 mb-5">
                <SingleCharacter />
            </div>

            <div class="col-6 col-md-4 col-lg-3 mb-5">
                <SingleCharacter />
            </div>

            <div class="col-6 col-md-4 col-lg-3 mb-5">
                <SingleCharacter />
            </div>

            <div class="col-6 col-md-4 col-lg-3 mb-5">
                <SingleCharacter />
            </div>

            <div class="col-6 col-md-4 col-lg-3 mb-5">
                <SingleCharacter />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>