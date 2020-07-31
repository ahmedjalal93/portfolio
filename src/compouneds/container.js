// react import
import React from "react";
import { Link } from "react-router-dom";

function Container(props) {
  return (
    <div className="container">
        {props.children}
    </div>
  );
}

// react export
export default Container;
