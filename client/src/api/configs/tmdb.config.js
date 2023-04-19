const mediaType = {
    movie: "movie",
    tv:"tv"
}

const mediaCatagory = {
    popular: "popular",
    top_rated: "top_rated"
}

const backdropPath = (imgEndpoint) => `https://image.tmdb.org/t/p/original${imgEndpoint}`;

const posterPath = (imgEndpoint)=> `https://image.tmdb.org/t/pw500${imgEndpoint}`;

const youtubePat = ( videoId) => `https://ww.youtube.com/embed/${videoId}? controls=0`;

const tmdbConfig = {
    mediaType,
    mediaCatagory,
    backdropPath,
    posterPath,
    youtubePat
};

export default tmdbConfig;