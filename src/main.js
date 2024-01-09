import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_HOST_API,
});



createApp(App).mount('#app')
