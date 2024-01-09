<script>
// Definisce il componente 'SingleCharacter'
export default {
    // Nome del componente
    name: 'SingleCharacter',

    // Props (parametri) accettati dal componente
    props: {
        // 'info' è un oggetto passato come proprietà al componente
        info: Object
    }
}

</script>

<template>
    <!-- Inizia il template del componente -->
    <div class="character text-center">
        
        <!-- Aggiungi un'immagine utilizzando l'URL della prima immagine del personaggio -->
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