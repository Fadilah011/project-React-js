import tmdbConfig from "./tmdb.config.js";

const tmdbEndpoints = {
    mediaList: ({ mediaType, mediaCatagory, page})=> tmdbConfig.getUrl(
        `${mediaType}/${mediaCatagory}`,page
    ),
    mediaDetail: ({ mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}`
    ),
    mediaGenres: ({mediaType}) => tmdbConfig.getUrl(
        `genre/${mediaType}/List`
    ),
    mediaCredits:  ({ mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/credits`
    ),
    mediaVideos: ({ mediaType, mediaId})=> tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/videos`
    ),
    mediaRecommend: ({ mediaType, mediaId})=> tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/recemmondations`
    ),
    mediaImages: ({ mediaType, mediaId})=> tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/images`
    ),
    mediaSearch: ({ mediaType, query, page}) => tmdbConfig.getUrl(
        `search/${mediaType}`, {query, page}
    ),
    personDetail: ({ personId })=> tmdbConfig.getUrl(
        `person/${personId}`
    ),
    personMedias: ({ personId })=> tmdbConfig.getUrl(
        `person/${personId}/combined_credits`
    )
};

export default tmdbEndpoints;