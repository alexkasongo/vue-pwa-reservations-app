import Restaurants from '@/components/Restaurants.vue';
<template>
  <div class="top-carousel">
      <!-- {{info.photos}} -->
    <div class="top-carousel__grid" v-for="data in info" :key="data.id">
        <div class="top-carousel__container">
            <div class="top-carousel__image" :style="{ backgroundImage: `url(${data.src.large})` }">
            </div>
            <div class="top-carousel__name">
                <h2 class="top-carousel__margin">{{data.photographer}}</h2>
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
          backgroundUrl: "https://source.unsplash.com/user/erondu/1600x900"
      }
  },
  mounted() {
    // const baseURI = 'https://jsonplaceholder.typicode.com/photos/?_limit=4'
    //   this.axios.get(baseURI)
    //   .then((result) => {
    //     this.info = result.data
    //   })

    const URL = "https://api.pexels.com/v1/search?query=restaurant&per_page=4"
    const AuthStr = 'Bearer ' + "563492ad6f91700001000001475af9cf9f8342748b8ed088c1b32b43";
    this.axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
      .then((result) => {
          console.log(`TopCarousel.vue - 41 - variable`, result);
        this.info = result.data.photos
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

        p {
            font-weight: 300;
            color: #A1ABB3;
            font-size: 14px;
            margin-bottom: 5px;    
        }
    }

    &__margin {
        height: 52px;
    }

    &__container {
        width: 100%;
    }
}
</style>