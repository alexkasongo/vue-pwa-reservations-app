<template>
  <div class="home">
    <div class="home__container"  v-for="data in info" :key="data.id">
      <!-- <div class="home__hero" :style="{ backgroundImage: `url(${data.src.original})` }"> -->
      <div class="home__hero" :style="{ backgroundImage: `url(https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80)` }">
        <div class="home__titles">
            <!-- <h2>Reservations made easy.</h2> -->
            <!-- <h4>Search hundreds of packages at once</h4> -->
        </div>
      </div>
    </div>
    
    <div class="home__background">
        <Booking 
            class="home__booking"
            headline="Find and book a restaurant." 
            topheadline="Top Kigali cuisines" 
            favheadline="Rwandan favorites in Kigali" 
            searchby="Search restaurants by destination"
            find="Find restaurants"
            restaurantmsg="restaurants"
            bookingmsg="restaurants"
        />
    </div>
    

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Booking from '@/components/Booking.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Booking,
    Footer
  },
  data() {
      return {
          info: [],
      }
  },
  mounted() {
    const URL = "https://api.pexels.com/v1/search?query=photograph-of-a-woman-in-a-coffee-shop-1002740&per_page=1"
    const AuthStr = 'Bearer ' + "563492ad6f91700001000001475af9cf9f8342748b8ed088c1b32b43";
    this.axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
      .then((result) => {
        this.info = result.data.photos
    })
  }
}
</script>

<style lang="scss">
  .home {
        margin-top: 62px;

    &__background {
        background-color: #fff;
    }

    &__container {
        // height: 300px;
        
        @media (min-width: 570px) {
           width: 90%;
           margin: auto;
        }

        @media (min-width: 1024px) {
           width: 80%;
           margin: auto;
        }
    }

    &__hero {
        height: 400px;
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
            color: #DB133C;
            font-size: 36px;
            margin-bottom: 30px;
        }
        h4 {
            color: #DB133C;
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