import React, { useEffect } from "react";
import { useAppContext } from "./useAppContext";

function useDarkMode() {
  const { isDarkMode } = useAppContext();

  useEffect(() => {
    document.body.classList.toggle("is-dark", isDarkMode);
  }, [isDarkMode]);
}

export default useDarkMode;
