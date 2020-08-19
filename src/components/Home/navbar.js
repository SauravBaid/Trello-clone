import React from "react";
import { Link } from "react-router-dom";
export default function navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <i
          className="fas fa-home"
          style={{
            color: "#dedede",
            padding: "0.3rem 1rem",
            cursor: "pointer",
          }}
        ></i>
      </Link>
      <span>Kubric - Trello</span>
    </div>
  );
}
