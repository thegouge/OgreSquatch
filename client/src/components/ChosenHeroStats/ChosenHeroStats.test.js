import React from "react";
import ReactDOM from "react-dom";

import ChosenHeroStats from "./ChosenHeroStats";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ChosenHeroStats
      data={{name: "test hero"}}
      mode={"quick"}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
