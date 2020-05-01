<!--
 * @Author: your name
 * @Date: 2020-02-29 17:20:47
 * @LastEditTime: 2020-03-18 16:04:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-blog\src\App.vue
 -->
<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
    <el-button @click="change" type="primary">{{ $t("message.title") }} </br> </br>{{ $t("message.content") }}</br>{{ $t("message.configTheme") }}</br>{{ $t("message.configAjax") }}</br>{{ $t("message.vuex") }}</el-button>
  
   <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <p>vuex示例-当前值{{count}}</p>
    <button @click="add">+</button>
    <button @click="js" >-</button>
  </div>
</template>

<script>
import { MessageBox } from 'element-ui'
import {mapState,mapActions} from 'vuex'
export default {
  name: "App",
  data() {
    return {
      changeVal: "zh",
      dialogVisible: false,
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };

    
  },
  computed:{

    ...mapState(['count']),
  },

  mounted(){
     
      
  },
  methods: {
    change() {
      let lang = window.localStorage.getItem("lang");
      if (lang == "zh") {
        window.localStorage.setItem("lang", "en");
        this.$i18n.locale = "en";
       
        
      } else {
        window.localStorage.setItem("lang", "zh");
        this.$i18n.locale = "zh";
       
      }
    },

     ...mapActions(['add','js']),
  
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
