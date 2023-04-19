import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppState } from "../../redux/features/appStateSlice";

const pageWrapper = ({ state, children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
      window.scrollTo(0,0)
        dispatch(setAppState(state))
    }, [state]);
    

  return (
    children
  );
};

export default pageWrapper;


