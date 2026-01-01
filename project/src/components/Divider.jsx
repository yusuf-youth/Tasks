import React from "react";
import { useAppContext } from "../hooks/useAppContext";

function Divider({ offsetLeft = false, offsetBottom = false }) {
  const { isDarkMode } = useAppContext();
  const offsetX = `${offsetBottom ? "divider--offset-bottom" : ""}`;
  const offsetY = `${offsetLeft ? "divider--offset-left" : ""}`;
  const darkTheme = `${isDarkMode ? "divider--dark" : ""}`;

  return <hr className={`divider ${offsetX} ${offsetY} ${darkTheme}`} />;
}

export default Divider;
