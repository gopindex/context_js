import React, { useContext } from "react";
import { DemoContext } from "./DemoContext";

export default function Third(props) {
  const value = useContext(DemoContext);
  return (
    <div>
      Third Component
      <h1>{value.data}</h1>
      <h1>{props.data}</h1>
    </div>
  );
}
