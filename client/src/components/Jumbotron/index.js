import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "white", padding: "0" }}
      className="jumbotron"
    >
      <img src="./banner.png" alt="book-icon" style={{ height: "200px" }} />
    </div>
  );
};

export default Jumbotron;
