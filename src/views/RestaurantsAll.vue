<template>
  <div class="restall">

    <Hero 
      :image="image"
      title="Kigali"
      subtitle=""
    />

    <div class="restall__title">
        <h2>Restaurants in {{this.$route.params.restId}}</h2>
    </div>

    <div class="restall__container">
        <div class="restall__search">
            <Search/>
        </div>
        <div class="restall__top">
            <TopCarousel />
        </div>
        <div class="restall__fav">
            <FavCarousel />
        </div>
    </div>

    <div class="restall__map">
        <MapSingle />
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'
import Search from '@/components/Search.vue';
import TopCarousel from '@/components/TopCarousel.vue';
import FavCarousel from '@/components/FavCarousel.vue';
import MapSingle from '@/components/MapSingle.vue';

export default {
  name: 'RestaurantsAll',
  components: {
    NavBar,
    Hero,
    Search,
    Footer,
    TopCarousel,
    FavCarousel,
    MapSingle
  },
  data() {
      return {
          info: [],
          image: "https://images.unsplash.com/photo-1585773111351-977313a05e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1077&q=80"
      }
  }
}
</script>

<style lang="scss">

.restall {
    &__title {
        text-align: center;
        margin: 50px 0 50px 0;
        font-size: 40px;
    }

    &__container {
        margin: auto;

        @media (min-width: 570px) {
            width: 90%;
        }

        @media (min-width: 1024px) {
        width: 80%;
        }
    }

    &__search {
        margin: 0 0 50px 0;
    }

    &__top {
        margin: 0 0 50px 0;
    }
}
</style>