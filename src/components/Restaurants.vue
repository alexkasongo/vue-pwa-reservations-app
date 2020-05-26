import Restaurants from '@/components/Restaurants.vue';
<template>
  <div class="restaurants">
    <!-- heading -->
    <div class="restaurants__heading">
        <h3>Find and book a restaurant.</h3>
    </div>

    <!-- search component -->
    <div class="restaurants__search">
        <div class="restaurants__grid">
            <div class="restaurants__address">
                <input type="text" placeholder="location">
            </div>
            <div class="restaurants__grid-middle">
                <div class="restaurants__date">
                    <input type="date" name="dateofreservation" id="dateofreservation">
                </div>
                <div class="restaurants__guests">
                    <input type="text" placeholder="2 guests">
                </div>
                <div class="restaurants__time">
                    <input type="text" :placeholder="timestamp">
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

        <div class="restaurants__rec-grid">
            <div class="restaurants__rec-grid-width">
                <div class="restaurants__rec-image">
                </div>
                <div class="restaurants__rec-name">
                    <h2 class="restaurants__rec-name--margin">Butamu - Kigali</h2>
                    <div class="restaurants__rating">
                        <div class="rating-box">
                            <div class="rating-container">
                                <input type="radio" name="rating" value="5" id="star-5"> <label for="star-5">&#9733;</label>
                                
                                <input type="radio" name="rating" value="4" id="star-4"> <label for="star-4">&#9733;</label>
                                
                                <input type="radio" name="rating" value="3" id="star-3"> <label for="star-3">&#9733;</label>
                                
                                <input type="radio" name="rating" value="2" id="star-2"> <label for="star-2">&#9733;</label>
                                
                                <input type="radio" name="rating" value="1" id="star-1"> <label for="star-1">&#9733;</label>
                            </div>
                        </div>
                        <p>65 reviews</p>
                    </div>
                    <p class="restaurants__rec-name--margin">Rwandan franc</p>
                </div>
            </div>

            <div class="restaurants__rec-grid-width">
                <div class="restaurants__rec-image-two">
                </div>
                <div class="restaurants__rec-name">
                    <h2 class="restaurants__rec-name--margin">Butamu - Kigali</h2>
                    <div class="restaurants__rating">
                        <div class="rating-box">
                            <div class="rating-container">
                                <input type="radio" name="rating" value="5" id="star-5"> <label for="star-5">&#9733;</label>
                                
                                <input type="radio" name="rating" value="4" id="star-4"> <label for="star-4">&#9733;</label>
                                
                                <input type="radio" name="rating" value="3" id="star-3"> <label for="star-3">&#9733;</label>
                                
                                <input type="radio" name="rating" value="2" id="star-2"> <label for="star-2">&#9733;</label>
                                
                                <input type="radio" name="rating" value="1" id="star-1"> <label for="star-1">&#9733;</label>
                            </div>
                        </div>
                        <p>65 reviews</p>
                    </div>
                    <p class="restaurants__rec-name--margin">Rwandan franc</p>
                </div>
            </div>
        </div>
    </div>

    <!-- search by destination -->
    <div class="restaurants__destination">
        <h3>Search restaurants by destination</h3>
        <p>Find Restaurants</p>
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
            visible: false,
            timestamp: ""
        }
    },
    created() {
            setInterval(this.getNow, 1000);
        },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
        select(option) {
            this.value = option;
        },
        getNow: function() {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes();
            // const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = time;
            // const dateTime = date +' '+ time;
            this.timestamp = dateTime;
        }
    },
}
</script>

<style lang="scss">
.restaurants {
    width: 300px;
    margin: 10px auto;
    
    @media (min-width: 570px) {
        width: 90%;
    }

    @media (min-width: 1024px) {
       width: 70%;
    }

    &__search {
        @media (min-width: 1024px) {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
        }
    }

    &__grid {
        display: flex;
        flex-direction: column;

        @media (min-width: 1024px) {
           flex-direction: row;
            width: 100%;
        }
    }

    &__address {
        @media (min-width: 1024px) {
            width: 70%;
            margin-right: 5px;
        }
    }

    &__heading {
        display: none;
        margin: 30px 0;

        h3 {
            font-size: 34px;
        }

        @media (min-width: 570px) {
           display: block;
        }
    }
    
    @media (min-width: 570px) {

        &__grid-middle {
            display: flex;
            justify-content: space-between;

            @media (min-width: 1024px) {
               margin-right: 5px;
            }
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
        color: #000;
    }

    ::placeholder {
        color: #000;
    }

    &__button {
        width: 100%;
        padding: 12px 20px;
        height: 46px;
        margin-top: 10px;
        background-color: #339DBE;
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
        color: #339DBE;
    }


    &__rec-image {
        background-image: url("https://images.unsplash.com/photo-1514548383638-cef9251a73ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
        height: 180px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 8px;

        @media (min-width: 570px) {
            margin-right: 2.5px;
        }
    }

    &__rec-image-two {
        background-image: url("https://images.unsplash.com/photo-1565349479047-d6211d4efc90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
        height: 180px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 8px;

        @media (min-width: 570px) {
            margin-left: 2.5px;
        }
    }

    &__rec-name {
        margin: 15px 0px 0px 0px;

        &--margin {
            margin: 0px 0px 5px 0px;
        }

        p {
            font-weight: 300;
            color: #A1ABB3;
            font-size: 14px;
            margin-bottom: 20px;    
        }
    }
    
    &__destination {
        margin: 3em 0 0 0;
        
        h3 {
            font-size: 22px;
            margin: 0 0 5px 0;
        }

        p {
            margin: 0 0 1em 0;
            font-weight: 300;
        }
    }

    @media (min-width: 570px) {
       &__rec-grid {
            display: flex;

            &-width {
                width: 100%;
            }
        }
    }

    @media (min-width: 1024px) {
       &__rec-grid {

            &-width {
                width: 25%;
            }
        }
    }
}

// accordian
$font-color: #000;

.accordion {
  margin: 0 auto 3em auto;
//   max-width: 30em;
    @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
    }
}

.toggle {
  display: none;
}

.option {
  position: relative;

  @media (min-width: 1024px) {
    width: 33%;
  }
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
    & + .title + .content {
        max-height: 500px;
    }
    & + .title:before {
        transform: rotate(90deg) !important;
    }
}

// ratings
.restaurants__rating {
        display: flex;
        margin: 6px 0 0 0;
        align-items: baseline;      
        
        p {
            margin: 0 0 0 10px;
            color: #A1ABB3;
            font-size: 14px;
        }
    }
.rating-box {
    display: inline-block;
    .rating-container {
        direction: rtl !important;
        label {
        display: inline-block;
        margin: 0 0 8px 0;
        color: #d4d4d4;
        cursor: pointer;
        font-size: 12px;
        transition: color 0.2s;
        }
        input {
        display: none;
        }
        label:hover, label:hover ~ label, input:checked ~ label  {
        color: #E59825;
        }
    }
}

</style>