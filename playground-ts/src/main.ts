import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"
import { api } from "./api"

const app = createApp(App)

app.config.globalProperties.$http = api
app.config.globalProperties.$router = router
app.use(router).mount("#app")
