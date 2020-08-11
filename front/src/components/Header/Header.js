import React from "react";
import { withRouter } from "react-router-dom";

const categories = [
  {
    name: "Home",
    text: "매장안내",
  },
];

const Header = () => {
  return (
    <div>
      {categories.map((c) => (
        <div key={c.name} exact={c.name} to={c.name === "Home" ? "" : ""}>
          {c.text}
        </div>
      ))}
    </div>
  );
};

export default Header;
