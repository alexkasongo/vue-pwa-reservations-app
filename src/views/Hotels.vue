<template>
  <div class="about">
    <!-- <NavBar class="navbar-fixed"/> -->
    <Booking 
        headline="Search hundreds of hotels at once." 
        topheadline="Top Kigali destinations" 
        favheadline="Rwandan favorites in Kigali" 
        carouselmsg="Explore now. Travel later."
        searchby="Search hotels by destination"
        find="Find hotels"
        bookingmsg="hotels"
    />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Booking from '@/components/Booking.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Footer,
    Booking
  }
}
</script>
