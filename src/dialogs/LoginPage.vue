<template>
  <v-row class="ma-0" style="justify-content:center">
    <v-dialog v-model="active" persistent max-width="500">
      <v-card class="pa-3">
        <div class="close-dialog-btn ma-3" style="border-radius:14px">
          <v-icon size="28px" color="#D8DDE4" @click="close">mdi-close</v-icon>
        </div>
        <v-row class="ma-0" style="padding:0px 24px">
          <v-card-title class="text-h5 my-2 px-0" style="font-weight:800">
            <div class="mr-3" style="background:#4880C8; width: 11px; height: 38px;"></div>
            <span class="mt-1">登入</span>
          </v-card-title>
        </v-row>
        <div style="width:100%; padding:0px 24px">
          <div class="text-left pt14">帳號</div>
          <v-text-field class="border pt-1 pt14" dense background-color="white" outlined v-model="memberId"></v-text-field>
          <div class="text-left pt-2 pt14">密碼</div>
          <v-text-field class="border pt-1 pt14" dense background-color="white" outlined type="password" v-model="passwd"></v-text-field>
          <h4 class="pt-4 text-left" style="font-size:14px; color:#FF5A5A" v-if="isError">帳號密碼輸入錯誤</h4>
          <v-btn class="loginBack mt-5 mb-10" outlined style="height:40px; width:100%; background:#4880C8; border-radius:8px; border:none" @click="login()">
            <span style="color:#FFFFFF">登入</span>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name:'LoginPage',
    props:['onSave'],
    mounted(){
    },
    data () {
      return {
        memberId: '',
        passwd: '',
        active: false,
        isError:false
      }
    },
    watch:{},
    computed:{},
    methods:{
      open(){
        this.active = true
      },
      close(){
        this.active = false
      },
      redirectPath(path){
        this.$router.push(path).catch(err => {})
      },
      login(){
        this.isError = false
        if(this.memberId == 'A001' && this.passwd == 'A002'){
          this.isError = false
          this.onSave()
          this.close()
        }else{
          this.isError = true
        }
      },
    }
  }
</script>