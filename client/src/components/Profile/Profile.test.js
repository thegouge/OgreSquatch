import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Profile data={
      {
        profile: {
          name: "test profile", 
          icons: {
            icon: "#"
          }
        }, 
        heroStats: {
          "allHeroes": {
            name: "allHeroes",
            quick: {
            }
          }
        }
      }
    } />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
