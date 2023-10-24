<template>
  <div>
    <div id="router" class="pt-10" :style="viewStyle">
      
      <!-- <p class="styleH4">INQUIRY FORM</p> -->
      <p class="styleH2">聯絡我們</p>
      <p class="styleT2 px-6" style="color:#737373">發送信件至 chihta.software@gmail.com 我們將儘速回應您。</p>

      <v-row class="justifyCenter" style="margin: 1% 8%">
        <v-btn class="pa-4 styleBtn" outlined style="color:#4880C8">
          <v-icon class="pr-2">mdi-email-outline</v-icon>
          <!-- https://www.letswrite.tw/mailto-link/ -->
          <a href="mailto:chihta.software@gmail.com" style="text-decoration:none; color:#4880C8"><h4 class="center">快速發信聯絡</h4></a>
        </v-btn>
      </v-row>
      <v-row class="justifyCenter" style="margin: 1% 8%">
        <v-col class="col-12 col-md-6 pa-5" align="center">
          <v-img :src="images.action_05" width=400 alt="action_05"></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  props: {},
  data:() => ({
    viewStyle:{},
    innerWidth: 0,
    images:{
      action_05: require('@/assets/image/action_05.png'),
    },
  }),
  created(){
    this.calculateWindows()
  },
  methods:{
    calculateWindows(){
      this.innerWidth = window.innerWidth
      this.viewStyle = {height: (window.innerHeight-((window.innerWidth > 959) ? 100 : 121)) + 'px'}
    },
    goTop() {
      document.documentElement.scrollTop = 0;
    },
  }
}
</script>

