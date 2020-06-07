<template>
  <div>
      <div class="navbar">
          <div class="navbar__container" 
            :style= "[
                    routeName === 'Home' ? styleA : 
                    routeName === 'Hotels' ? styleB : 
                    routeName === 'Transportation' ? styleC : 
                    routeName === 'Tourism' ? styleD : styleE
                ]"
            >
            <div class="navbar__left">
                <div class="navbar__logo">
                    <router-link to="/"><h2 v-if="routeName === 'Home'" class="navbar__logo-active">Logo</h2></router-link>
                    <router-link to="/"><h2 v-if="routeName !== 'Home'" class="navbar__logo-not-active">Logo</h2></router-link>
                </div>
        <!-- <div v-bind:style= "[routeName === 'Home' ? styleA : styleB]"><p style="color:red;">ALEKO</p></div> -->
                <div class="navbar__more">
                    <div class="navbar__highlight">
                        <router-link to="/hotels">Hotels</router-link>
                        <div v-if="routeName === 'Hotels'" class="navbar__highlight-color"></div>
                    </div>
                    <div class="navbar__highlight">
                        <router-link to="/transportation">Transport</router-link>
                        <div v-if="routeName === 'Transportation'" class="navbar__highlight-color"></div>
                    </div>
                    <div class="navbar__highlight">
                        <router-link to="/night-clubs">Night Clubs</router-link>
                        <div v-if="routeName === 'NightClubs'" class="navbar__highlight-color"></div>
                    </div>
                    <div class="navbar__highlight">
                        <router-link to="/tourism">Tourism</router-link>
                        <div v-if="routeName === 'Tourism'" class="navbar__highlight-color"></div>
                    </div>
                    <div class="navbar__highlight">
                        <router-link to="/restaurants">Restaurants</router-link>
                        <div v-if="routeName === 'Restaurants'" class="navbar__highlight-color"></div>
                        <div v-if="routeName === 'RestaurantsAll'" class="navbar__highlight-color"></div>
                        <div v-if="routeName === 'Restaurant'" class="navbar__highlight-color"></div>
                    </div>
                    <div class="navbar__highlight">
                        <router-link to="/security">Security</router-link>
                        <div v-if="routeName === 'Security'" class="navbar__highlight-color"></div>
                    </div>
                </div>
            </div>
            <div class="navbar__right">
                <div>
                    <Slide right noOverlay :closeOnNavigation="true">
                        <!-- <a id="home" href="#">
                            <span>Home</span>
                        </a> -->
                        <div class="navbar__burger">
                            <router-link to="/">Home</router-link>
                            <router-link to="/hotels">Hotels</router-link>
                            <router-link to="/transportation">Transport</router-link>
                            <router-link to="/night-clubs">Night Clubs</router-link>
                            <router-link to="/tourism">Tourism</router-link>
                            <router-link to="/restaurants">Restaurants</router-link>
                            <router-link to="/security">Security</router-link>
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
            transitionName: null,
            routeName: null,
            styleA: {
                // backgroundColor: 'blue',
            },
            styleB: {
                // backgroundColor: 'Green',
                width: '90%'
            },
            styleC: {
                // backgroundColor: 'pink',
                width: '96%'
            },
            styleD: {
                // backgroundColor: 'yellow'
                width: '96%'
            },
            styleE: {
                // backgroundColor: 'purple'
            }
        }
    },
    // watch the `$route` to determine the transition to use
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            this.routeName = to.name
        }
    }
}
</script>

<style lang="scss">
    .navbar {
        background-color: #fafafafa;
        height: 62px;
        display: flex;
        align-items: center;
        padding: 0 1em;
        color: #fff;
        box-shadow: 1px 3px 5px rgba(32, 33, 30, 0.28);
        // position: fixed;
        // top: 0;
        // width: 100%;

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
                color: orange;
                font-weight: 600;
            }
        }

        &__logo-active {
            color: orange;
        }
        &__logo-not-active {
            color: #000;
        }

        &__more {
            display: none;

            @media (min-width: 1024px) {
                display: flex;
                margin: 0 0 0 30px;
                font-size: 14px;
                font-weight: 600;
                height: 30px;
                align-items: center;
            }
            
            a {
                text-decoration: none;
                color: #000;
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

        &__highlight {
            margin: 0 30px 0 0;
            // height: 25px;
        }

        &__highlight-color {
            height: 2px;
            background: orange;
            // transition: all 0.5s ease;
            animation: fadein 2s;
            -moz-animation: fadein 2s; /* Firefox */
            -webkit-animation: fadein 2s; /* Safari and Chrome */
            -o-animation: fadein 2s; /* Opera */
        }
    }

    .bm-burger-button {
        right: 10px !important;
        top: 25px !important;

        @media (min-width: 1024px) {
           right: 15px !important;
        }
    }

    .line-style {
        height: 10%;
    }

    .bm-burger-bars {
        background-color: #000 !important;
    }

    .bm-burger-button {
        height: 15px !important;
        width: 18px !important;
    }

    .bm-menu {
        background-color: #339DBE !important;
        height: calc(100% - 62px) !important;
        left: 0;
        overflow-x: hidden;
        padding-top: 60px;
        position: fixed;
        top: 62px;
        transition: .5s;
        width: 0;
        z-index: 1000;
        margin: 62px 0 0 0 !important;
    }

/*
* FADE IN ANIMATION
*/
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}
/*********************************/
</style>