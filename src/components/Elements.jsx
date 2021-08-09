import React from "react";
import Avat from "./Avatar";

function Elements(props) {
  return (
    <div className="term">
      <dt>
        {/* <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.img}
        </span> */}
        <Avat img={props.image} />
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Elements;
