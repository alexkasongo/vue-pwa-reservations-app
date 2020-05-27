<template>
  <div class="tourism">
    <!-- <NavBar class="navbar-fixed"/> -->
    <Booking 
        headline="Search hundreds of transportation methods at once." 
        topheadline="Top Kigali tourism spots" 
        favheadline="Rwandan favorites in Kigali" 
        carouselmsg="Explore now. Travel later."
        searchby="Search transportation by destination"
        find="Find transportation"
        bookingmsg=""
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
  name: 'Tourism',
  components: {
    NavBar,
    Footer,
    Booking
  }
}
</script>
