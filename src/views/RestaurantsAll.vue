<template>
  <div class="restall">

    <Hero 
      :image="image"
      title="Eastern Province"
      subtitle=""
    />

    <div class="restall__content">
        <div class="restall__title">
            <h2>Restaurants in {{this.$route.params.restId}}</h2>
        </div>

        <div class="restall__dish">
            <div class="restall__type">
                <h4>Rwandan</h4>
                <p>179 Restaurants</p>
            </div>
            <div class="restall__type">
                <h4>Congolese</h4>
                <p>81 Restaurants</p>
            </div>
            <div class="restall__type">
                <h4>Nigerian</h4>
                <p>70 Restaurants</p>
            </div>
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
          image: "https://images.unsplash.com/photo-1565349479047-d6211d4efc90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      }
  }
}
</script>

<style lang="scss">

.restall {

    &__container {
        padding: 0 10px;
    }

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
        width: 70%;
        }
    }

    &__search {
        margin: 0 0 50px 0;
    }

    &__dish {
        display: flex;

        @media (min-width: 570px) {
            justify-content: center;
            margin: 0 0 50px 0;
        }
    }

    &__type {
        display: none;

        @media (min-width: 570px) {
            display: flex;
            margin: 0 5px 0 0;
            border: 1px solid #ccc;
            padding: 5px;
            
            h4 {
                margin: 0 10px 0 0;
                font-size: 12px;
            }

            p {
                font-weight: 300;
                font-size: 12px;
            }
        }
    }

    &__top {
        margin: 0 0 50px 0;
    }

    &__fav {
        margin: 0 0 50px 0;
    }
}
</style>