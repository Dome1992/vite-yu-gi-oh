<script>
export default {
    name: 'SingleCharacter',
    props: {
        info: Object
    }
}

</script>

<template>
    <div class="character text-center">
        <img class="img-fluid mb-3"  :src="info.card_images[0].image_url" :alt="info.name">
        <h4>{{ info.name }}</h4>
        <div>{{ info.archetype }}</div>
        
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