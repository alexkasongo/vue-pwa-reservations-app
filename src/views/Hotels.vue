<template>
  <div class="hotels">
    <div class="hotels">
      <HotelBooking />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HotelBooking from '@/components/HotelBooking.vue'

export default {
  name: 'Hotels',
  components: {
    NavBar,
    HotelBooking,
    Footer
  }
}
</script>

<style lang="scss">
  .hotels {
    margin: 62px 0 0 0;
  }
</style>
