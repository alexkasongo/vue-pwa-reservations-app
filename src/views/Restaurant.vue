<template>
    <div class="rest">
        <h2>Restaurant Page Works</h2>
        <p>this works {{ $route.params.restId }}</p>
    </div>
</template>

<script>
    export default {
        name: "Restaurant",
        props: [''],
        data: function () {
            return {
                
            }
        },
        mounted() {
        },
        computed: {},
        methods: {},
        watch: {
            '$route' (to, from) {
                alert(to.params.restId)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .rest {
        margin: 62px 0 0 0;
    }
</style>