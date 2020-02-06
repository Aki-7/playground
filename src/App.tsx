import React, { FC } from "react";
import { Timer } from "./Timer";

export const App: FC = props => {
  return (
    <React.Fragment>
      <h1>React Typescript</h1>
      <Timer limit={3} />
      <Timer limit={5} />
      <Timer limit={7} />
      <Timer limit={9} />
      <Timer limit={100} />
    </React.Fragment>
  );
};
