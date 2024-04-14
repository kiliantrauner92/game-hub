import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "771861dd92ea4399be6762cfbd35d35f"
    }
})