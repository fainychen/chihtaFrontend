<template>
  <div>
    <div id="router" :style="viewStyle">
      <v-carousel show-arrows-on-hover cycle interval="3000" height="auto">
        <v-carousel-item v-for="(item,i) in ((innerWidth > 959) ? items : itemsA) " :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>

      <v-row class="ma-8">
        <v-col class="col-12 col-md-6" style="padding: 20px 30px 0px 30px">
          <!-- https://chloelin.coderbridge.io/2021/12/25/vue-google-map-api-1/ -->
          <GmapMap :center="center" :zoom="15" :options="options" style="width: 100%; height: 400px">
            <GmapMarker :position="marker.position" :clickable="false" :draggable="false" />
          </GmapMap>
          <!-- <div align="center">
            <v-img :src="images.location" max-width="600" alt="國立中央大學地圖"></v-img>
          </div> -->
        </v-col>
        <v-col class="col-12 col-md-6" style="padding: 20px 30px 0px 30px">
          <h4 class="content">The conference will be held at&nbsp;the School of Management, National Central University, in Taoyuan, Taiwan.</h4>
          <h1 class="mt-2 contentTitle" style="font-weight: 800">Address</h1>
          <h4 class="content">Management Building #2 NO.300 Jung-da Rd., Jung-li City, Taoyuan, Taiwan 320, R.O.C</h4>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationPage',
  props: {},
  data:() => ({
    viewStyle:{},
    innerWidth: 0,
    items: [
      {src: require('@/assets/image/banner-2000_1.jpg'),},
      {src: require('@/assets/image/banner-2000_2.jpg'),},
    ],
    itemsA: [
      {src: require('@/assets/image/banner-1068_1.jpg'),},
      {src: require('@/assets/image/banner-1068_2.jpg'),},
    ],
    images:{
      location: require('@/assets/image/location.jpg'),
    },
    marker: { position: { lat: 24.971057, lng: 121.193829 } },  //要放marker的座標地點。
    center: { lat: 24.971057, lng: 121.193829 },  //設定地圖中心的經緯度。
    options: {
      mapTypeControl: false,      //是否能切換地圖樣式，EX：地圖、地形圖、衛星檢視。
      scaleControl: false,        //是否顯示地圖比例尺。
      streetViewControl: false,   //是否讓使用者使用街景功能。
      fullscreenControl: true,   //是否開啟全螢幕地圖功能。
      disableDefaultUI: true,
      scrollwheel: true,          //是否支援滑鼠滾輪，預設為false。
      clickableIcons: false,      //地圖標記是否能點擊，預設點擊會彈出視窗。
    },
  }),
  created(){
    this.calculateWindows()
  },
  methods:{
    calculateWindows(){
      this.innerWidth = window.innerWidth
      this.viewStyle = {height: (window.innerHeight-((window.innerWidth > 959) ? 205 : 140)) + 'px'}
    },
  }
}
</script>

