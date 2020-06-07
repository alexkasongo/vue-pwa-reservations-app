<template>
    <div class="hbbody">
        <div class="hbtop">
            <div class="hbtop__hbsearch">
                <Search />
            </div>
        </div>
        <div class="hotelb">
            <div class="hotelb__left">
                <!-- <div class="hotelb__left-map left-mod-one">map</div> -->
                <div class="hotelb__left-price-alert left-mod-one">
                    <div class="hotelb__left-alert-top">
                        <div class="hotelb__left-aler-bell">
                            <i class="far fa-bell"></i>
                        </div>
                        <h4>Price Alert</h4>
                    </div>
                    <div class="hotelb__left-alert-btm">
                        <h4>Track prices</h4>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <div class="hotelb__left-rating left-mod-one">
                    <div class="accordion">
                        <div class="accordian-option">
                            <input type="checkbox" id="toggle1" class="accordian-toggle" checked/>
                            <label class="accordian-title" for="toggle1">Stars</label>
                            <div class="accordian-content">
                                <div class="big-rating-box">
                                    <div class="big-rating-container">
                                        <input type="radio" name="rating" value="5" id="star-5"> <label for="star-5">&#9733;</label>
                                        
                                        <input type="radio" name="rating" value="4" id="star-4"> <label for="star-4">&#9733;</label>
                                        
                                        <input type="radio" name="rating" value="3" id="star-3" checked> <label for="star-3">&#9733;</label>
                                        
                                        <input type="radio" name="rating" value="2" id="star-2"> <label for="star-2">&#9733;</label>
                                        
                                        <input type="radio" name="rating" value="1" id="star-1"> <label for="star-1">&#9733;</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hotelb__left-review left-mod-one">
                    <div class="accordion">
                        <div class="accordian-option">
                            <input type="checkbox" id="toggle2" class="accordian-toggle" checked/>
                            <label class="accordian-title" for="toggle2">Review score</label>
                            <div class="accordian-content">
                                <div class="sqr-rating-box">
                                    <div class="sqr-rating-container">
                                        <input type="radio" name="rating" value="10" id="star-10"> <label for="star-10">&#9632;</label>
                                        
                                        <input type="radio" name="rating" value="9" id="star-9"> <label for="star-9">&#9632;</label>
                                        
                                        <input type="radio" name="rating" value="8" id="star-8"> <label for="star-8">&#9632;</label>
                                        
                                        <input type="radio" name="rating" value="7" id="star-7"> <label for="star-7">&#9632;</label>
                                        
                                        <input type="radio" name="rating" value="6" id="star-6"> <label for="star-6">&#9632;</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hotelb__left-price left-mod-one">
                    <div class="accordion">
                        <div class="accordian-option">
                            <input type="checkbox" id="toggle3" class="accordian-toggle" checked/>
                            <label class="accordian-title" for="toggle3">Stars</label>
                            <div class="accordian-content">
                                <h1>price</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hotelb__left-freebies left-mod-one">
                    <div class="accordion">
                        <div class="accordian-option">
                            <input type="checkbox" id="toggle4" class="accordian-toggle" checked/>
                            <label class="accordian-title" for="toggle4">Freebies</label>
                            <div class="accordian-content">
                                <div class="hotelb__left-freebies-checkbtn">
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Free breakfast</span>
                                    </label>
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Free parking</span>
                                    </label>
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Free internet</span>
                                    </label>
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Free cancelation</span>
                                    </label>
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Free airport shuttle</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hotelb__left-search-name left-mod-one">
                    <div class="accordion">
                        <div class="accordian-option">
                            <input type="checkbox" id="toggle5" class="accordian-toggle" checked/>
                            <label class="accordian-title" for="toggle5">Hotel name</label>
                            <div class="accordian-content">
                                <div class="search__address">
                                    <input type="text" placeholder="search by name">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hotelb__left-search-chain left-mod-one">
                    <div class="accordion">
                        <div class="accordian-option">
                            <input type="checkbox" id="toggle6" class="accordian-toggle" checked/>
                            <label class="accordian-title" for="toggle6">Hotel chain</label>
                            <div class="accordian-content">
                                <div class="search__address">
                                    <input type="text" placeholder="search by chain">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hotelb__left-search-location left-mod-one">
                    <div class="accordion">
                        <div class="accordian-option">
                            <input type="checkbox" id="toggle7" class="accordian-toggle" checked/>
                            <label class="accordian-title" for="toggle7">Location</label>
                            <div class="accordian-content">
                                <div class="search__address">
                                    <input type="text" placeholder="search by location">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hotelb__left-search-neighborhoods left-mod-one">
                    <div class="accordion">
                        <div class="accordian-option">
                            <input type="checkbox" id="toggle8" class="accordian-toggle" checked/>
                            <label class="accordian-title" for="toggle8">Neighborhoods</label>
                            <div class="accordian-content">
                                <div class="hotelb__left-freebies-checkbtn">
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Bugesera</span>
                                    </label>
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Gatsibo</span>
                                    </label>
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Kayonza</span>
                                    </label>
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Kirehe</span>
                                    </label>
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Ngoma</span>
                                    </label>
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Nyagatare</span>
                                    </label>
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1">
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Rwamagana</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hotelb__middle">
                <!-- <div class="hotelb__middle-announcement">announcement</div>
                <div class="hotelb__middle-signin">signin</div> -->

                <div class="hotelbcard">
                    <div class="hotelbcard__searchbox" v-for="data in info" :key="data.id">
                        <div class="hotelbcard__searchbox-left">
                            <div class="hotelbcard__searchbox-image" :style="{ backgroundImage: `url(${data.url})` }">
                            </div>
                        </div>
                        <div class="hotelbcard__searchbox-middle">
                            <div class="hotelbcard__searchbox-middle--pd">
                                <div class="hotelbcard__searchbox-title">
                                    <h2>Conrad Fort Lauderdale Beach</h2>
                                </div>
                                <div class="hotelbcard__searchbox-rating">
                                    <div class="rating-box">
                                        <div class="rating-container">
                                            <input type="radio" name="rating" value="5" id="star-5"> <label for="star-5">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="4" id="star-4"> <label for="star-4">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="3" id="star-3"> <label for="star-3">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="2" id="star-2"> <label for="star-2">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="1" id="star-1"> <label for="star-1">&#9733;</label>
                                        </div>
                                    </div>
                                    <!-- <p class="hotelbcard__searchbox-reviews">65 reviews</p> -->
                                </div>
                                <div class="hotelbcard__searchbox-options">
                                    <div class="hotelbcard__searchbox-type">
                                        <p>Option-1</p>
                                        <p>Option-2</p>
                                        <p>Option-3</p>
                                    </div>
                                </div>
                                <div class="hotelbcard__searchbox-place">
                                    <p>Downtown</p>
                                </div>
                                <div class="hotelbcard__searchbox-times">
                                    <div class="hotelbcard__searchbox-deal hotelbcard__searchbox-mod">
                                        <p>Private Deal</p>
                                        <p>$200</p>
                                    </div>
                                    <div class="hotelbcard__searchbox-signin hotelbcard__searchbox-mod">
                                        <p>Sign in to</p>
                                        <p>unlock</p>
                                    </div>
                                    <div class="hotelbcard__searchbox-more hotelbcard__searchbox-mod">
                                        <p>More Sites</p>
                                        <p>$200</p>
                                    </div>
                                    <div class="hotelbcard__searchbox-price hotelbcard__searchbox-mod">
                                        <p>View Deal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="hotelb__right">
                <!-- <div class="hotelb__right-notifications">notifications</div>
                <div class="hotelb__right-compare">compare</div> -->
            </div>
        </div>
    </div>

