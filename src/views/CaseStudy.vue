<template>
  <div>
    <!-- 回到頂部 -->
    <div class="goTop iconfont ml-gotop" :class="isTop ? 'goTopAfter' : ''"  @click="goTop()">
      <h1 class="my-3 mx-2 contentTitle" style="font-weight: 700; color: #FFF; font-size: 20px">TOP</h1>
    </div>
    
    <div id="router" class="pt-10" :style="viewStyle">

      <v-row justify="center" style="margin: 1% 8%">
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
          <v-img :src="images.action_04" width=400 alt="action_04"></v-img>
        </v-col>
      </v-row>
      
      <v-row style="margin:2% 8%; padding:0%; background:#FFF" justify="center">
        <v-col class="ma-0 pa-5 col-12 col-md-6" justify="center">
          <v-img :src="images.mockup_1" alt="mockup_1"></v-img>
        </v-col>
        <v-col class="ma-0 pa-5 col-12 col-md-5 text-left" align-self="center">
          <p class="styleH4">客製化行動裝置/APP</p>
          <p class="styleT4 pt-4" style="height:160px; line-height:28px">本App為亞東科技大學全校教職員生及校友提供具智慧化與整合性的資訊服務，系統支援接收推播資訊功能、個人資訊管理及整合性資訊資源</p>
        </v-col>
      </v-row>
      
      <v-row v-if="innerWidth >= 960" style="margin:2% 8%; padding:0%; background:#FFF" justify="center">
        <v-col class="ma-0 pa-5 col-12 col-md-5 text-left" align-self="center">
          <p class="styleH4">資訊管理系統</p>
          <p class="styleT4 pt-4" style="line-height:28px">本專案重新梳理/優化操作流程，同時追加特色功能以改善使用者多系統切換的操作痛點。五大系統分別為：考試報名系統、管理後台、題庫系統、監考系統及考試系統</p>
        </v-col>
        <v-col class="ma-0 pa-5 col-12 col-md-6" justify="center">
          <v-img :src="images.mockup_2" alt="mockup_2"></v-img>
        </v-col>
      </v-row>
      
      <v-row v-if="innerWidth < 960" style="margin:2% 8%; padding:0%; background:#FFF" justify="center">
        <v-col class="ma-0 pa-5 col-12 col-md-6" justify="center">
          <v-img :src="images.mockup_2" alt="mockup_2"></v-img>
        </v-col>
        <v-col class="ma-0 pa-5 col-12 col-md-5 text-left" align-self="center">
          <p class="styleH4">資訊管理系統</p>
          <p class="styleT4 pt-4" style="height:160px; line-height:28px">依照需求進行各類網站建置、語系切換、特定資訊及功能串接等特色功能。網站類別可分為官方網站、一站式網站、導購式網頁、智慧管理後台等</p>
        </v-col>
      </v-row>
      
      <v-row style="margin:2% 8%; padding:0%; background:#FFF" justify="center">
        <v-col class="ma-0 pa-5 col-12 col-md-6" justify="center">
          <v-img :src="images.mockup_3" alt="mockup_3"></v-img>
        </v-col>
        <v-col class="ma-0 pa-5 col-12 col-md-5 text-left" align-self="center">
          <p class="styleH4">客製化網站</p>
          <p class="styleT4 pt-4" style="height:160px; line-height:28px">依照需求進行各類網站建置、語系切換、特定資訊及功能串接等特色功能。網站類別可分為官方網站、一站式網站、導購式網頁、智慧管理後台等</p>
        </v-col>
      </v-row>
      
      <v-row v-if="innerWidth >= 960" style="margin:2% 8%; padding:0%; background:#FFF" justify="center">
        <v-col class="ma-0 pa-5 col-12 col-md-5 text-left" align-self="center">
          <p class="styleH4">設計專項團隊</p>
          <p class="styleT4 pt-4" style="line-height:28px">系統開發以 Wireframe 進行初期討論，最終提供完整 UI介面設計，視需求製作上架圖文、系統推廣短片、海報、周邊商品等</p>
        </v-col>
        <v-col class="ma-0 pa-5 col-12 col-md-6" justify="center">
          <v-img :src="images.mockup_4" alt="mockup_4"></v-img>
        </v-col>
      </v-row>
      
      <v-row v-if="innerWidth < 960" style="margin:2% 8%; padding:0%; background:#FFF" justify="center">
        <v-col class="ma-0 pa-5 col-12 col-md-6" justify="center">
          <v-img :src="images.mockup_4" alt="mockup_4"></v-img>
        </v-col>
        <v-col class="ma-0 pa-5 col-12 col-md-5 text-left" align-self="center">
          <p class="styleH4">設計專項團隊</p>
          <p class="styleT4 pt-4" style="height:160px; line-height:28px">系統開發以 Wireframe 進行初期討論，最終提供完整 UI介面設計，視需求製作上架圖文、系統推廣短片、海報、周邊商品等</p>
        </v-col>
      </v-row>

      <v-row justify="center" class="ma-1 my-8 flexNone">
        <v-row class="ma-0 mx-3 pa-1 col-10 col-md-auto" justify="left">
          <v-icon class="mr-2" color="#4880C8">mdi-email</v-icon>
          <p>chihta.software@gmail.com</p>
        </v-row>
        <v-row class="ma-0 mx-3 pa-1 col-10 col-md-auto" justify="left">
          <v-icon class="mr-2" color="#4880C8">mdi-briefcase-search</v-icon>
          <p>統一編號 83210973</p>
        </v-row>
        <v-row class="ma-0 mx-3 pa-1 col-10 col-md-auto" justify="left" @click="$refs.LoginPage.open()">
          <v-icon class="mr-2" color="#4880C8">mdi-map-marker-radius</v-icon>
          <p>新北市鶯歌區尖山路101巷4弄2號</p>
        </v-row>
      </v-row>
    </div>
    <LoginPage ref="LoginPage" :onSave="onLoginPage"/>
  </div>
</template>

<script>
import LoginPage from '@/dialogs/LoginPage'
export default {
  name: 'CaseStudy',
  components: {LoginPage},
  data:() => ({
    scrollNum: 0, //滾動距離
    isTop: false, //是否顯示回到頂部按鈕
    viewStyle:{},
    innerWidth: 0,
    images:{
      logo_chihta: require('@/assets/image/logo_chihta.png'),
      action_04: require('@/assets/image/action_04.png'),
      serve_01: require('@/assets/image/serve_01.png'),
      mockup_1: require('@/assets/image/mockup_1.png'),
      mockup_2: require('@/assets/image/mockup_2.png'),
      mockup_3: require('@/assets/image/mockup_3.png'),
      mockup_4: require('@/assets/image/mockup_4.png'),
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
    sessionStorage.setItem('login', 'false')
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
    onLoginPage(){
      sessionStorage.setItem('login', 'true')
      this.redirectPath('/chihta')
    },
  }
}
</script>