<template>
    <div class="tb">
        <div class="tb__container">
            <div class="tb__left">
                <div class="tbcard" v-for="data in info" :key="data.id">
                    <div class="tbcard__searchbox-up" :style="{ backgroundImage: `url(${data.url})` }"></div>
                    <div class="tbcard__searchbox" >
                        <div class="tbcard__searchbox-start">
                            <div class="tbcard__searchbox-start--pd">
                                <div class="tbcard__searchbox-title">
                                    <h2>Conrad Fort Lauderdale Beach</h2>
                                </div>
                                <div class="tbcard__searchbox-rating">
                                    <div class="rating-box">
                                        <div class="rating-container">
                                            <input type="radio" name="rating" value="5" id="star-5"> <label for="star-5">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="4" id="star-4"> <label for="star-4">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="3" id="star-3"> <label for="star-3">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="2" id="star-2"> <label for="star-2">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="1" id="star-1"> <label for="star-1">&#9733;</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="tbcard__searchbox-options">
                                    <div class="tbcard__searchbox-type">
                                        <p>Option-1</p>
                                        <p>Option-2</p>
                                        <p>Option-3</p>
                                    </div>
                                </div>
                                <div class="tbcard__searchbox-place">
                                    <p>Downtown</p>
                                </div>
                                <div class="tbcard__searchbox-times">
                                    <div class="tbcard__searchbox-deal tbcard__searchbox-mod">
                                        <p>Private Deal</p>
                                        <p>$200</p>
                                    </div>
                                    <div class="tbcard__searchbox-signin tbcard__searchbox-mod">
                                        <p>Sign in to</p>
                                        <p>view more</p>
                                    </div>
                                    <div class="tbcard__searchbox-more tbcard__searchbox-mod">
                                        <p>More Sites</p>
                                        <p>$200</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tbcard__searchbox-end">
                            <!-- <div class="tbcard__searchbox-price tbcard__searchbox-mod">
                                <p>View Deal</p>
                            </div> -->
                        </div>
                        <div class="tbcard__searchbox-middle">
                            <div class="tbcard__searchbox-image" :style="{ backgroundImage: `url(${data.url})` }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tb__right">
                <MapSingle :routeName="this.$route.name"/>
            </div>
        </div>
    </div>
</template>

<script>
import MapSingle from '@/components/MapSingle.vue';

export default {
    name:'TourismBooking',
    props: [''],
    components: {
        MapSingle
    },
    data: function () {
        return {
            info: null
        }
    },
    mounted() {
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
.tb {
    width: 95%;
    margin: auto;
    @media (min-width: 1024px) {
        margin: 0 0 0 2%;
    }

    &__container {
        display: flex;
        flex-direction: column;

        @media (min-width: 1024px) {
            flex-direction: column;
            height: 300vh;
        }
    }

    &__left {
        width: 100%;
        margin-top: 20px;

        @media (min-width: 1024px) {
            width: 50%;
        }
    }
    &__right {
        width: 100%;
        @media (min-width: 1024px) {
            width: 50%;
        }
    }

    /*
    * CARD
    */
    .tbcard {
        margin: 0 0 0 0;
        @media (min-width: 1024px) {
            margin: 0 20px 0 0;
        }

        &__searchbox {
            box-shadow: 1px 3px 5px rgba(32, 33, 30, 0.28);
            border-radius: 8px;
            display: flex;
            width: 100%;
            height: 190px;
            margin: 0 0 50px 0;
            background-color: #fafafa;
            // border: 1px solid #000;
            @media (min-width: 1024px) {
               height: 150px;
            }
        }
        &__searchbox:hover {
            box-shadow: 0 0 0 0.3pt #ccc;
            transition: all 0.2s ease;
        }
        &__searchbox-up {
            height: 10px;
            margin: 0 2px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
        &__searchbox-middle {
            width: 22%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__searchbox-end {
            width: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            // padding: 0 0 30px 0;
            @media (min-width: 1024px) {
               width: 18%;
            }
        }
        &__searchbox-image {
            height: 120px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 8px;
            width: 120px;
        }
        &__searchbox-start {
            width: 60%;
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
            margin: 10px 0 0 0;
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
            margin: 2px 0 0 0;

            p {
                font-weight: 300;;
                font-size: 14px;
            }
        }
        &__searchbox-times {
            margin: 5px 0 0 0;
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

            @media (min-width: 1024px) {
                   display: unset;
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
            display: flex;
            justify-content: center;
        }
    }
    /*************************************/

}
</style>            