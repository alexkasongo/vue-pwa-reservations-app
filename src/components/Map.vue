<template>
    <div class="map">
        <div class="map__container">
            <!-- search results -->
            <div class="map__left" id="hidingScrollBar">
                <div class="map__left-content hideScrollBar">
                    <div class="map__searchbox" v-for="data in info" :key="data.id">
                        <div class="map__searchbox-left">
                            <div class="map__searchbox-image" :style="{ backgroundImage: `url(${data.src.large})` }">
                            </div>
                        </div>
                        <div class="map__searchbox-right">
                            <div class="map__searchbox-right--pd">
                                <div class="map__searchbox-title">
                                    <h2>Vic & Anthony's Steakhouse - Las Vegas</h2>
                                    <i class="far fa-heart"></i>
                                </div>
                                <div class="map__searchbox-rating">
                                    <div class="rating-box">
                                        <div class="rating-container">
                                            <input type="radio" name="rating" value="5" id="star-5"> <label for="star-5">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="4" id="star-4"> <label for="star-4">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="3" id="star-3"> <label for="star-3">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="2" id="star-2"> <label for="star-2">&#9733;</label>
                                            
                                            <input type="radio" name="rating" value="1" id="star-1"> <label for="star-1">&#9733;</label>
                                        </div>
                                    </div>
                                    <p class="map__searchbox-reviews">65 reviews</p>
                                </div>
                                <div class="map__searchbox-options">
                                    <div class="map__searchbox-type">
                                        <p>Option-1</p>
                                        <p>Option-2</p>
                                        <p>Option-3</p>
                                    </div>
                                    <div class="map__searchbox-distance">
                                        <p>20km</p>
                                    </div>
                                </div>
                                <div class="map__searchbox-place">
                                    <p>Downtown</p>
                                </div>
                                <div class="map__searchbox-times">
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
            <!-- actual map -->
            <div class="map__right">
                <div style="height: 100%; width: 100%">
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
                    <l-marker :lat-lng="withPopup">
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
                    </l-marker>
                    </l-map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data() {
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
    };
  },
  mounted() {
    const URL = "https://api.pexels.com/v1/search?query=food&per_page=8"
    const AuthStr = 'Bearer ' + "563492ad6f91700001000001475af9cf9f8342748b8ed088c1b32b43";
    this.axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
      .then((result) => {
        this.info = result.data.photos
    })
  },
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .map {
        &__container {
            display: flex;
            height: 100vh;
        }

        &__left {
            width: 55%;
            margin-left: 10%;
            // overflow-y: scroll; 
        }

        &__right {
            width: 45%;
        }

        &__searchbox {
            display: flex;
            width: 100%;
            height: 200px;
            margin: 0 0 10px 0;
        }

        &__searchbox-left {
            width: 30%;
        }

        &__searchbox-right {
            width: 70%;
            display: flex;
            align-items: center;
            margin: 0 20px 0 0;
            cursor: pointer;
            

            &--pd {
                padding: 0 10px 0 15px;
                width: 100%;
            }

        }
        &__searchbox-right:hover {
            box-shadow: 1px 3px 5px rgba(32, 33, 30, 0.28);
            border-radius: 8px;
            transition: all 0.5s ease;
        }

        &__searchbox-image {
            height: 200px;
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