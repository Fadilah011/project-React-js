import publicClient from "../client/public.client";

const genreEndPoints = {
    List: ({ mediaType}) => `${mediaType}/genres`};

const genreApi = {
    getList: async ({ mediaType}) => {
        try {
            const response = await publicClient.get(genreEndPoints.List({ mediaType}));
            return { response };
            } catch (err) { return { err };}
        }
    };

export default genreApi;