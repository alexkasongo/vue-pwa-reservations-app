<template>
  <div>
      <div class="navbar">
          <div class="navbar__container">
            <div class="navbar__left">
                <div class="navbar__logo">
                    <router-link to="/"><h2>Logo</h2></router-link>
                </div>
                <div class="navbar__more">
                        <router-link to="/restaurants"><h2>Restaurants</h2></router-link>
                        <router-link to="/hotels"><h2>Hotels</h2></router-link>
                        <router-link to="/night-clubs"><h2>Night Clubs</h2></router-link>
                        <router-link to="/tourism"><h2>Tourism</h2></router-link>
                        <router-link to="/transportation"><h2>Transport</h2></router-link>
                        <router-link to="/security"><h2>Security</h2></router-link>
                </div>
            </div>
            <div class="navbar__right">
                <!-- <div class="navbar__bookings">
                    <i class="fas fa-suitcase-rolling"></i>
                </div>
                <div class="navbar__login">
                    <i class="fas fa-user"></i>
                </div> -->
                <div>
                    <Slide right noOverlay :closeOnNavigation="true">
                        <!-- <a id="home" href="#">
                            <span>Home</span>
                        </a> -->
                        <div class="navbar__burger">
                            <router-link to="/"><h2>Restaurants</h2></router-link>
                            <router-link to="/hotels"><h2>Hotels</h2></router-link>
                            <router-link to="/night-clubs"><h2>Night Clubs</h2></router-link>
                            <router-link to="/tourism"><h2>Tourism</h2></router-link>
                            <router-link to="/transportation"><h2>Transport</h2></router-link>
                            <router-link to="/security"><h2>Security</h2></router-link>
                        </div>
                    </Slide>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu' 

export default {
    name: 'NavBar',
    components: {
        Slide 
    },
    data() {
        return {
            transitionName: null
        }
    },
    // watch the `$route` to determine the transition to use
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}
</script>

<style lang="scss">
    .navbar {
        background-color: #fafafa;
        // background-color: #FFA501;
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
               width: 80%;
            }
        }

        &__logo {

            a {
                text-decoration: none;
                color: #000;
            }
        }

        &__more {
            display: none;

            @media (min-width: 1024px) {
                display: flex;
                padding: 0 1em; 
            }
            
            a {
                text-decoration: none;
                color: #000;
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
            height: 40px;
        }

        &__bookings {
            padding: 0 1em;
        }

        &--padding {
            padding: 5px;
        }

        &__burger {
            display: flex;
            flex-direction: column;

            a {
                text-decoration: none;
                color: #fff;
                font-size: 30px;
                margin-bottom: 50px;
                font-weight: 300;
            }
        }
    }

    .bm-burger-button {
        right: 10px !important;
        top: 25px;

        @media (min-width: 1024px) {
           right: 15px !important;
        }
    }

    .line-style {
        height: 10%;
    }

    .bm-burger-bars {
        background-color: #000;
    }

    .bm-burger-button {
        height: 15px;
        width: 18px;
    }

    .bm-menu {
        background-color: #339DBE;
        height: calc(100% - 62px);
        left: 0;
        overflow-x: hidden;
        padding-top: 60px;
        position: fixed;
        top: 62px;
        transition: .5s;
        width: 0;
        z-index: 1000;
    }
</style>