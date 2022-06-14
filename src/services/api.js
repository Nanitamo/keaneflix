// Base da URL: https://api.themoviedb.org/3/ 
// URL API: https://api.themoviedb.org/3/movie/550?api_key=d50845d835a718097f921b3f2403254f

import axios from "axios";


 const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
