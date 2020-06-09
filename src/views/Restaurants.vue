<template>
  <div class="restaurants">
    <div class="restaurants__title">
        <h2>Restaurants</h2>
    </div>
    <Booking 
      headline="Find and book a restaurant." 
      topheadline="Top Kigali cuisines" 
      favheadline="Rwandan favorites in Kigali" 
      searchby="Search restaurants by destination"
      find="Find restaurants"
      restaurantmsg="restaurants"
      bookingmsg="restaurants"
    />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Booking from '@/components/Booking.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Restaurants',
  components: {
    NavBar,
    Booking,
    Footer
  },
  data() {
      return {

      }
  }
}
</script>

<style lang="scss">
.restaurants {
  margin: 82px 0 0 0;
  &__title {
      width: 95%;
      margin: 0 auto 10px auto;
      h2 {
          font-size: 20px;
          text-align: center;
      }
      @media (min-width: 1024px) {
          display: none;
      }
  }
}
</style>