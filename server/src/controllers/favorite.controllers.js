import responseHandler from "../handlers/response.handler.js";
import favoriteModal from "../models/favorite.model.js";

const addFvorite = async (req,res)=> {
    try {
        const isFavorite = await favoriteModal.findOne({
            user: req.user.id,
            mediaId: req.body.mediaId
        })

        if (isFavorite) return responseHandler.ok(res ,isFavorite);

        const favorite = new favoriteModal({
            ...req.body,
            user: req.user.id
        })

        await favorite.save()
        responseHandler,created(res, favorite);
    } catch {
        responseHandler.error(res);
    }
};

const removFavorite =  async (req, res) => {
    try {
        const { favoriteId} = req.params

        const favorite = await favoriteModal.findOne({
            user: req.user.id,
            _id: favoriteId
        })

        if (!favorite) return responseHandler.notFound(res);

        await favorite.remove();

        responseHandler.ok(res);
    } catch {
        responseHandler.error(res);
    }
};

const getFavoritesOfUser = async (req, res) => {
    try {
        const favorite = await favoriteModal.find({ user: req.user.id}).sort
        ("-createdAt");

        responseHandler.ok(res, favorite);
    } catch {
        responseHandler.error(res)

    }
};

export default { addFvorite, removFavorite, getFavoritesOfUser};