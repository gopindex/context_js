import React from "react";
import Third from "./Third";
export default function Second(props) {
  return (
    <div>
      <h1>{props.data}</h1>
      Second component
      <Third data={props.data} />
    </div>
  );
}
