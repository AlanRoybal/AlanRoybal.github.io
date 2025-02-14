import React from "react";

const bannerStyle = {
  width: "100%",
  padding: "16px 0",
  textAlign: "center",
  background: "linear-gradient(to right, #ec4899, #dc2626)",
  color: "white",
  fontSize: "24px",
  fontWeight: "bold",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  animation: "pulse 2s infinite",
  position: "fixed",
  top: "0",
};

const Banner = () => {
  return (
    <div style={bannerStyle}>
      Happy Valentine's Day Payton!
    </div>
  );
};

export default Banner;
