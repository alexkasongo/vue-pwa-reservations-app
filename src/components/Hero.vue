<template>
  <div class="hero">
    <div class="hero__container">
<!-- d    <div class="hero__container"  v-for="data in info" :key="data.id"> -->

      <div class="hero__hero" :style="{ backgroundImage: `url(${image})` }">
        <div class="hero__titles">
            <h2>{{title}}</h2>
            <h4>{{subtitle}}</h4>
        </div>
      </div>

    </div>
    
    <Footer />
  </div>
</template>

<script>

export default {
  name: 'Hero',
  props: {
      info: Array,
      image: String,
      title: String,
      subtitle: String
  },
  data() {
      return {
         
      }
  }
}
</script>

<style lang="scss">
  .hero {
        margin-top: 62px;

    &__background {
        background-color: #fff;
    }

    &__container {
        
        // @media (min-width: 570px) {
        //    width: 90%;
        //    margin: auto;
        // }

        // @media (min-width: 1024px) {
        //    width: 80%;
        //    margin: auto;
        // }
    }

    &__hero {
        height: 350px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    &__booking {
        margin-top: 30px;
    }

    &__titles {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 95%;
        margin: 0px auto 0 auto;
        text-align: center;

        h2 {
            color: #fff;
            font-size: 36px;
            margin-bottom: 30px;
        }
        h4 {
            color: #fff;
            font-size: 22px;
        }


        @media (min-width: 570px) {
           
            h2 {
                font-size: 46px;
                margin-bottom: 30px;
            }

            h4 {
                font-size: 22px;
            }

        }

        @media (min-width: 1024px) {
           
            h2 {
                font-size: 60px;
            }

            h4 {
                font-size: 40px;
            }

        }

    }

  }
</style>