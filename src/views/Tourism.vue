<template>
  <div class="tourism">
    <NavBar class="navbar-fixed"/>
    <Booking 
        headline="Search hundreds of tourism spots at once." 
        topheadline="Top Kigali tourism spots" 
        favheadline="Rwandan favorites in Kigali" 
        carouselmsg="Explore now."
        searchby="Search tourism spots by destination"
        find="Find tourism spots"
        bookingmsg="spots"
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
