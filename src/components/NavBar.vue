<template>
  <div>
      <div class="navbar">
          <div class="navbar__container">
            <div class="navbar__left">
                <div class="navbar__logo">
                    <router-link to="/"><h2>Logo</h2></router-link>
                </div>
                <div class="navbar__more">
                    <router-link to="/"><h2>Restaurants</h2></router-link>
                    <router-link to="/hotels"><h2>Hotels</h2></router-link>
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
        // justify-content: space-between;
        align-items: center;
        padding: 0 1em;
        color: #fff;

        @media (min-width: 570px) {
           padding: 0;
        }

        &__container {
            display: flex;
            width: 100%;
            margin: auto;

            @media (min-width: 570px) {
               width: 90%;
            }

            @media (min-width: 1024px) {
               width: 70%;
            }
        }

        &__logo {

            a {
                text-decoration: none;
                color: #fff;
            }
        }

        &__more {
            display: flex;
            padding: 0 1em;
            
            a {
                text-decoration: none;
                color: #fff;
                margin-right: 10px;
            }
        }

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

        &__bookings {
            padding: 0 1em;
        }

        &--padding {
            padding: 5px;
        }
    }
</style>