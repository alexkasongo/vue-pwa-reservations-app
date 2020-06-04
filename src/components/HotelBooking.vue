<template>
    <div class="hbbody">
        <div class="hbtop">
            <div class="hbtop__hbsearch">
                <Search />
            </div>
        </div>
        <div class="hotelb">
            <div class="hotelb__left">
                <div class="hotelb__left-map left-mod-one">map</div>
                <div class="hotelb__left-price-alert left-mod-one">price alert</div>
                <div class="hotelb__left-rating left-mod-one">rating</div>
                <div class="hotelb__left-review left-mod-one">review score</div>
                <div class="hotelb__left-price left-mod-one">price</div>
                <div class="hotelb__left-freebies left-mod-one">freebies</div>
                <div class="hotelb__left-search-name left-mod-one">search by name</div>
                <div class="hotelb__left-search-chain left-mod-one">search by chain</div>
                <div class="hotelb__left-search-location left-mod-one">search by location</div>
                <div class="hotelb__left-search-neighborhoods left-mod-one">search by neighborhoods</div>
            </div>
            <div class="hotelb__middle">
                <div class="hotelb__middle-announcement">announcement</div>
                <div class="hotelb__middle-signin">signin</div>

                <div class="hotelbcard">
                    <div class="hotelbcard__searchbox" v-for="data in info" :key="data.id">
                        <div class="hotelbcard__searchbox-left">
                            <div class="hotelbcard__searchbox-image" :style="{ backgroundImage: `url(${data.src.large})` }">
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
                <div class="hotelb__right-notifications">notifications</div>
                <div class="hotelb__right-compare">compare</div>
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
        const URL = "https://api.pexels.com/v1/search?query=hotel&per_page=8"
        const AuthStr = 'Bearer ' + "563492ad6f91700001000001475af9cf9f8342748b8ed088c1b32b43";
        this.axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
        .then((result) => {
            this.info = result.data.photos
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
            width: 90%;
            margin: auto;
        }
    }
    .hotelb {
        display: flex;
        width: 90%;
        margin: 0 auto 50px auto;
        // height: 100vh;

        &__left {
            width: 20%;
            margin: 0 12px 0 0;
        }
        &__middle {
            width: 65%;
            margin: 0 12px 0 0;
        }
        &__right {
            width: 25%;
        }

        /**
        * LEFT
        */
        &__left-map {
            height: 100px;
            margin: 0 0 10px 0;
        }
        &__left-price-alert {
            height: 80px;
            margin: 0 0 10px 0;
        }
        &__left-rating {
            height: 100px;
            margin: 0 0 10px 0;
        }
        &__left-review {
            height: 100px;
            margin: 0 0 10px 0;
        }
        &__left-price {
            height: 100px;
            margin: 0 0 10px 0;
        }
        &__left-freebies {
            height: 100px;
            margin: 0 0 10px 0;
        }
        &__left-search-name {
            height: 100px;
            margin: 0 0 10px 0;
        }
        &__left-search-chain {
            height: 100px;
            margin: 0 0 10px 0;
        }
        &__left-search-location {
            height: 100px;
            margin: 0 0 10px 0;
        }
        &__left-search-neighborhoods {
            height: 100px;
            margin: 0 0 10px 0;
        }
        /*************************************/

        /**
        * MIDDLE
        */
        &__middle-announcement {
            height: 70px;
            background-color: #fafafa;
            margin: 0 0 10px 0;
            display: flex;
            justify-content: space-between;
            border-radius: 8px;
            padding: 0 10px;
            align-items: center;
            box-shadow: 0 0 0 0.5pt #ccc;
        }
        &__middle-signin {
            height: 40px;
            background-color: #fafafa;
            margin: 0 0 10px 0;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            align-items: center;
            box-shadow: 0 0 0 0.5pt #ccc;
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
            }
            &__searchbox-more {
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
            }
            &__searchbox-price {
                background-color: orange;
                width: max-content;
                padding: 10px 25px;
                border-radius: 8px;
                color: #fff;
                font-size: 14px;
                font-weight: 300;
            }
        }
        /*************************************/

         /**
        * RIGHT
        */
        &__right-notifications {
            height: 250px;
            background-color: #fafafa;
            margin: 0 0 10px 0;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            padding: 0 10px;
            align-items: center;
            box-shadow: 0 0 0 0.5pt #ccc;
        }
        &__right-compare {
            height: 150px;
            background-color: #fafafa;
            margin: 0 0 10px 0;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            padding: 0 10px;
            align-items: center;
            box-shadow: 0 0 0 0.5pt #ccc;
        }
        /*************************************/

        /*
        * MODIFIERS
        */
        .left-mod-one {
            display: flex;
            justify-content: center;
            border-radius: 8px;
            padding: 0 10px;
            align-items: center;
            box-shadow: 0 0 0 0.5pt #ccc;
            background-color: #339DBE;
            color: #fff;
        }
        /*************************************/
    }

</style>