<template>
  <div class="fav-carousel">
    <div class="fav-carousel__grid" v-for="data in info" :key="data.id">
        <div class="fav-carousel__container">
            <div class="fav-carousel__image" :style="{ backgroundImage: `url(${data.url})` }">
            </div>
            <div class="fav-carousel__name">
                <h2 class="fav-carousel__margin">{{data.title}}</h2>
                <div class="fav-carousel__rating">
                    <div class="rating-box">
                        <div class="rating-container">
                            <input type="radio" name="rating" value="5" id="star-5"> <label for="star-5">&#9733;</label>
                            
                            <input type="radio" name="rating" value="4" id="star-4"> <label for="star-4">&#9733;</label>
                            
                            <input type="radio" name="rating" value="3" id="star-3"> <label for="star-3">&#9733;</label>
                            
                            <input type="radio" name="rating" value="2" id="star-2"> <label for="star-2">&#9733;</label>
                            
                            <input type="radio" name="rating" value="1" id="star-1"> <label for="star-1">&#9733;</label>
                        </div>
                    </div>
                    <p>65 reviews</p>
                </div>
                <p class="fav-carousel__margin">Rwandan franc</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FavCarousel',
  data() {
      return {
          info: []
      }
  },
  mounted() {
    const URL = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4"
    this.axios.get(URL)
      .then((result) => {
        this.info = result.data
    })
  }
}
</script>

<style lang="scss">
.fav-carousel {
    width: 95%;
    margin: auto;

    @media (min-width: 570px) {
        width: 100%;
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
        height: 200px;
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
            margin: 5px 0 5px 0;    
        }
    }

    &__margin {
        margin: 0 0 10px 0;
    }

    &__container {
        width: 100%;
    }
}
</style>