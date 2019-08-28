import React from "react";
import {shallow} from "enzyme";

import Profile from "./index";
import {findElementByDataTest} from "../../lib/testFunctions";

describe("Profile Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Profile />);
  });
  it("Should render without crashing", () => {
    const wrapper = findElementByDataTest(component, "profileComp");

    expect(wrapper.length).toBe(1);
  });
});
