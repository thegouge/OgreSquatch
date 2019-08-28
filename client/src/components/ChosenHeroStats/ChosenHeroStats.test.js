import React from "react";
import {shallow} from "enzyme";

import ChosenHeroStats from "./index";
import {findElementByDataTest} from "../../lib/testFunctions";

describe("ChosenHeroStats Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ChosenHeroStats />);
  });
  it("Should render without crashing", () => {
    const wrapper = findElementByDataTest(component, "chosenComp");

    expect(wrapper.length).toBe(1);
  });
});
