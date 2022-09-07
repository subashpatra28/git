import React from "react";
import spinner from "../../assets/spinner.gif";

const Loading = () => (
  <div className="loading">
    <img src={spinner} alt="loading" />
  </div>
);

export default Loading;
