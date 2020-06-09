<template>
  <div class="tourism">
    <div class="tb__comp">
      <TourismBooking />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Booking from '@/components/Booking.vue'
import TourismBooking from '@/components/TourismBooking.vue'

export default {
  name: 'Tourism',
  components: {
    NavBar,
    Footer,
    Booking,
    TourismBooking
  }
}
</script>

<style lang="scss">
  .tb__comp {
    margin: 82px 0 0 0;
    @media (min-width: 1024px) {
       margin: 62px 0 0 0;
    }
  }
</style>