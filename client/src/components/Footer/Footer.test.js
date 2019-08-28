import React from "react";
import {shallow} from "enzyme";

import Footer from "./index";
import {findElementByDataTest} from "../../lib/testFunctions";

describe("Footer Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Footer />);
  });
  it("Should render without crashing", () => {
    const wrapper = findElementByDataTest(component, "footerComp");

    expect(wrapper.length).toBe(1);
  });
});
