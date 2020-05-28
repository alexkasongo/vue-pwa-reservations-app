<template>
    <div class="dsearch">
        <Search />
    </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
    props: [''],
    components: {
        Search
    },
    data: function () {
        return {
            
        }
    },
    mounted() {
        console.log('DeepSearch.vue mounted.');
    },
    computed: {},
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>