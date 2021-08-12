import React from "react";
import First from "./First";
import { DemoProvider } from "./DemoContext";

export default function Context() {
  return (
    <div className="Context">
      <DemoProvider>
        <First data="data"></First>
      </DemoProvider>
    </div>
  );
}
