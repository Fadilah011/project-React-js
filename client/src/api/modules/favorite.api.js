import privateClient from "../client/public.client";

const favoriteEndPoints = {
    List: "user/favorites",
    add: "user/favorits",
    remove: ({ favoriteId}) => `user/favorites/${favoriteId}`
};

const favoriteApi = {
    getList: async () => {
        try {
            const response = await privateClient.get(favoriteEndPoints.List);
            return { response };
            } catch (err) { return { err };}
        },
        add: async ({
            mediaId,
            mediaType,
            mediaTitle,
            mediaRate
        }) => {
            try {
                const response = await privateClient.post(
                favoriteEndPoints.add,
                {
            mediaId,
            mediaType,
            mediaTitle,
            mediaRate
                }
                    );
                return { response };
                } catch (err) { return { err };}
            },
            remove: async ({ favoriteId}) => {
                try {
                    const response = await privateClient.delete(favoriteEndPoints.remove({
                        favoriteId }));

                    return { response };
                    } catch (err) { return { err };}
                },
        
        };




export default favoriteApi;