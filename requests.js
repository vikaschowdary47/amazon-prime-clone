const dotenv = require('dotenv')

const API_KEY = process.env.API_KEY

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTv: `/discover/tv?api_key=${API_KEY}&language=en-US&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchThrillerMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
    fetchDocumentaryMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}


export default requests;