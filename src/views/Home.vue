<template>
  <div class="home">
    <NavBar />
    <Restaurants />
    <Footer />
    <!-- <LandingPage msg="Welcomt to RCA"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Restaurants from '@/components/Restaurants.vue'
import Footer from '@/components/Footer.vue'
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Restaurants,
    Footer,
    LandingPage
  }
}
</script>
