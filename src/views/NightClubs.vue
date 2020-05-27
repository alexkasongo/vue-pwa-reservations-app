<template>
  <div class="clubs">
    <NavBar class="navbar-fixed"/>
    <Booking 
        headline="Search hundreds of night clubs at once." 
        topheadline="Top Kigali Night Clubs" 
        favheadline="Rwandan favorites in Kigali" 
        carouselmsg="Explore now. Party later."
        searchby="Search Night Clubs by destination"
        find="Find Night Clubs"
        bookingmsg="clubs"
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
  name: 'NightClubs',
  components: {
    NavBar,
    Footer,
    Booking
  }
}
</script>
