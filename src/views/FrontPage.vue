<template>
  <div style="background:#F8FAFC">
    <v-row class="justifyCenter" style="margin: 30px 10% 10px 10%" align="center">
      <div align="center" @click="redirectPath('/homePage')">
        <v-img :src="images.logo" width=240 alt="智達軟體設計LOGO"></v-img>
      </div>
      <div class="app-content-left" style="margin-left: 40px">
        <v-row>
          <p class="tab" :class="{tab_click:tabIndex==0}" style="" @click="redirectPath('/homePage'); tabIndex=0">關於我們</p>
          <p class="tab" :class="{tab_click:tabIndex==1}" style="" @click="redirectPath('/service'); tabIndex=1">服務項目</p>
          <p class="tab" :class="{tab_click:tabIndex==2}" style="" @click="redirectPath('/caseStudy'); tabIndex=2">作品案例</p>
          <!-- <p class="tab" :class="{tab_click:tabIndex==3}" style="" @click="redirectPath('/contactUs'); tabIndex=3">聯絡我們</p> -->
          <!-- 
          <p class="tab" :class="{tab_click:tabIndex==3}" style="" @click="redirectPath('/location'); tabIndex=3">Venue</p>
          <p class="tab" :class="{tab_click:tabIndex==4}" style="" @click="redirectPath('/contactUs'); tabIndex=4">Contacts</p> -->
        </v-row>
      </div>
      <v-spacer v-if="innerWidth >= 363"></v-spacer>
      <div v-if="innerWidth >= 363" style="width:50px">
        <v-btn class="pa-4" outlined style="border-radius: 200px; color:#4880C8" @click="redirectPath('/contactUs')">
          <div class="pr-1">
            <v-img :src="images.icon_contact" width=20 alt="聯絡智達軟體設計"></v-img>
          </div>
          <h4 v-if="innerWidth >= 960" class="center">聯絡智達</h4>
        </v-btn>
      </div>
    </v-row>

    <div class="hamburger" style="width: 50px; display: none">
      <input id="menu__toggle" type="checkbox" v-model="hamburger_toggle"/>
      <label class="menu__btn" for="menu__toggle" style="z-index: 4; margin-top:15px">
        <span></span>
      </label>

      <ul class="menu__box" style="z-index: 3">
        <p class="tab_hamburger py-4" :class="{tab_click:tabIndex==0}" style="box-shadow: 0 2px #DDD;" @click="redirectPath('/homePage'); tabIndex=0; hamburger_toggle=false">關於我們</p>
        <p class="tab_hamburger py-4" :class="{tab_click:tabIndex==1}" style="box-shadow: 0 2px #DDD;" @click="redirectPath('/service'); tabIndex=1; hamburger_toggle=false">服務項目</p>
        <p class="tab_hamburger py-4" :class="{tab_click:tabIndex==2}" style="box-shadow: 0 2px #DDD;" @click="redirectPath('/caseStudy'); tabIndex=2; hamburger_toggle=false">作品案例</p>
        <!-- <p class="tab_hamburger py-4" :class="{tab_click:tabIndex==3}" style="box-shadow: 0 2px #DDD;" @click="redirectPath('/contactUs'); tabIndex=3; hamburger_toggle=false">聯絡我們</p> -->
        <!-- 
        <p class="tab_hamburger" :class="{tab_click:tabIndex==3}" style="box-shadow: 0 2px #DDD;" @click="redirectPath('/location'); tabIndex=3; hamburger_toggle=false">Venue</p> 
        <p class="tab_hamburger" :class="{tab_click:tabIndex==4}" style="" @click="redirectPath('/contactUs'); tabIndex=4; hamburger_toggle=false">Contacts</p>-->
      </ul>
    </div>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  props: {},
  data:() => ({
    images:{
      logo: require('@/assets/image/logo.png'),
      icon_contact: require('@/assets/image/icon_contact.png'),
      // background: require('@/assets/image/background.jpg'),
    },
    tabIndex:0,
    innerWidth: 0,
    hamburger_toggle:false,
  }),
  computed: {},
  created(){
    this.calculateWindows()
  },
  mounted() {
    this.redirectPath('/homePage')
    this.tabIndex = 0
  },
  methods:{
    calculateWindows(){
      this.innerWidth = window.innerWidth
    },
    redirectPath(path){
      this.$router.push({path: path}).catch(()=>{})
    },
  }
}
</script>

<style>
  .tab, .tab_hamburger {
    padding: 10px 15px;
    font-size: 18px;
    font-weight: 700;
    color: #737373;
    cursor: pointer;
  }
  .tab_click {
    /* color: #3C8BC6; */
  }
  .tab:hover {
    /* box-shadow: 0 2px #133755; */
    color: #3C8BC6;
  }
  .tab_hamburger:hover {
    color: #3C8BC6;
  }

  /** hamburger start **/
  /* https://codepen.io/alvarotrigo/pen/yLzaPVJ */
  #menu__toggle {
    opacity: 0;
  }
  #menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  #menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    left: 0 !important;
  }
  .menu__btn {
    position: fixed;
    top: 40px;
    left: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    /* z-index: 1; */
  }
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #3C8BC6;
    transition-duration: .25s;
  }
  .menu__btn > span::before {
    content: '';
    top: -8px;
  }
  .menu__btn > span::after {
    content: '';
    top: 8px;
  }
  .menu__box {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 230px;
    /* height: 100%; */
    margin: 0;
    padding-left: 0px !important; 
    padding-top: 65px;
    list-style: none;
    background-color: #FFF;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;
  }
  /** hamburger end **/

  @media (max-width: 959px) {
    .hamburger {
      display: unset !important;
      width: 50px !important;
    }
    .app-content-left {
      display: none !important;
    }
  }

</style>