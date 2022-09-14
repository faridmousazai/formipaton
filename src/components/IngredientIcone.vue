<template>
    <div>{{images}}</div>
</template>
<script>
export default{
    name: 'IngredientIcone',
    created() {
        this.$store.dispatch('image/load_img_ingredient')
    },
    props: ['ingredient'],
    computed: {
        images() { return this.$store.getters['image/getImageFromIngredientId'](this.ingredient)}
    }
}
</script>
<style>

</style>