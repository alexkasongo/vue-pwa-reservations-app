import Restaurants from '@/components/Restaurants.vue';
<template>
  <div class="restaurants">
    <!-- search component -->
    <div class="restaurants__search">
        <div class="restaurants__grid">
            <div class="restaurants__address">
                <input type="text" placeholder="address">
            </div>
            <div class="restaurants__grid-middle">
                <div class="restaurants__date">
                    <input type="date" name="dateofbirth" id="dateofbirth">
                </div>
                <div class="restaurants__guests">
                    <input type="text" placeholder="guests">
                </div>
                <div class="restaurants__time">
                    <input type="text" placeholder="time">
                </div>
            </div>
            </div>
        <div class="restaurants__search">
            <button class="restaurants__button">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>

    <!-- recommendations -->
    <div class="restaurants__reccomendations">
        <div class="restaurants__rec-title">
            <h3 class="restaurants__rec-title--left">Rwandan Favorites in Kigali</h3>
            <h3 class="restaurants__rec-title--right">
                <a class="restaurants__rec-link" href="#">See all</a>
            </h3>
        </div>
        <div class="restaurants__rec-image">
        </div>
        <div class="restaurants__rec-name">
            <h2 class="restaurants__rec-name--margin">Butamu - Kigali</h2>
            <h2 class="restaurants__rec-name--margin">Rating</h2>
            <h2 class="restaurants__rec-name--margin">Cost $$</h2>
        </div>
    </div>

    <!-- locations dropdown -->
    <div class="container">
        <div class="accordion">

            <div class="option">
                <input type="checkbox" id="toggle1" class="toggle" />
                <label class="title" for="toggle1">Eastern Province</label>
                <div class="content">
                    <ul>
                        <li><a href="#">Bugesera</a></li>
                        <li><a href="#">Gatsibo</a></li>
                        <li><a href="#">Kayonza</a></li>
                        <li><a href="#">Kirehe</a></li>
                        <li><a href="#">Ngoma</a></li>
                        <li><a href="#">Nyagatare</a></li>
                        <li><a href="#">Rwamagana</a></li>
                    </ul>
                </div>
            </div>

            <div class="option">
                <input type="checkbox" id="toggle2" class="toggle" />
                <label class="title" for="toggle2">Kigali</label>
                <div class="content">
                    <ul>
                        <li><a href="#">Bugesera</a></li>
                        <li><a href="#">Gatsibo</a></li>
                        <li><a href="#">Kayonza</a></li>
                        <li><a href="#">Kirehe</a></li>
                        <li><a href="#">Ngoma</a></li>
                        <li><a href="#">Nyagatare</a></li>
                        <li><a href="#">Rwamagana</a></li>
                    </ul>
                </div>
            </div>

            <div class="option">
                <input type="checkbox" id="toggle3" class="toggle" />
                <label class="title" for="toggle3">Northern Province</label>
                <div class="content">
                   <ul>
                        <li><a href="#">Bugesera</a></li>
                        <li><a href="#">Gatsibo</a></li>
                        <li><a href="#">Kayonza</a></li>
                        <li><a href="#">Kirehe</a></li>
                        <li><a href="#">Ngoma</a></li>
                        <li><a href="#">Nyagatare</a></li>
                        <li><a href="#">Rwamagana</a></li>
                    </ul>
                </div>
            </div>

            <div class="option">
                <input type="checkbox" id="toggle4" class="toggle" />
                <label class="title" for="toggle4">Northern Province</label>
                <div class="content">
                    <ul>
                        <li><a href="#">Bugesera</a></li>
                        <li><a href="#">Gatsibo</a></li>
                        <li><a href="#">Kayonza</a></li>
                        <li><a href="#">Kirehe</a></li>
                        <li><a href="#">Ngoma</a></li>
                        <li><a href="#">Nyagatare</a></li>
                        <li><a href="#">Rwamagana</a></li>
                    </ul>
                </div>
            </div>

            <div class="option">
                <input type="checkbox" id="toggle5" class="toggle" />
                <label class="title" for="toggle5">Southern Province</label>
                <div class="content">
                    <ul>
                        <li><a href="#">Bugesera</a></li>
                        <li><a href="#">Gatsibo</a></li>
                        <li><a href="#">Kayonza</a></li>
                        <li><a href="#">Kirehe</a></li>
                        <li><a href="#">Ngoma</a></li>
                        <li><a href="#">Nyagatare</a></li>
                        <li><a href="#">Rwamagana</a></li>
                    </ul>
                </div>
            </div>

            <div class="option">
                <input type="checkbox" id="toggle6" class="toggle" />
                <label class="title" for="toggle6">Western Province</label>
                <div class="content">
                    <ul>
                        <li><a href="#">Bugesera</a></li>
                        <li><a href="#">Gatsibo</a></li>
                        <li><a href="#">Kayonza</a></li>
                        <li><a href="#">Kirehe</a></li>
                        <li><a href="#">Ngoma</a></li>
                        <li><a href="#">Nyagatare</a></li>
                        <li><a href="#">Rwamagana</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Restaurants',
    data() {
        return {
            value: 'Kigali Restaurants',
            list: ["Orange","Apple","Kiwi", "Lemon", "Pineapple"],
            visible: false
        }
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
        select(option) {
            this.value = option;
        }
    }
}
</script>

