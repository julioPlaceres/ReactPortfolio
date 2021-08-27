// Pre-loader
import React from "react";

function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

// Export Function
export default Pre;
