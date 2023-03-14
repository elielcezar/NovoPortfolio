import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Portfolio from '../components/PortfolioLista.vue';
import ContactForm from '../components/ContactForm.vue';

Vue.use(VueRouter);
/*function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}*/
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/contato',
    name: 'contato',
    component: ContactForm,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
