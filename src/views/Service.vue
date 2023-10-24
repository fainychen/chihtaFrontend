<template>
  <div>
    <!-- 回到頂部 -->
    <div class="goTop iconfont ml-gotop" :class="isTop ? 'goTopAfter' : ''"  @click="goTop()">
      <h1 class="my-3 mx-2 contentTitle" style="font-weight: 700; color: #FFF; font-size: 20px">TOP</h1>
    </div>
    
    <div id="router" class="pt-10" :style="viewStyle">

      <v-row class="justifyCenter" style="margin: 1% 8%">
        <v-col class="text-left pr-6 col-11 col-md-5" align-self="center">
          <p class="styleH4">資訊系統的建置/優化</p>
          <p class="styleH2">提供專業系統引導與規劃</p>
          <p class="styleT2" style="color:#737373">每個專案皆配有專案經理，明確訂定需求與權責範圍，統一窗口討論系統形象設計、程式建置與上線前測試。</p>
          <v-row class="ma-0 pt-4">
            <v-btn class="pa-4 styleBtn" outlined style="color:#4880C8" @click="redirectPath('/contactUs')">
              <h4 class="center">立即詢問</h4>
              <v-icon class="pa-2">mdi-email-outline</v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col class="px-6 col-11 col-md-4" align="center">
          <v-img :src="images.action_03" width=400 alt="action_03"></v-img>
        </v-col>
      </v-row>

      <div style="margin:0% 10%; padding:0% 5%">
        <p class="styleH4">軟體開發、介面設計及推廣周邊</p>
        <p class="styleH2">服務項目多元・一條龍服務</p>
      </div>

      <v-row style="justify-content:space-around; margin: 0% 12% 6% 12%">
        <v-col class="mx-0 pa-0 col-11 col-sm-6 col-md-3" style="margin-top:80px">
          <div style="margin:12px; background:#FFF; box-shadow: 3px 5px 9px -1px #00000014">
            <div class="pa-0 ma-2 justifyCenter" style="height:60px">
              <v-img class="mx-auto" :src="images.serve_01" width=120 alt="serve_01" style="top:-60px"></v-img>
            </div>
            <div class="pa-6 text-left">
              <p class="styleT2 text-center">行動裝置/APP</p>
              <p class="styleT4 py-2">同步進行 iOS 與 Android雙平台開發，資訊架構明確造就良好操作流程，亦可整合 Firebase 行動推播及各項原生功能</p>
            </div>
          </div>
        </v-col>
        <v-col class="mx-0 pa-0 col-11 col-sm-6 col-md-3" style="margin-top:80px">
          <div style="margin:12px; background:#FFF; box-shadow: 3px 5px 9px -1px #00000014">
            <div class="pa-0 ma-2 justifyCenter" style="height:60px">
              <v-img class="mx-auto" :src="images.serve_01" width=120 alt="serve_01" style="top:-60px"></v-img>
            </div>
            <div class="pa-6 text-left">
              <p class="styleT2 text-center">資訊管理系統</p>
              <p class="styleT4 py-2">依照需求建置/優化翻新資訊系統，期間提供專業系統引導與規劃，將複雜的運作流程優化建置，以符合不同性質的使用者操作</p>
            </div>
          </div>
        </v-col>
        <v-col class="mx-0 pa-0 col-11 col-sm-6 col-md-3" style="margin-top:80px">
          <div style="margin:12px; background:#FFF; box-shadow: 3px 5px 9px -1px #00000014">
            <div class="pa-0 ma-2 justifyCenter" style="height:60px">
              <v-img class="mx-auto" :src="images.serve_01" width=120 alt="serve_01" style="top:-60px"></v-img>
            </div>
            <div class="pa-6 text-left">
              <p class="styleT2 text-center">客製化網站</p>
              <p class="styleT4 py-2">網站開發包含企業/單位官方網站、內容管理後台、一站式網站等，同步建立響應式網頁RWD、語系轉化等，以符合推廣需求</p>
            </div>
          </div>
        </v-col>
        <v-col class="mx-0 pa-0 col-11 col-sm-6 col-md-3" style="margin-top:80px">
          <div style="margin:12px; background:#FFF; box-shadow: 3px 5px 9px -1px #00000014">
            <div class="pa-0 ma-2 justifyCenter" style="height:60px">
              <v-img class="mx-auto" :src="images.serve_01" width=120 alt="serve_01" style="top:-60px"></v-img>
            </div>
            <div class="pa-6 text-left">
              <p class="styleT2 text-center">設計專項團隊</p>
              <p class="styleT4 py-2">系統開發以 Wireframe 進行初期討論，最終提供完整 UI介面設計，視需求製作上架圖文、系統推廣短片、海報、周邊商品等</p>
            </div>
          </div>
        </v-col>
      </v-row>

      <div v-if="innerWidth >= 960" style="margin:0% 12.5% 5% 12.5%; padding:0% 5%; border-radius: 20px; background:#FFF">
        <v-row class="ma-0 justifyCenter">
          <div style="width:25%">
            <v-img :src="images.process_header" alt="process_header"></v-img>
          </div>
        </v-row>
        <v-row class="ma-0 pa-10">
          <v-img :src="images.process_all" width=300 alt="process_all"></v-img>
        </v-row>
      </div>

      <div v-if="innerWidth < 960 && innerWidth >= 450" style="margin:0% 12.5% 5% 12.5%; padding:0% 5%; border-radius: 20px; background:#FFF">
        <v-row class="ma-0 justifyCenter">
          <div style="width:60%">
            <v-img :src="images.process_header" alt="process_header"></v-img>
          </div>
        </v-row>
        <v-row>
          <v-img class="ma-2" :src="images.process_1" width=120 alt="process_1"></v-img>
        </v-row>
        <v-row>
          <v-img class="ma-2" :src="images.process_2" width=120 alt="process_2"></v-img>
        </v-row>
      </div>

      <div v-if="innerWidth < 450" style="margin:0% 12.5% 5% 12.5%; padding:0% 5%; border-radius: 20px; background:#FFF">
        <v-row class="ma-0 justifyCenter">
          <div style="width:75%">
            <v-img :src="images.process_header" alt="process_header"></v-img>
          </div>
        </v-row>
        <v-row>
          <v-img class="ma-2" :src="images.process_3" width=120 alt="process_3"></v-img>
        </v-row>
        <v-row>
          <v-img class="ma-2" :src="images.process_4" width=120 alt="process_4"></v-img>
        </v-row>
        <v-row>
          <v-img class="ma-2" :src="images.process_5" width=120 alt="process_5"></v-img>
        </v-row>
      </div>

      <v-row class="ma-1 my-8 flexNone justifyCenter">
        <v-row class="ma-0 mx-3 pa-1 col-10 col-md-auto justifyLeft">
          <v-icon class="mr-2" color="#4880C8">mdi-email</v-icon>
          <p>chihta.software@gmail.com</p>
        </v-row>
        <v-row class="ma-0 mx-3 pa-1 col-10 col-md-auto justifyLeft">
          <v-icon class="mr-2" color="#4880C8">mdi-briefcase-search</v-icon>
          <p>統一編號 83210973</p>
        </v-row>
        <v-row class="ma-0 mx-3 pa-1 col-10 col-md-auto justifyLeft">
          <v-icon class="mr-2" color="#4880C8">mdi-map-marker-radius</v-icon>
          <p>新北市鶯歌區尖山路101巷4弄2號</p>
        </v-row>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicePage',
  props: {},
  data:() => ({
    scrollNum: 0, //滾動距離
    isTop: false, //是否顯示回到頂部按鈕
    viewStyle:{},
    innerWidth: 0,
    images:{
      logo_chihta: require('@/assets/image/logo_chihta.png'),
      action_03: require('@/assets/image/action_03.png'),
      process_header: require('@/assets/image/process_header.png'),
      process_all: require('@/assets/image/process_all.png'),
      process_1: require('@/assets/image/process_1.png'),
      process_2: require('@/assets/image/process_2.png'),
      process_3: require('@/assets/image/process_3.png'),
      process_4: require('@/assets/image/process_4.png'),
      process_5: require('@/assets/image/process_5.png'),
      serve_01: require('@/assets/image/serve_01.png'),
    },
  }),
  created(){
    this.calculateWindows()
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = top;
      if (top >= 20) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
  },
  methods:{
    goTop() {
      document.documentElement.scrollTop = 0;
    },
    redirectPath(path){
      this.$router.push({path: path}).catch(()=>{})
    },
    calculateWindows(){
      this.innerWidth = window.innerWidth
      this.viewStyle = {height: (window.innerHeight-((window.innerWidth > 959) ? 100 : 121)) + 'px'}
    },
  }
}
</script>