import Restaurants from '@/components/Restaurants.vue';
<template>
  <div class="top-carousel">
      <!-- {{info.photos}} -->
    <div class="top-carousel__grid" v-for="data in info" :key="data.id">
        <div class="top-carousel__container">
            <router-link :to="`restaurant/${data.title}`">
                <div class="top-carousel__image" :style="{ backgroundImage: `url(${data.url})` }">
                </div>
            </router-link>
            <div class="top-carousel__name">
                <h2 class="top-carousel__margin">{{data.title}}</h2>
                <p class="top-carousel__margin">{{data.id}} {{bookingmsg}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCarousel',
  props: {
      bookingmsg: String
  },
  data() {
      return {
          info: [],
      }
  },
  mounted() {
    // const URL = "https://api.pexels.com/v1/search?query=restaurant&per_page=4"
    // const AuthStr = 'Bearer ' + "563492ad6f91700001000001475af9cf9f8342748b8ed088c1b32b43";
    // this.axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
    //   .then((result) => {
    //     this.info = result.data.photos
    // })

    const URL = "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=4"
    this.axios.get(URL)
      .then((result) => {
        this.info = result.data
    })
  }
}
</script>

<style lang="scss">
.top-carousel {
    

    @media (min-width: 570px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 5px;
    }

    &__grid {
        width: 100%;
    }

    &__image {
        height: 180px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 8px;
    }

    @media (min-width: 570px) {
       &__grid {
            display: flex;

            &-width {
                width: 100%;
            }
        }
    }

    @media (min-width: 1024px) {
       &__grid {

            &-width {
                width: 25%;
            }
        }
    }

    &__name {
        margin: 15px 0px 0px 0px;
        

        &--margin {
            margin: 0px 0px 5px 0px;
        }

        h2 {
            color: #212a30;
        }

        p {
            font-weight: 300;
            color: #212a30;
            font-size: 14px;
            margin-bottom: 5px;    
        }
    }

    &__margin {
        // height: 52px;
        margin: 0 0 10px 0;
    }

    &__container {
        width: 100%;
    }
}
</style>