import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

import Post from './components/UI/Post.vue';

const app = createApp(App)

app.use(router);
app.component('post', Post);

app.mount('#app')