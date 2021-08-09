import React from "react";

function Avatar(props) {
  return (
    <span className="emoji" role="img" aria-label="Tense Biceps">
      {props.img}
    </span>
  );
}

export default Avatar;
