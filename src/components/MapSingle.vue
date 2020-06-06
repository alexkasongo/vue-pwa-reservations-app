<template>
    <div class="mapsingle" 
      :style= "[
          routeName === 'Tourism' ? sticky : styleD
      ]"
    >
      <!-- <div class="test"><p style="color:black; font-size:18px;">{{routeName}}</p></div> -->
        <div class="mapsingle__container"
          :style= "[
              routeName === 'RestaurantsAll' ? styleA : 
              routeName === 'Transportation' ? styleB : 
              routeName === 'Tourism' ? styleC : styleD
          ]"
        >
            <!-- actual mapsingle -->
            <div class="mapsingle__right">
                <div class="mapsingle__width">
                    <l-map
                    v-if="showMap"
                    :zoom="zoom"
                    :center="center"
                    :options="mapOptions"
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
  name: "MapSingle",
  props: {
    routeName: String
  },
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
        zoomSnap: 0.5,
        scrollWheelZoom: false
      },
      showMap: true,
      info: [],
      styleA: {
        height: '490px',
      },
      styleB: {
        height: 'calc(100vh - 172px)',
      },
      styleC: {
        height: 'calc(100vh - 62px)',
        // position: "fixed",
        // width: '49%',
      },
      styleD: {
        height: '400px',
      },
      sticky: {
        position: "-webkit-sticky",
        position: "sticky",
        top: "62px"
      }
    };
  },
  mounted() {
    // const URL = "https://api.pexels.com/v1/search?query=food&per_page=8"
    // const AuthStr = 'Bearer ' + "563492ad6f91700001000001475af9cf9f8342748b8ed088c1b32b43";
    // this.axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
    //   .then((result) => {
    //     this.info = result.data.photos
    // })
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
    .mapsingle {
        &__container {
            display: flex;
            // height: 490px;
            // height: calc(100vh - 172px);
        }

        &__right {
            width: 100%;
        }
        &__width {
          height: 100%;
          width: 100%;
        }
    }


</style>