<template>
  <div class="clubs">
    <div class="clubs__title">
        <h2>Night Clubs</h2>
    </div>
    <div class="clubs__bookings">
      <Booking 
          headline="Search hundreds of night clubs at once." 
          topheadline="Top Kigali Night Clubs" 
          favheadline="Rwandan favorites in Kigali" 
          carouselmsg="Explore now. Party later."
          searchby="Search Night Clubs by destination"
          find="Find Night Clubs"
          bookingmsg="clubs"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Booking from '@/components/Booking.vue'

export default {
  name: 'NightClubs',
  components: {
    Footer,
    Booking
  }
}
</script>

<style lang="scss">
  .clubs {
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