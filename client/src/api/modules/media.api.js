import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const mediaEndPoints = {
    list: ({mediaType, mediaCatagory, page}) => `${mediaType}/${mediaCatagory}?page=${page}`,

    detail: ({mediaType, mediaId}) => `${mediaType}/detail/${mediaId}`,

    search: ({mediaType, query, page}) => `${mediaType}/search?query=${query}&page=${page}`,
};

const mediaApi = {
    getList: async ({mediaType, mediaCatagory, page}) => {
        try {
            const response = await publicClient.get(
                mediaEndPoints.list({ mediaType, mediaCatagory,page})
            )
            return { response };
            } catch (err) { return { err };}
        },
        geDetail: async ({mediaType, mediaId}) => {
            try {
                const response = await privateClient.get(
                    mediaEndPoints.detail({ mediaType, mediaId})
                )
                return { response };
                } catch (err) { return { err };}
            },
            search: async ({mediaType, query, page}) => {
                try {
                    const response = await publicClient.get(
                        mediaEndPoints.search({ mediaType, query,page})
                    )
                    return { response };
                    } catch (err) { return { err };}
                },
};

export default mediaApi;