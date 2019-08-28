import React from "react";
import {shallow} from "enzyme";

import Search from "./index";
import {findElementByDataTest} from "../../lib/testFunctions";

describe("Search Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Search />);
  });
  it("Should render without crashing", () => {
    const wrapper = findElementByDataTest(component, "searchComp");

    expect(wrapper.length).toBe(1);
  });
});
