import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConstants } from "./redux/slice/BrandingSlice";
import { brandingSelector } from "./redux/selector/selector";
import { applyTheme } from "./helper/applyTheme";

function App() {
  const dispatch = useDispatch();
  const { brandingData } = useSelector(brandingSelector);

  useEffect(() => {
    dispatch(getConstants());
  }, []);

  useEffect(() => {
    if (brandingData.brandTheme) {
      applyTheme(brandingData.brandTheme);
    }
  }, [brandingData]);

  return (
    <div className="font-extrabold text-primary">
      hello my name is vedant helwatkar im a nigga
    </div>
  );
}

export default App;
