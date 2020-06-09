<template>
  <div class="tourism">
    <div class="tourism__title">
        <h2>Security</h2>
    </div>
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
<style lang="scss">
.tourism {
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