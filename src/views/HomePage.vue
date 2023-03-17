<template>
  <div>
    <!-- https://nightly.ckeditor.com/22-06-18-06-03/full/samples/index.html?fbclid=IwAR1bFbCixcoFDY_jxXofXaZikxY_zNIvIDfzY-kvgRI5_mu0F1XnOeBI5Tw -->
    <!-- 回到頂部 -->
    <div id="router" class="pt-10" :style="viewStyle">

      <p class="styleH4">面對資訊系統的建置/優化</p>
      <p class="styleH2">您是否也有這種疑問？</p>

      <v-row justify="center" class="ma-1 mt-8" style="padding:4% 5%;">
        <v-col class="col-11 col-md-5">
          <v-img :src="images.action_01" alt="action_01"></v-img>
        </v-col>
        <v-col class="col-11 col-md-4 py-6" align-self="center">
          <v-row align="center">
            <v-col cols="2" class="px-1 py-2">
              <v-img :src="images.icon_doubt_01" width=75 alt="icon_doubt_01"></v-img>
            </v-col>
            <v-col cols="10" class="pa-0 pl-2" align="left">
              <p class="styleT2">不知道從何開始？</p>
              <p class="styleT4">舊系統架構複雜，功能及分支眾多</p>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="2" class="px-1 py-2">
              <v-img :src="images.icon_doubt_02" width=75 alt="icon_doubt_02"></v-img>
            </v-col>
            <v-col cols="10" class="pa-0 pl-2" align="left">
              <p class="styleT2">沒有時間多方尋找廠商？</p>
              <p class="styleT4">如何作為系統設計與開發中間的橋樑</p>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="2" class="px-1 py-2">
              <v-img :src="images.icon_doubt_03" width=75 alt="icon_doubt_03"></v-img>
            </v-col>
            <v-col cols="10" class="pa-0 pl-2" align="left">
              <p class="styleT2">如何提高使用者體驗？</p>
              <p class="styleT4">希望使用流程較為直覺，易操作</p>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="2" class="px-1 py-2">
              <v-img :src="images.icon_doubt_04" width=75 alt="icon_doubt_04"></v-img>
            </v-col>
            <v-col cols="10" class="pa-0 pl-2" align="left">
              <p class="styleT2">擔心系統維護與資訊安全？</p>
              <p class="styleT4">找尋好配合的廠商且能夠快速給予協助</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      
      <v-row justify="center" style="margin: 1% 0% 5% 0%; padding:4% 5%; background:#FFF">
        <v-col class="col-11 col-md-3 pa-5" align="center">
          <v-img :src="images.logo_chihta" width=180 alt="logo_chihta"></v-img>
        </v-col>
        <v-col class="col-11 col-md-5 pa-5" align-self="center" align="left">
          <v-row class="ma-0 pa-0">
            <p class="styleH4" style="color:#4880C8">智達軟體設計</p>
            <p class="styleH4">・解決您的困擾</p>
          </v-row>
          <v-row class="ma-0 pa-0">
            <p class="styleT4 pt-2" style="color:#737373">本公司成立於2021年，以開啟著的圓形開關鍵，象徵本公司為客戶提供之軟體設計服務及視覺設計服務 Always ON 的決心</p>
          </v-row>
        </v-col>
      </v-row>

      <div class="mx-0 mt-8 mb-6 pa-0">
        <p class="styleH4">深耕軟體及設計產業</p>
        <p class="styleH2">三大領域・完整服務</p>
      </div>

      <v-row justify="space-around" style="margin: 1% 12% 0% 12%">
        <v-col class="ma-2 pa-0 col-11 col-md-3" style="background:#FFF; box-shadow: 3px 5px 9px -1px #00000014;">
          <div class="pt-6 pb-3" justify="center" style="border-bottom: 1px solid #737373">
            <v-img class="mx-auto" :src="images.service_01" width=260 alt="logo_chihta"></v-img>
          </div>
          <div class="pa-6 text-left">
            <p class="styleT2">醫療領域</p>
            <p class="styleT4 pt-1">給藥追蹤系統｜手術室看板｜診所APP｜智能管理平台</p>
          </div>
        </v-col>
        <v-col class="ma-2 pa-0 col-11 col-md-3" style="background:#FFF; box-shadow: 3px 5px 9px -1px #00000014;">
          <div class="pt-6 pb-3" justify="center" style="border-bottom: 1px solid #737373">
            <v-img class="mx-auto" :src="images.service_02" width=260 alt="logo_chihta"></v-img>
          </div>
          <div class="pa-6 text-left">
            <p class="styleT2">教育領域</p>
            <p class="styleT4 pt-1">校園智慧校園行動APP｜認證考試報名系統｜監考系統｜考試系統</p>
          </div>
        </v-col>
        <v-col class="ma-2 pa-0 col-11 col-md-3" style="background:#FFF; box-shadow: 3px 5px 9px -1px #00000014;">
          <div class="pt-6 pb-3" justify="center" style="border-bottom: 1px solid #737373">
            <v-img class="mx-auto" :src="images.service_03" width=260 alt="logo_chihta"></v-img>
          </div>
          <div class="pa-6 text-left">
            <p class="styleT2">其他領域</p>
            <p class="styleT4 pt-1">硬件整合｜物聯網開發｜智慧工廠及智慧城市</p>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center" style="margin: 4% 8% 0% 8%">
        <v-col class="text-left pr-6 col-12 col-md-6" align-self="center">
          <p class="styleH4">解決您對於專案執行流程的各項疑惑</p>
          <p class="styleH2">專業客製化軟體開發團隊</p>
          <p class="styleT2" style="color:#737373">依照專案特性與範疇建立專屬開發團隊，期間以使用者體驗為導向進行系統設計，滿足各式使用者的作業需求，用以提高作業效率與同業競爭力</p>
          <v-row class="ma-0 pt-4">
            <v-btn class="pa-4 styleBtn" outlined style="color:#4880C8" @click="redirectPath('/service')">
              <h4 class="center">查看服務項目</h4>
            </v-btn>
            <v-btn v-if="innerWidth >= 588" class="pa-4 ml-2 styleBtn" outlined style="color:#4880C8" @click="redirectPath('/contactUs')">
              <h4 class="center">發信聯絡智達</h4>
            </v-btn>
          </v-row>
        </v-col>
        <v-col class="px-6 col-11 col-md-4" align="center">
          <v-img :src="images.action_02" width=400 alt="action_02"></v-img>
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
        <v-row class="ma-0 mx-3 pa-1 col-10 col-md-auto" justify="left">
          <v-icon class="mr-2" color="#4880C8">mdi-map-marker-radius</v-icon>
          <p>新北市鶯歌區尖山路101巷4弄2號</p>
        </v-row>
      </v-row>

      <div class="goTop iconfont ml-gotop" :class="isTop ? 'goTopAfter' : ''" @click="goTop()">
        <h1 class="my-3 mx-2 contentTitle" style="font-weight: 700; color: #FFF; font-size: 20px">TOP</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {},
  data:() => ({
    viewStyle:{},
    scrollNum: 0, //滾動距離
    isTop: false, //是否顯示回到頂部按鈕
    innerWidth: 0,
    images:{
      logo_chihta: require('@/assets/image/logo_chihta.png'),
      action_01: require('@/assets/image/action_01.png'),
      action_02: require('@/assets/image/action_02.png'),
      service_01: require('@/assets/image/service_01.png'),
      service_02: require('@/assets/image/service_02.png'),
      service_03: require('@/assets/image/service_03.png'),
      icon_doubt_01: require('@/assets/image/icon_doubt_01.png'),
      icon_doubt_02: require('@/assets/image/icon_doubt_02.png'),
      icon_doubt_03: require('@/assets/image/icon_doubt_03.png'),
      icon_doubt_04: require('@/assets/image/icon_doubt_04.png'),
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
    calculateWindows(){
      this.innerWidth = window.innerWidth
      this.viewStyle = {height: (window.innerHeight-((window.innerWidth > 959) ? 100 : 121)) + 'px'}
    },
    redirectPath(path){
      this.$router.push({path: path}).catch(()=>{})
    },
    goTop() {
      document.documentElement.scrollTop = 0;
    },
  }
}
</script>

