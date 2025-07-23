import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c811bb6f971a4a04bef612d2060b34b5",
  },
});
