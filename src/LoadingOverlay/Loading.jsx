// LoadingOverlay.js
import React from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(255, 255, 255, 0.4)", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        backdropFilter: "blur(0.04px)",
      }}
    >
      <CircularProgress style={{color: " rgb(255,224,138)"}}/>
    </div>
  );
};

export default Loading;
