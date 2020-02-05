import React from "react";
import { Timer } from "./timer";

export const App = props => {
  return (
    <React.Fragment>
      <h1>React-js</h1>
      <Timer limit={3} />
      <Timer limit={5} />
      <Timer limit={7} />
      <Timer limit={9} />
      <Timer limit={11} />
      <Timer limit={100} />
    </React.Fragment>
  );
};
