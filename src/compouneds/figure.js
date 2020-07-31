// react import
import React from "react";
import { Link } from "react-router-dom";

function Figure(props) {
  return (
      <div>
        <figure className="figure">
            {props.children}
        </figure>
        <hr/>
      </div>
  );
}

// react export
export default Figure;
