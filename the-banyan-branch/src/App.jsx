import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConstants } from "./redux/slice/BrandingSlice";
import { brandingSelector } from "./redux/selector/selector";
import { applyTheme } from "./helper/applyTheme";
import { TabsConfig } from "./components/global/TabsConfig";

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
    <div>
      <TabsConfig />
    </div>
  );
}

export default App;
