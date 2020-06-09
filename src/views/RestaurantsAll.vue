<template>
  <div class="restall">

    <Hero 
      :image="image"
      title=""
      subtitle=""
    />

    <div class="restall__content">
        <div class="restall__title">
            <h2>Restaurants in {{this.$route.params.restId}}</h2>
        </div>

        <div class="restall__dish">
            <div class="restall__type">
                <h4>Rwandan</h4>
                <p>179 Restaurants</p>
            </div>
            <div class="restall__type">
                <h4>Congolese</h4>
                <p>81 Restaurants</p>
            </div>
            <div class="restall__type">
                <h4>Nigerian</h4>
                <p>70 Restaurants</p>
            </div>
        </div>

        <div class="restall__container">
            <div class="restall__search">
                <Search/>
            </div>
            <div class="restall__top">
                <TopCarousel />
            </div>
            <div class="restall__fav">
                <FavCarousel />
            </div>
        </div>
    </div>


    <div class="restall__map">
        <MapSingle :routeName="this.$route.name"/>
    </div>


        
    <div class="restall__tips">
        <div class="restall__tips-title">
            <h3>Tips about restaurants in {{this.$route.params.restId}}</h3>
        </div>
        <div class="restall__tips-points">
            <i class="fas fa-check-circle"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vitae, accusantium non! Aliquid, adipisci non Laudantium 
                alias adipisci asperiores tempore amet, consequatur, 
                excepturi ex consectetur aperiam voluptatum fugiat, 
                quis nostrum reprehenderit.
            </p>
        </div>
        <div class="restall__tips-points">
            <i class="fas fa-check-circle"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vitae, accusantium non! Aliquid, adipisci non Laudantium 
                alias adipisci asperiores tempore amet, consequatur, 
                excepturi ex consectetur aperiam voluptatum fugiat, 
                quis nostrum reprehenderit.
            </p>
        </div>
        <div class="restall__tips-points">
            <i class="fas fa-check-circle"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vitae, accusantium non! Aliquid, adipisci non Laudantium 
                alias adipisci asperiores tempore amet, consequatur, 
                excepturi ex consectetur aperiam voluptatum fugiat, 
                quis nostrum reprehenderit.
            </p>
        </div>
    </div>


    <div class="accordion-two">
        <div class="restall__tips-title">
            <h3>FAQs about restaurants in {{this.$route.params.restId}}</h3>
        </div>

        <div class="option-two">
            <input type="checkbox" id="toggle1" class="toggle-two" />
            <label class="title-two" for="toggle1">What are the trending new restaurants in Fort {{this.$route.params.restId}}</label>
            <div class="content-two">
                <ul>
                    <li>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nam natus minima reprehenderit porro, optio ex sint non explicabo
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nam natus minima reprehenderit porro, optio ex sint non explicabo
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="option-two">
            <input type="checkbox" id="toggle2" class="toggle-two" />
            <label class="title-two" for="toggle2">Where are the most romantic places to eat in {{this.$route.params.restId}}</label>
            <div class="content-two">
                <ul>
                    <li>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nam natus minima reprehenderit porro, optio ex sint non explicabo
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nam natus minima reprehenderit porro, optio ex sint non explicabo
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="option-two">
            <input type="checkbox" id="toggle3" class="toggle-two" />
            <label class="title-two" for="toggle3">Where are the best places to eat in {{this.$route.params.restId}} for families with children?</label>
            <div class="content-two">
                <ul>
                    <li>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nam natus minima reprehenderit porro, optio ex sint non explicabo
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nam natus minima reprehenderit porro, optio ex sint non explicabo
                        </p>
                    </li>
                </ul>
            </div>
        </div>

    </div>


    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'
import Search from '@/components/Search.vue';
import TopCarousel from '@/components/TopCarousel.vue';
import FavCarousel from '@/components/FavCarousel.vue';
import MapSingle from '@/components/MapSingle.vue';

export default {
  name: 'RestaurantsAll',
  components: {
        NavBar,
        Hero,
        Search,
        Footer,
        TopCarousel,
        FavCarousel,
        MapSingle
    },
    data() {
        return {
            info: [],
            image: "https://via.placeholder.com/2000.png/",
            routeName: null
        }
    },
    watch: {
        '$route' (to, from) {
            this.routeName = to.name
        }
    }
}
</script>

<style lang="scss">

.restall {

    &__container {
        padding: 0 10px;
    }

    &__title {
        text-align: center;
        margin: 50px 0 50px 0;
        font-size: 40px;
    }

    &__container {
        margin: auto;

        @media (min-width: 570px) {
            width: 90%;
        }

        @media (min-width: 1024px) {
        width: 70%;
        }
    }

    &__search {
        margin: 0 0 50px 0;
    }

    &__dish {
        display: flex;

        @media (min-width: 570px) {
            justify-content: center;
            margin: 0 0 50px 0;
        }
    }

    &__type {
        display: none;

        @media (min-width: 570px) {
            display: flex;
            margin: 0 5px 0 0;
            border: 1px solid #ccc;
            padding: 5px;
            
            h4 {
                margin: 0 10px 0 0;
                font-size: 12px;
            }

            p {
                font-weight: 300;
                font-size: 12px;
            }
        }

        @media (min-width: 1024px) {
            h4 {
                font-size: 14px;
            }

            p {
                font-size: 14px;
            }
        }
    }

    &__tips {
        width: 90%;
        margin: 0 auto 50px auto;
        @media (min-width: 1024px) {
            width: 70%;
        }
    }

    &__tips-title {
        margin: 0 0 25px 0;

        h3 {
            font-size: 24px;
        }
        @media (min-width: 1024px) {
           h3 {
                font-size: 28px;
            }
        }
    }

    &__tips-points {
        display: flex;
        margin: 0 0 10px 0;

        svg {
            color: green;
            margin: 0 20px 0 0;
        }

        p {
            font-size: 14px;
            font-weight: 300;
            max-width: 650px;
        }
    }

    &__top {
        margin: 0 0 50px 0;
    }

    &__fav {
        margin: 0 0 50px 0;
    }

    &__map {
        margin: 0 0 50px 0;
    }
}


// accordian
$font-color: #212a30;

.accordion-two {
    width: 90%;
    margin: 0 auto 3em auto;
    @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        width: 70%;
    }
}

.toggle-two {
  display: none;
}

.option-two {
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    width: 100%;
  }
}

.title-two,
.content-two {
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.2s;
}

.title-two {
  background: #fff;
  padding: 1em 0em 0em 0em;
  display: block;
  color: $font-color;
  font-size: 12px;
  @media (min-width: 1024px) {
     font-size: 20px;
  }
}
.title-two:after, .title-two:before {
  content: '';
  position: absolute;
  right: 1.25em;
  top: 1.25em;
  width: 1px;
  height: 0.75em;
  background-color: $font-color;
  transition: all 0.2s;
}
.title-two:after {
  transform: rotate(90deg);
}

.content-two {
  max-height: 0;
  overflow: hidden;
  background-color: #fff;
  ul {
    li {
        p {
            text-decoration: none;
            font-size: 12px;
            font-weight: 300;
            color: #212a30;
            line-height: 1.5;
            padding: 0.5em 0;
        }
    }
  }
//   p {
//     margin: 0;
//     padding: 0.5em 1em 1em;
//     font-size: 0.9em;
//     line-height: 1.5;
//   }
}

.toggle-two:checked {
    & + .title-two + .content-two {
        max-height: 500px;
    }
    & + .title-two:before {
        transform: rotate(90deg) !important;
    }
}
</style>