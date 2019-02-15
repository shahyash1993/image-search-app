import Axios from "axios";

export default Axios.create({
  headers: {
    Authorization:
      "Client-ID 11923896f681b63d141093b9359dc21ad86d35ae3990eca4ff6c79c86b12de42"
  },
  baseURL: "https://api.unsplash.com"
});
