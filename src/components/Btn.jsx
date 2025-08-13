// src/components/PopupButton.jsx
import React from "react";
const Btn = ({ onClick, label, bgColor, textColor }) => {

  return (
    
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} text-lg px-5 py-3 rounded-lg mt-10 ml-14 font-semibold shadow-md hover:opacity-90 transition`}
    >
      {label}
    </button>
  );
};
4
export default Btn;
