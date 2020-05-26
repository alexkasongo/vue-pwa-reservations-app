<template>
  <div>
      <div class="navbar">
          <div class="navbar__left">
            <div class="navbar__logo">
                <h2>Logo</h2>
            </div>
            <div class="navbar__more">
                <h2>More</h2>
            </div>
          </div>
          <div class="navbar__right">
            <div class="navbar__bookings">
                <i class="fas fa-suitcase-rolling"></i>
            </div>
            <div class="navbar__login">
                <i class="fas fa-user"></i>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss">
    .navbar {
        background-color: #1a4f5f;
        height: 62px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2em;
        color: #fff;

        &__left {
            display: flex;
            align-items: center;
            width: 100%;
            height: 40px;
        }
        &__right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
            height: 40px;
        }

        &__more {
            padding: 0 1em;
        }
        &__bookings {
            padding: 0 1em;
        }

        &--padding {
            padding: 5px;
        }
    }
</style>