import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'
import VueAxios from 'vue-axios';

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_HOST_API, // Certifique-se de que essa variável de ambiente está definida
});

const app = createApp(App);

app.use(VueAxios, axiosInstance);

app.mount('#app');