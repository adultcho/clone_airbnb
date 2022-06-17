import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const moveToDetail = () => {
    navigate('/detail')
  }
  return (
    <div className="main">
      <h1>main page</h1>
      <button onClick={moveToDetail}>move detail page</button>
    </div>
  );
};

export default Main;
