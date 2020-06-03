<template>
    <div class="rest">

        <div class="rest__container">
            <!-- search results -->
            <div class="rest__left" id="hidingScrollBar">
                <div class="rest__left-content hideScrollBar">
                    <div class="rest__searchbox" v-for="data in info.slice(0, 1)" :key="data.id">
                        <div class="rest__searchbox-right">
                            <div class="rest__searchbox-right--pd">
                                <div class="rest__searchbox-title">
                                    <h2>Vic & Anthony's Steakhouse - Las Vegas</h2>
                                    <i class="far fa-heart"></i>
                                </div>
                                <div class="rest__searchbox-rating">
                                    <div class="rating-box">
                                        <div class="rating-container">
                                            <input type="radio" name="rating" value="5" id="star-5"> <label for="star-5">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="4" id="star-4"> <label for="star-4">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="3" id="star-3"> <label for="star-3">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="2" id="star-2"> <label for="star-2">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="1" id="star-1"> <label for="star-1">&#9733;</label>
                                        </div>
                                    </div>
                                    <p class="rest__searchbox-reviews">65 reviews</p>
                                </div>
                                <div class="rest__searchbox-options">
                                    <div class="rest__searchbox-type">
                                        <p>Option-1</p>
                                        <p>Option-2</p>
                                        <p>Option-3</p>
                                    </div>
                                    <div class="rest__searchbox-distance">
                                        <p>20km</p>
                                    </div>
                                </div>
                                <div class="rest__searchbox-place">
                                    <p>Downtown</p>
                                </div>
                            </div>
                        </div>
                        <div class="rest__searchbox-left">
                            <div class="rest__searchbox-image" :style="{ backgroundImage: `url(${data.src.large})` }">
                            </div>
                        </div>

                        <div class="rest__title">
                            <h2>About</h2>
                        </div>

                        <div class="rest__about">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Qui, sint. Facere, saepe eius perspiciatis molestias aliquid 
                            a consectetur eaque illum velit quisquam ab, quae quam dolorem 
                            corporis ipsam commodi quis?</p>
                        </div>

                        <div class="rest__title">
                            <h2>Reviews and Ratings</h2>
                        </div>

                        <!-- above recommended -->
                        <div class="rest__ratings">
                            <div class="rest__ratings-pd">
                                <div class="rest__ratings-left">
                                    <div class="rest__ratings-top">
                                        <div class="rest__ratings-points">
                                            <p>4.6</p>
                                        </div>
                                        <div class="rest__ratings-points-text">
                                            <h4>Excellent</h4>
                                            <p>Based on 200 reviews</p>
                                        </div>
                                    </div>
                                    <div class="rest__ratings-bottom">
                                        <div class="rest__ratings-graph">
                                            <i class="far fa-chart-bar"></i>
                                        </div>
                                        <div class="rest__ratings-points-text">
                                            <h4>Noise Level</h4>
                                            <p>Moderate</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="rest__ratings-right">
                                    <div class="rest__ratings-circle">
                                        <h4>4.6</h4>
                                        <p>Food</p>
                                    </div>
                                    <div class="rest__ratings-circle">
                                        <h4>4.6</h4>
                                        <p>Vibe</p>
                                    </div>
                                    <div class="rest__ratings-circle">
                                        <h4>4.6</h4>
                                        <p>Service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="rest__title">
                            <h2>Similar Restaurants in Kigali</h2>
                        </div>

                        <!-- recommended -->
                        <div class="rest__search">
                            <div class="rest__search-left">
                                <div class="rest__search-image" :style="{ backgroundImage: `url(https://images.unsplash.com/photo-1526069631228-723c945bea6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)` }">
                                </div>
                            </div>
                            <div class="rest__search-right">
                                <div class="rest__search-right--pd">
                                    <div class="rest__searchbox-title">
                                        <h2>Vic & Anthony's Steakhouse - Las Vegas</h2>
                                        <i class="far fa-heart"></i>
                                    </div>
                                    <div class="rest__searchbox-rating">
                                        <div class="rating-box">
                                            <div class="rating-container">
                                                <input type="radio" name="rating" value="5" id="star-5"> <label for="star-5">&#9733;</label>
                                                
                                                <input type="radio" name="rating" value="4" id="star-4"> <label for="star-4">&#9733;</label>
                                                
                                                <input type="radio" name="rating" value="3" id="star-3"> <label for="star-3">&#9733;</label>
                                                
                                                <input type="radio" name="rating" value="2" id="star-2"> <label for="star-2">&#9733;</label>
                                                
                                                <input type="radio" name="rating" value="1" id="star-1"> <label for="star-1">&#9733;</label>
                                            </div>
                                        </div>
                                        <p class="rest__searchbox-reviews">65 reviews</p>
                                    </div>
                                    <div class="rest__searchbox-options">
                                        <div class="rest__searchbox-type">
                                            <p>Option-1</p>
                                            <p>Option-2</p>
                                            <p>Option-3</p>
                                        </div>
                                        <div class="rest__searchbox-distance">
                                            <p>20km</p>
                                        </div>
                                    </div>
                                    <div class="rest__searchbox-place">
                                        <p>Downtown</p>
                                    </div>
                                    <div class="rest__searchbox-times">
                                        <p>2pm</p>
                                        <p>2pm</p>
                                        <p>2pm</p>
                                        <p>2pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- actual rest -->
            <div class="rest__right">
                <SearchRest class="rest__searchrest"/>

                <div class="rest__map">
                    <l-map
                    v-if="showMap"
                    :zoom="zoom"
                    :center="center"
                    :options="mapOptions"
                    style="height: 100%"
                    @update:center="centerUpdate"
                    @update:zoom="zoomUpdate"
                    >
                    <l-tile-layer
                        :url="url"
                        :attribution="attribution"
                    />
                    <!-- <l-marker :lat-lng="withPopup">
                        <l-popup>
                        <div @click="innerClick">
                            I am a popup
                            <p v-show="showParagraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                            Donec finibus semper metus id malesuada.
                            </p>
                        </div>
                        </l-popup>
                    </l-marker>
                    <l-marker :lat-lng="withTooltip">
                        <l-tooltip :options="{ permanent: true, interactive: true }">
                            <div @click="innerClick">
                                I am a tooltip
                                <p v-show="showParagraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                                Donec finibus semper metus id malesuada.
                                </p>
                            </div>
                        </l-tooltip>
                    </l-marker> -->
                    </l-map>
                </div>

                <div class="rest__locations">
                    <div class="rest__locations-default">
                        <h4>Location</h4>
                        <p><a href="#">201 N 3rd St, Las Vegas, NV 89101</a></p>
                    </div>
                    <div class="rest__locations-default">
                        <h4>Dress Code</h4>
                        <p>Casual Dress</p>
                    </div>
                    <div class="rest__locations-default">
                        <h4>Phone Number</h4>
                        <p><a href="#">+1 702 384 2761</a></p>
                    </div>
                    <div class="rest__locations-default">
                        <h4>Website</h4>
                        <p><a href="#">www.butamu.com</a></p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import { Icon } from 'leaflet';