</template>

<script>
import Search from '@/components/Search.vue';

export default {
    name: "HotelBooking",
    props: [''],
    components: {
        Search
    },
    data: function () {
        return {
            info: []
        }
    },
    mounted() {
        // const URL = "https://api.pexels.com/v1/search?query=hotel&per_page=8"
        // const AuthStr = 'Bearer ' + "563492ad6f91700001000001475af9cf9f8342748b8ed088c1b32b43";
        // this.axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
        // .then((result) => {
        //     this.info = result.data.photos
        // })

        const URL = "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=8"
        this.axios.get(URL)
        .then((result) => {
            this.info = result.data
        })
    },
    computed: {},
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hbbody {
        background-color: #fafbfc;
    }

    .hbtop {
        background-color: #fafafa;
        padding: 20px 0 30px 0;
        border-bottom: 1px solid #e5ebf0;
        margin: 0 0 20px 0;


        &__hbsearch {
            margin: auto;
            @media (min-width: 570px) {
               width: 95%;
            }
        }
    }
    .hotelb {
        display: flex;
        width: 95%;
        margin: auto;
        flex-direction: column;
        
        @media (min-width: 1024px) {
            flex-direction: row;
            width: 90%;
            margin: 0 auto 50px auto;
        }

        &__left {
            display: none;
            width: 20%;
            margin: 0 12px 0 0;

            @media (min-width: 1024px) {
               display: unset;
            }
        }
        &__middle {
            width: 100%;
            margin: 0 12px 0 0;
            @media (min-width: 1024px) {
                width: 65%;
            }
        }
        &__right {
            width: 25%;
        }

        /**
        * LEFT
        */
        &__left-map {
            height: 100px;
            margin: 0 0 20px 0;
            background-color: #d4d4d4;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__left-price-alert {
            margin: 0 0 10px 0;
            padding: 0 0 10px 0;
            // display: flex;
            // flex-direction: column;
        }
        &__left-rating {
            margin: 0 0 10px 0;
        }
        &__left-review {
            margin: 0 0 10px 0;
        }
        &__left-price {
            height: 100px;
            margin: 0 0 10px 0;
        }
        &__left-freebies {
            margin: 0 0 10px 0;
        }
        &__left-search-name {
            margin: 0 0 10px 0;
        }
        &__left-search-chain {
            margin: 0 0 10px 0;
        }
        &__left-search-location {
            margin: 0 0 10px 0;
        }
        &__left-search-neighborhoods {
            margin: 0 0 10px 0;
        }
        /*
        * PRICE ALERT
        */
        &__left-alert-top {
            display: flex;
            h4 {
                font-weight: 400;
            }
        }
        &__left-alert-btm {
            display: flex;
            justify-content: space-between;
        }
        &__left-aler-bell {
            margin: 0 10px 20px 0;
        }
        /*************************************/
        
        &__left-freebies-checkbtn {
            display: flex;
            flex-direction: column;
        }

        /**
        * MIDDLE
        */
        &__middle-announcement {
            height: 70px;
            background-color: #d4d4d4;
            margin: 0 0 10px 0;
            display: flex;
            justify-content: space-between;
            border-radius: 8px;
            padding: 0 10px;
            align-items: center;
            // box-shadow: 0 0 0 0.5pt #ccc;
        }
        &__middle-signin {
            height: 40px;
            background-color: #d4d4d4;
            margin: 0 0 10px 0;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            align-items: center;
            // box-shadow: 0 0 0 0.5pt #ccc;
        }
        /*************************************/

        /*
        * CARD
        */
        .hotelbcard {
            &__searchbox {
                box-shadow: 1px 3px 5px rgba(32, 33, 30, 0.28);
                border-radius: 8px;
                display: flex;
                width: 100%;
                height: 200px;
                margin: 0 0 10px 0;
                background-color: #fafafa;
                // border: 1px solid #000;
            }
            &__searchbox:hover {
                box-shadow: 0 0 0 0.3pt #ccc;
                transition: all 0.2s ease;
            }
            &__searchbox-left {
                width: 30%;
            }
            &__searchbox-image {
                height: 200px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
            }
            &__searchbox-middle {
                width: 70%;
                display: flex;
                align-items: center;
                margin: 0 0px 0 0;
                cursor: pointer;
                

                &--pd {
                    padding: 0 10px 0 15px;
                    width: 100%;
                }

            }
            &__searchbox-title {
                font-size: 20px;
                display: flex;
                justify-content: space-between;
            }
            &__searchbox-rating {
                display: flex;
                align-items: center;
                margin: 20px 0 0 0;
            }
            &__searchbox-reviews {
                margin: 0 0 0 10px;
                font-size: 14px;
                font-weight: 300;
            }
            &__searchbox-options {
                    display: flex;
                    justify-content: space-between;
                    margin: 10px 0 0 0;
                }
                &__searchbox-type {
                display: flex;

                p {
                    margin: 0 10px 0 0;
                    font-weight: 300;
                    font-size: 14px;
                }
                p:hover {
                    color: #339DBE;
                    text-decoration: underline;
                }
                &__searchbox-distance {
                    p {
                        font-weight: 300;
                        font-size: 14px;
                    }
                }

            }
            &__searchbox-place {
                margin: 10px 0 0 0;

                p {
                    font-weight: 300;;
                    font-size: 14px;
                }
            }
            &__searchbox-times {
                margin: 20px 0 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            &__searchbox-mod {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: max-content;
                height: 40px;
            }
            &__searchbox-deal    {
                p {
                    font-size: 14px;
                    font-weight: 300;
                }
                p:first-child {
                    color: #339DBE;
                    margin: 0 0 5px 0;
                }
            }
            &__searchbox-signin {
                display: none;
                border-radius: 8px;
                border: 1px solid #ccc;
                padding: 5px 25px;
                p {
                    font-size: 10px;
                    font-weight: 300;
                    text-transform: uppercase;
                    text-align: center;
                }
                p:first-child {
                    margin: 0 0 5px 0;
                }

                @media (min-width: 1024px) {
                   display: unset;
                }
            }
            &__searchbox-more {
                display: none;
                p {
                    font-size: 14px;
                    font-weight: 300;
                }
                p:first-child {
                    margin: 0 0 5px 0;
                }
                p:nth-child(2) {
                    color: green;
                }
                @media (min-width: 570px) {
                   display: unset;
                }
            }
            &__searchbox-price {
                background-color: orange;
                width: max-content;
                padding: 10px 10px;
                border-radius: 8px;
                color: #fff;
                font-size: 14px;
                font-weight: 300;
                @media (min-width: 570px) {
                   padding: 10px 25px;
                }
            }
        }
        /*************************************/

         /**
        * RIGHT
        */
        &__right-notifications {
            height: 250px;
            background-color: #d4d4d4;
            margin: 0 0 10px 0;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            padding: 0 10px;
            align-items: center;
            // box-shadow: 0 0 0 0.5pt #ccc;
        }
        &__right-compare {
            height: 150px;
            background-color: #d4d4d4;
            margin: 0 0 10px 0;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            padding: 0 10px;
            align-items: center;
            // box-shadow: 0 0 0 0.5pt #ccc;
        }
        /*************************************/

        /*
        * MODIFIERS
        */
        .left-mod-one {
            align-items: center;
            color: #000;
            font-weight: 300;
        }
        /*************************************/
    }

/*
* SLIDER ON/OFF
*/
.switch {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 18px;
}

.switch input { 
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: #2196F3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
/*****************************************/

/*
* TOGGLE 
*/
.accordion {
    @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
    }
}

.accordian-toggle {
  display: none;
}

.accordian-option {
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    width: 100%;
  }
}

.accordian-title,
.accordian-content {
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.2s;
}

.accordian-title {
//   background: #fff;
  padding: 1em 0em 0em 0em;
  display: block;
  color: #000;
}
.accordian-title:after, .accordian-title:before {
  content: '';
  position: absolute;
  right: 1.25em;
  top: 1.25em;
  width: 1px;
  height: 0.75em;
  background-color: #000;
  transition: all 0.2s;
}
.accordian-title:after {
  transform: rotate(90deg);
}

.accordian-content {
  max-height: 0;
  overflow: hidden;
  background-color: #fff;
  ul {
    li {
        a {
            text-decoration: none;
            font-size: 12px;
            font-weight: 300;
            color: #212a30;
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

.accordian-toggle:checked {
    & + .accordian-title + .accordian-content {
        max-height: 500px;
    }
    & + .accordian-title:before {
        transform: rotate(90deg) !important;
    }
}
/*****************************************/


/*
* BIG RATING
*/
.big-rating-box {
    display: inline-block;
    .big-rating-container {
        direction: rtl !important;
        label {
        display: inline-block;
        margin: 30px 8px 0 0;
        color: #d4d4d4;
        padding: 0 0 10px 0;
        cursor: pointer;
        font-size: 34px;
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
.sqr-rating-box {
    display: inline-block;
    .sqr-rating-container {
        direction: rtl !important;
        label {
            display: inline-block;
            // margin: 30px 8px 0 0;
            color: #d4d4d4;
            // padding: 0 0 10px 0;
            cursor: pointer;
            font-size: 75px;
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
/*****************************************/
/*
* CHECKBOX 
*/
.checkbox-button__input {
    margin: 10px 10px 0 0;
}
/*****************************************/

/*
* INPUT
*/
input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin-top: 5px;
    height: 46px;
    background-color: #EEEEEE;
    border: 0;
    border-radius: 8px;
}
/*****************************************/
</style>