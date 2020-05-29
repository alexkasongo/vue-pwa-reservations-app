<template>
    <div class="dsearch">
        <Search class="dsearch__search"/>
        <Map />
        <Footer />
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Map from '@/components/Map.vue';
import Footer from '@/components/Footer.vue';

export default {
    props: [''],
    components: {
        Search,
        Map,
        Footer
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
    .dsearch {
        
        &__search {
            margin: 100px auto 40px auto;

            @media (min-width: 570px) {
                width: 90%;
            }

            @media (min-width: 1024px) {
            width: 80%;
            }
        }

    }
</style>