import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  data(){
    return{
      cards: [
        {
           "id": "432984728397",
           "holder": "Harshada Mulye",
           "vendor": "bitcoin",
           "number": "5300 8355 9300 7870",
           "validMonth": "12",
           "validYear": "05",
           "bgColor": "#F9B449",
           "textColor": "#2c3e50",
           "img": "bitcoin"
        },
        {
           "id": "432984728397",
           "holder": "Shraddha Mulye",
           "vendor": "evil",
           "number": "5300 8355 8500 7870",
           "validMonth": "12",
           "validYear": "05",
           "bgColor": "#DF2E4C",
           "textColor": "#ECE6DF",
           "img": "evil"
        },
        {
           "id": "432984728397",
           "holder": "Reva Abh",
           "vendor": "blockchain",
           "number": "5300 8355 9900 7870",
           "validMonth": "12",
           "validYear": "05",
           "bgColor": "#7E4EE1",
           "textColor": "#ECE6DF",
           "img": "blockchain"
        },
        {
           "id": "432984728397",
           "holder": "Ganesh Abh",
           "vendor": "ninja",
           "number": "5300 8355 6900 7870",
           "validMonth": "12",
           "validYear": "05",
           "bgColor": "#3A3A3A",
           "textColor": "#ECE6DF",
           "img": "ninja"
        }
      ]
    }
  },
  render: h => h(App)
}).$mount("#app");