<style lang="scss">
    .restaurants {
        width: 300px;
        margin: 10px auto;
        
        @media (min-width: 570px) {
           width: 70%;
        }

        &__grid {
            display: flex;
            flex-direction: column;
        }
        
        @media (min-width: 570px) {

            &__grid-middle {
                display: flex;
                justify-content: space-between;
            }

            &__date {
                width: 100%;
                margin: 0px 5px 0px 0px;
            }
            &__guests {
                width: 100%;
                margin: 0px 5px 0px 0px;
            }
            &__time {   
                width: 100%;
            }
        }
 
        input[type=text] {
            width: 100%;
            padding: 12px 20px;
            margin-top: 5px;
            height: 46px;
            background-color: #EEEEEE;
            border: 0;
            border-radius: 8px;
        }

        input[type=date] {
            width: 100%;
            padding: 12px 20px;
            margin-top: 5px;
            height: 46px;
            background-color: #EEEEEE;
            border: 0;
            border-radius: 8px;
        }

        &__button {
            width: 100%;
            padding: 12px 20px;
            height: 46px;
            margin-top: 10px;
            background-color: #0081E0;
            border: 0;
            color: #fff;
            border-radius: 8px;
        }
        
        // reccomendations
        &__reccomendations {
            margin: 50px 0px 0px 0px;
        }

        &__rec-title {
            margin: 0px 0px 15px 0px;
            display: flex;

            &--left {
                width: 70%;
            }
            &--right {
                width: 30%;
                text-align: right;
            }
        }

        &__rec-link {
            text-decoration: none;
            color: #0081E0;
        }


        &__rec-image {
            background-image: url("https://images.unsplash.com/photo-1514548383638-cef9251a73ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
            height: 180px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 8px;
        }

        &__rec-name {
            margin: 15px 0px 0px 0px;

            &--margin {
                margin: 0px 0px 5px 0px;
            }
        }
    }

$font-color: #000;

.accordion {
  margin: 3em auto;
  max-width: 30em;
}

.toggle {
  display: none;
}

.option {
  position: relative;
//   margin-bottom: 1em;
}

.title,
.content {
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.2s;
}

.title {
  background: #fff;
  padding: 1em 0em 0em 0em;
  display: block;
  color: $font-color;
}
.title:after, .title:before {
  content: '';
  position: absolute;
  right: 1.25em;
  top: 1.25em;
  width: 1px;
  height: 0.75em;
  background-color: $font-color;
  transition: all 0.2s;
}
.title:after {
  transform: rotate(90deg);
}

.content {
  max-height: 0;
  overflow: hidden;
  background-color: #fff;
  ul {
    li {
        a {
            text-decoration: none;
            font-size: 12px;
            font-weight: 300;
            color: #333;
        }
    }
  }
  p {
    margin: 0;
    padding: 0.5em 1em 1em;
    font-size: 0.9em;
    line-height: 1.5;
  }
}

.toggle:checked {
    & + .title,
    // & + .title + .content {
    //     box-shadow: 3px 3px 6px #ddd, -3px 3px 6px #ddd;
    // }
    & + .title + .content {
        max-height: 500px;
    }
    & + .title:before {
        transform: rotate(90deg) !important;
    }
}

</style>