import Footer from '@/components/Footer.vue';
import SearchRest from '@/components/SearchRest.vue';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
    name: "Restaurant",
    props: [''],
    components: {
        Footer,
        SearchRest
    },
    data: function () {
        return {
            zoom: 13,
            center: latLng(47.41322, -1.219482),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            withPopup: latLng(47.41322, -1.219482),
            withTooltip: latLng(47.41422, -1.250482),
            currentZoom: 11.5,
            currentCenter: latLng(47.41322, -1.219482),
            showParagraph: false,
            mapOptions: {
                zoomSnap: 0.5
            },
            showMap: true,
            info: []
        }
    },
    mounted() {
    const URL = "https://api.pexels.com/v1/search?query=food&per_page=8"
    const AuthStr = 'Bearer ' + "563492ad6f91700001000001475af9cf9f8342748b8ed088c1b32b43";
        this.axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
        .then((result) => {
            this.info = result.data.photos
        })
    },
    computed: {},
    methods: {
        zoomUpdate(zoom) {
        this.currentZoom = zoom;
        },
        centerUpdate(center) {
        this.currentCenter = center;
        },
        showLongText() {
        this.showParagraph = !this.showParagraph;
        },
        innerClick() {
        alert("Click!");
        }
    },
    watch: {
        '$route' (to, from) {
            alert(to.params.restId)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
     .rest {
         margin: 124px auto 0 auto;

        &__container {
            display: flex;
            // height: 100vh;
            width: 80%;
            margin: auto;
        }

        &__left {
            width: 55%;
            // margin-left: 10%;
            // overflow-y: scroll; 
        }

        &__right {
            width: 45%;
        }

        &__map {
            height: 300px; 
            width: 100%;
            margin: 0 0 50px 0;
        }

        &__locations-default {
            margin: 0 0 50px 0;
            
            h4 {
                font-size: 20px;
                font-weight: 300;
                margin: 0 0 5px 0;
            }

            a {
                text-decoration: none;
                font-weight: 300;
                color: #339DBE;
            }

            p {
                margin: 0 0 10px 0;
                font-weight: 300;
            }
        }

        &__searchbox {
            display: flex;
            flex-direction: column;
            width: 100%;
            // height: 200px;
            margin: 0 0 10px 0;
        }

        &__searchbox-left {
            width: 100%;
            margin-bottom: 50px;
        }

        &__searchbox-right {
            width: 100%;
            display: flex;
            align-items: center;
            margin: 5px 0 85px 0;
            cursor: pointer;
            

            &--pd {
                // padding: 0 10px 0 15px;
                width: 100%;
            }

        }

        &__searchbox-image {
            height: 360px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 8px;
        }


        &__searchbox-title {
            // margin: 15px 0 0 0;
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

        }

        &__searchbox-distance {
            p {
                font-weight: 300;
                font-size: 14px;
            }
        }
        
        &__searchbox-place {
            margin: 10px 0 0 0;

            p {
                font-weight: 300;;
                font-size: 14px;
            }
        }

        &__about {
            border-bottom: 1px solid #ccc;
            margin-bottom: 50px;
            
            h2 {
                font-size: 28px;
                margin-bottom: 10px;
            }

            p {
                font-weight: 300;    
                margin-bottom: 50px;
            }
        } 

        // ratings

        &__ratings {
            
            border-bottom: 1px solid #ccc;
            margin: 0 0 50px 0;
        }  

        &__title {
            h2 {
                font-size: 20px;
                margin: 0 0 20px 0;
            }
        }

        &__ratings-pd {
            display: flex;
            margin: 0 0 50px 0;
        }

        &__ratings-left {
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }  

        &__ratings-right {
            width: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
        }  

        &__ratings-top {
            height: 70px;
            width: 100%;
            display: flex;
            align-items: center;
        }  
        &__ratings-bottom {
            height: 70px;
            width: 100%;
            display: flex;
            align-items: center;
        }  

        &__ratings-points {
            width: 60px;
            display: flex;
            justify-content: center;
            margin: 0 10px 0 0;
            background-color: #212a30;

            p {
                // width: 50px;
                padding: 15px;
                color: #fff;
                font-size: 18px;
                // margin: 0 10px 0 0;
            }
        }

        &__ratings-points-text {
            h4 {
                font-size: 20px;
                margin: 0 0 5px 0;
                font-weight: 300;
            }
            p {
                font-weight: 300;
            }
        }

        &__ratings-circle {
            background-color: orange;
            width: 80px;
            padding: 15px;
            border-radius: 50%;
            text-align: center;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 10px 0 0;
            color: #fff;

            h4 {
                font-size: 20px;
                margin: 0 0 5px 0;
                font-weight: 300;
            }
            p {
                font-weight: 300;
            }
        }

        &__ratings-graph {

            padding: 15px;
            font-size: 30px;
            color: orange;
            width: 60px;
            display: flex;
            justify-content: center;
            margin: 0 10px 0 0;
        }

        // recommendations

        &__search {
            display: flex;
            margin-bottom: 100px;
        }

        &__search-left {
            width: 30%;
        }

        &__search-right {
            display: flex;
            align-items: center;
        }

        &__search-right:hover {
            box-shadow: 1px 3px 5px rgba(32, 33, 30, 0.28);
            border-radius: 8px;
            transition: all 0.5s ease;
        }

        &__search-right--pd {
            padding: 0 10px 0 15px;
            width: 100%;
        }

        &__search-image {
            height: 200px;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 8px;
        }

        &__searchbox-times {
                margin: 10px 0 0 0;
                display: flex;

            p {
                margin: 0 10px 0 0;
                background-color: orange;
                padding: 8px;
                width: 90px;
                text-align: center;
                border-radius: 8px;
                font-weight: 500;
                font-size: 14px;
                color: #fff;
            }

        }

        .searchrest {
            margin: 0 0 60px 0;
        }

        /*------THE TRICK------*/
        #hidingScrollBar{
        overflow: hidden;
        }
        .hideScrollBar{
        width: 100%;
        height: 100%;
        overflow: auto;
        margin-right: 14px;
        padding-right: 28px; 
        padding-bottom: 15px;
        }
        /*---------------------*/

    }
</style>