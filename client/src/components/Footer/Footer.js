import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer data-test="footerComp">
      <div className="credit">
        <a className="alex-link" href="https://thegouge.github.io">
          <img
            className="alex"
            src={require("../../assets/images/me.jpg")}
            alt="Alex Logo"
          />
        </a>
        &copy; Gouge-Schajer Websites
      </div>
      <div className="credit">
        I do not own the rights to this game or it's characters, all of that is
        property of{" "}
        <a className="credit-link" href="https://playoverwatch.com/en-us/">
          Blizzard
        </a>{" "}
        (please don't sue me)
      </div>
      <div className="credit">
        toggle switch designed by{" "}
        <a
          className="credit-link"
          href="https://codepen.io/mallendeo/pen/eLIiG?editors=1100">
          mallendeo
        </a>
      </div>
      <div className="credit">
        Loading Spinner and Button Styles designed by{" "}
        <a
          className="credit-link"
          href="https://codepen.io/brundolf/pen/kXwdBb?editors=0100">
          brundolf
        </a>
      </div>
    </footer>
  );
};

export default Footer;
