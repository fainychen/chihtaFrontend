<template>
  <div>
    <!-- 回到頂部 -->
    <div class="goTop iconfont ml-gotop" :class="isTop ? 'goTopAfter' : ''"  @click="goTop()">
      <h1 class="my-3 mx-2 contentTitle" style="font-weight: 700; color: #FFF; font-size: 20px">TOP</h1>
    </div>
    
    <div id="router" class="pt-10" :style="viewStyle">

      <v-row justify="center" style="margin: 1% 8%">
        <v-col class="text-left pr-6 col-11 col-md-5" align-self="center">
          <p class="styleH4 mb-3">網站超連結</p>
          <p class="styleT2" style="color:#737373">中華企業資源規劃學會</p>
          <v-row class="ma-0 pb-4">
            <v-btn class="linkBtn styleBtn" outlined @click="openLink('https://chihta-software.com/Apply/#/login')">
              <h4 class="center">前台</h4>
              <v-icon class="pa-2">mdi-account-group</v-icon>
            </v-btn>
            <v-btn class="linkBtn styleBtn" outlined @click="openLink('https://chihta-software.com/ApplyAdmin/#/login')">
              <h4 class="center">後台</h4>
              <v-icon class="pa-2">mdi-human-male-board</v-icon>
            </v-btn>
            <v-btn class="linkBtn styleBtn" outlined @click="openLink('https://chihta-software.com/cerpsQuestionBank/#/login')">
              <h4 class="center">題庫</h4>
              <v-icon class="pa-2">mdi-database-arrow-left</v-icon>
            </v-btn>
            <v-btn class="linkBtn styleBtn" outlined @click="openLink('https://chihta-software.com/cerpsProctor/#/login')">
              <h4 class="center">監考</h4>
              <v-icon class="pa-2">mdi-account-file-text</v-icon>
            </v-btn>
            <v-btn class="linkBtn styleBtn" outlined @click="openLink('https://chihta-software.com/cerpsExaminee/#/login')">
              <h4 class="center">考試系統</h4>
              <v-icon class="pa-2">mdi-text-box-multiple</v-icon>
            </v-btn>
          </v-row>

          <p class="styleT2" style="color:#737373">碁峰資訊線上測驗系統</p>
          <v-row class="ma-0 pb-4">
            <v-btn class="linkBtn styleBtn" outlined @click="openLink('http://52.194.186.142/gotopExamTeacher/#/login')">
              <h4 class="center">教師端</h4>
              <v-icon class="pa-2">mdi-account-details</v-icon>
            </v-btn>
            <v-btn class="linkBtn styleBtn" outlined @click="openLink('http://52.194.186.142/gotopExamStudent/#/login')">
              <h4 class="center">學生端</h4>
              <v-icon class="pa-2">mdi-face-woman</v-icon>
            </v-btn>
            <v-btn class="linkBtn styleBtn" outlined @click="openLink('http://52.194.186.142/gotopExamAdmin/#/login')">
              <h4 class="center">管理後台</h4>
              <v-icon class="pa-2">mdi-account-cog</v-icon>
            </v-btn>
          </v-row>

          <p class="styleT2" style="color:#737373">我的卡路里</p>
          <v-row class="ma-0 pb-4">
            <v-btn class="linkBtn styleBtn" outlined @click="openLink('http://52.194.186.142/MyCal/#/homePage')">
              <h4 class="center">前台</h4>
              <v-icon class="pa-2">mdi-account-edit</v-icon>
            </v-btn>
            <v-btn class="linkBtn styleBtn" outlined @click="openLink('http://52.194.186.142/MyCalAdmin/#/login')">
              <h4 class="center">後台</h4>
              <v-icon class="pa-2">mdi-account-tie-woman</v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col class="px-6 col-11 col-md-4" style="height:100%; align-self: center;">
          <v-img :src="images.action_04" width=400 alt="action_04"></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChihtaPage',
  props: {},
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
    if(sessionStorage.getItem('login') != 'true'){
      this.redirectPath('/HomePage')
    }
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
    openLink(value){
      window.open(value)
    },
  }
}
</script>