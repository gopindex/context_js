import React from "react";
import Second from "./Second";

export default function First(props) {
  return (
    <div>
      First component
      <h1>{props.data}</h1>
      <Second data={props.data} />
    </div>
  );
}
