import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h3 className="">
          melanson<span className="tomato">S</span>
        </h3>
        <div className="header-buttons">
          <button>Lang</button>
          <button>Mode</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
