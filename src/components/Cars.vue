<template>
    <div class="cars">
        <div class="cars__search">
            <div class="cars__title">
                <h2>Transport</h2>
            </div>
            <div class="cars__search-bar">
                <Search :routeName="this.$route.name"/>
            </div>
        </div>
        <div class="cars__container">
            <div class="cars__left">
                <div class="carcard">
                    <div class="carcard__searchbox" v-for="data in info" :key="data.id">
                        <div class="carcard__searchbox-start">
                            <div class="carcard__searchbox-start--pd">
                                <div class="carcard__searchbox-title">
                                    <h2>Conrad Fort Lauderdale Beach</h2>
                                </div>
                                <div class="carcard__searchbox-rating">
                                    <div class="rating-box">
                                        <div class="rating-container">
                                            <input type="radio" name="rating" value="5" id="star-5"> <label for="star-5">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="4" id="star-4"> <label for="star-4">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="3" id="star-3"> <label for="star-3">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="2" id="star-2"> <label for="star-2">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="1" id="star-1"> <label for="star-1">&#9733;</label>
                                        </div>
                                    </div>
                                    <!-- <p class="carcard__searchbox-reviews">65 reviews</p> -->
                                </div>
                                <div class="carcard__searchbox-options">
                                    <div class="carcard__searchbox-type">
                                        <p>Option-1</p>
                                        <p>Option-2</p>
                                        <p>Option-3</p>
                                    </div>
                                </div>
                                <div class="carcard__searchbox-place">
                                    <p>Downtown</p>
                                </div>
                                <div class="carcard__searchbox-times">
                                    <div class="carcard__searchbox-deal carcard__searchbox-mod">
                                        <p>Private Deal</p>
                                        <p>$200</p>
                                    </div>
                                    <div class="carcard__searchbox-signin carcard__searchbox-mod">
                                        <p>Sign in to</p>
                                        <p>unlock</p>
                                    </div>
                                    <div class="carcard__searchbox-more carcard__searchbox-mod">
                                        <p>More Sites</p>
                                        <p>$200</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carcard__searchbox-middle">
                            <div class="carcard__searchbox-image" :style="{ backgroundImage: `url(${data.url})` }">
                            </div>
                        </div>
                        <div class="carcard__searchbox-end">
                            <div class="carcard__searchbox-price carcard__searchbox-mod">
                                <p>View Deal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cars__right">
                <MapSingle :routeName="this.$route.name"/>
            </div>
        </div>
    </div>
</template>

<script>
import Search from '@/components/Search.vue';
import MapSingle from '@/components/MapSingle.vue';

export default {
    name: "Cars",
    props: {},
    components: {
        Search,
        MapSingle
    },
    data: function () {
        return {
            info: null
        }
    },
    mounted() {
        const URL = "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=16"
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
.cars {
    &__title {
        width: 95%;
        margin: 0 auto 10px auto;
        h2 {
            font-size: 20px;
            text-align: center;
        }
        @media (min-width: 1024px) {
            display: none;
        }
    }

    &__search {
        // width: 80%;
        padding: 82px 0 30px 0;
        background: #fff;
        width: 100%;

        @media (min-width: 1024px) {
            position:fixed ;
            z-index: 1;
        }
    }

    &__search-bar {
        width: 100%;
        margin: auto;

        @media (min-width: 570px) {
            width: 95%;
        }
        @media (min-width: 1024px) {
            width: 85%;
            padding: 0 0 0 2%;
            margin: 0;
        }
    }
    
    &__container {
        display: flex;
        height: 100vh;
        flex-direction: column;
        margin: auto;
        flex-direction: column;
        width: 95%;

        @media (min-width: 1024px) {
                flex-direction: row;
                padding: 0 0 0 2%;
                width: 100%;
        }
    }

    &__left {
        width: 100%;

        @media (min-width: 1024px) {
            width: 50%;
            margin-top: 184px;
        }
    }
    &__right {
        width: 100%;
        @media (min-width: 1024px) {
            width: 50%;
            margin-top: 168px;
        }
    }

    /*
    * CARD
    */
    .carcard {

        @media (min-width: 1024px) {
            margin: 0 20px 0 0;
        }

        &__searchbox {
            box-shadow: 1px 3px 5px rgba(32, 33, 30, 0.28);
            border-radius: 8px;
            display: flex;
            width: 100%;
            height: 200px;
            margin: 0 0 10px 0;
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
        &__searchbox-middle {
            display: flex;
            justify-content: center;
            align-items: center;
            @media (min-width: 1024px) {
                width: 22%;
            }
        }
        &__searchbox-end {
            display: none;
            width: 18%;
            
            justify-content: center;
            align-items: center;

            @media (min-width: 570px) {
               display: flex;
            }
        }
        &__searchbox-image {
            height: 120px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 50%;
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
            @media (min-width: 570px) {
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
            cursor: pointer;
        }
    }
    /*************************************/
}
</style>