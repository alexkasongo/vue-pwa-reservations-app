<template>
  <div class="tourism">
    <NavBar class="navbar-fixed"/>
    <Booking 
        headline="Search hundreds of security services at once." 
        topheadline="Top Kigali security services" 
        favheadline="Rwandan favorites in Kigali" 
        carouselmsg="Explore now."
        searchby="Search security services by destination"
        find="Find security"
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
