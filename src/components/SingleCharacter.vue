<script>
export default {
    name: 'SingleCharacter',
}

</script>

<template>
    
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
    border-radius: 50%;
    
}
</style>