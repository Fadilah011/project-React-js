import HomeOutLinedIcon from "@mui/icons-material/HomeOutLined";
import SlideshowOutLinedIcon from "@mui/icons-material/SlideshowOutLined";
import LiveTvOutLinedIcon from "@mui/icons-material/LiveTvOutLined";
import FavoriteBorderOutLinedIcon from "@mui/icons-material/FavoriteBorderOutLined";
import SearchOutLinedIcon from "@mui/icons-material/SearchOutLined";
import LockResetOutLinedIcon from "@mui/icons-material/LockResetOutLined";


const main = [
    {
        display: "home",
        path: "/",
        icon: <HomeOutLinedIcon/>,
        state: "home"
    },
    {
        display: "movies",
        path: "/movie",
        icon: <SlideshowOutLinedIcon/>,
        state: "movie"
    },
    {
        display: "tv series",
        path: "/tv",
        icon: <LiveTvOutLinedIcon/>,
        state: "hometve"
    },
    {
        display: "search",
        path: "/search",
        icon: <SearchOutLinedIcon/>,
        state: "search"
    },

]

const user = [
    {
        display: "favorites",
        path: "/favorites",
        icon: <FavoriteBorderOutLinedIcon/>,
        state: "favorites"
    },
    {
        display: "reviews",
        path: "/reviews",
        icon: <RateReviewOutLinedIcon/>,
        state: "reviews"
    },
    {
        display: "password update",
        path: "/password-update",
        icon: <LockResetOutLinedIcon/>,
        state: "password.update"
    },
]

const menuConfigs = { main, user };

export default menuConfigs;