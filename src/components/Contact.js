import React from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("---------");
    navigate("/");
  };

  return (
    <>
      <div className="component">Contact</div>
      <button onClick={handleSubmit}>Back To Home</button>
    </>
  );
};
