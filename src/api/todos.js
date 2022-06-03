import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://vue-app-cb7e2-default-rtdb.europe-west1.firebasedatabase.app',
    timeout : 1000
})


export default instance