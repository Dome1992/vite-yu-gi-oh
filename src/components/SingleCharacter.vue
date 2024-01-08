<script>
export default {
    name: 'SingleCharacter',
}

</script>

<template>
    <div class="character text-center">
        <img class="img-fluid mb-3"  src="https://images.ygoprodeck.com/images/cards/27551.jpg" alt="descrizione del personaggio">
        <h4>Nome personaggio</h4>
        <div>status personaggio</div>
        <div class="font-weight-bold">
            Specie personaggio
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

h4 {
    text-transform: capitalize;

    &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        margin: 1rem auto;
    }
}

img {
    
    
}
</style>