import { createContext } from "react";

const DemoContext = createContext("data1");

function DemoProvider(props) {
  return (
    <DemoContext.Provider value={{ data: "Hello world from the other side" }}>
      {props.children}
    </DemoContext.Provider>
  );
}

export { DemoContext, DemoProvider };
