import axios from "axios";
const API_KEY= "NtCC0KXu88qlLdrN_eers1JczYKsAdeYR1LipS7FH80"

export default axios.create({
     baseURL: 'https://api.unsplash.com/', 
     headers: {
        Authorization: "Client-ID " + API_KEY
     }
})