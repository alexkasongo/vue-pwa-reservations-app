<template>
  <div class="trans">
    <div class="trans__cars">
      <Cars />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Cars from '@/components/Cars.vue'

export default {
  name: 'Tourism',
  components: {
    NavBar,
    Cars
  }
}
</script>

<style lang="scss">
  .trans {
      // &__cars {
      //   margin: 82px 0 0 0;
      // }
  }
</style>
