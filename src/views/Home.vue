<template>
  <div class="home">
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
import Booking from '@/components/Booking.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Booking,
    Footer,
    Hero
  },
  data() {
      return {
          info: [],
          image: "https://images.unsplash.com/photo-1513319936388-8a3a7828b9b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      }
  }
}
</script>

<style lang="scss">
  .home {
        margin-top: 62px;

    &__background {
        background-color: #fff;
        margin: 100px 0 0 0;
    }

    &__booking {
        margin-top: 30px;
    }

  }
</style>