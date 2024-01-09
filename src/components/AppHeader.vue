<script>
export default {
    name: 'AppHeader'
}

</script>

<template>
    <header class="container">

        <img src="" alt="">
        <h1 class ="text-center my-5">Yu-Gi-Oh API</h1>

        <!-- Aggiungi un menu a discesa per selezionare l'archetipo -->
        <select class="form-select" aria-label="Default select example">
            <option selected>Archetype</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>

            
        </select>

        
    </header>
</template>

<style lang="scss" scoped>
h1 {
    font-weight: 700;
}
</style>