import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConstants } from "./redux/slice/BrandingSlice";
import { brandingSelector } from "./redux/selector/selector";
import { applyTheme } from "./helper/applyTheme";
import Home from "./Home";

function App() {
  const dispatch = useDispatch();
  const { brandingData } = useSelector(brandingSelector);

  useEffect(() => {
    dispatch(getConstants());
  }, [dispatch]);

  useEffect(() => {
    if (brandingData.brandTheme) {
      applyTheme(brandingData.brandTheme);
    }
  }, [brandingData]);

  return (
    <div className="min-h-screen bg-tertiary text-textBase font-body">
      <Home />
    </div>
  );
}

export default App;
