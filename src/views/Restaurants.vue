<template>
  <div class="restaurants">
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