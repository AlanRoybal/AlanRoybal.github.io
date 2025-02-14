import React, { useState } from "react";

const buttonStyle = {
  padding: "12px 40px",
  margin: "10px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s, box-shadow 0.2s",
};

const yesButtonStyle = {
  ...buttonStyle,
  background: "linear-gradient(to right, #16a34a, #15803d)",
};

const noButtonStyle = {
  ...buttonStyle,
  background: "linear-gradient(to right, #dc2626, #b91c1c)",
};

const Buttons = () => {
  const [index, setIndex] = useState(0);
  const [celebrate, setCelebrate] = useState(false);


  const handleYesClick = () => {
    setCelebrate(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {celebrate ? (
        <div style={{ fontSize: "24px", color: "green", fontWeight: "bold" }}>
          🎉 Yippee! 🎉
        </div>
      ) : (
        <>
          <p>Be my Valentine?</p>
          <button onClick={handleYesClick} style={yesButtonStyle}>Yes</button>
          <button style={noButtonStyle}>No</button>
        </>
      )}
    </div>
  );
};

export default Buttons;
