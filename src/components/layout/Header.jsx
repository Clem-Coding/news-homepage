import React, { useState } from "react";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  console.log(showLinks);

  return (
    <header className="header">
      <div className="logo">
        <img src="./images/logo.svg" alt="logo" className="logo" />
      </div>

      <nav className="navbar">
        <button className="navbar_toggle" onClick={handleShowLinks}>
          <img
            src={
              showLinks
                ? "./images/icon-menu-close.svg"
                : "./images/icon-menu.svg"
            }
            alt={showLinks ? "Close menu" : "Open menu"}
          />
        </button>
        <ul className={`navbar_list ${showLinks ? "show-nav" : ""}`}>
          <li className="navbar_item">
            <a href="#" className="navbar_link">
              Home
            </a>
          </li>
          <li className="navbar_item">
            <a href="#" className="navbar_link">
              New
            </a>
          </li>
          <li className="navbar_item">
            <a href="#" className="navbar_link">
              Popular
            </a>
          </li>
          <li className="navbar_item">
            <a href="#" className="navbar_link">
              Trending
            </a>
          </li>
          <li className="navbar_item">
            <a href="#" className="navbar_link">
              Categories
            </a>
          </li>
        </ul>
        {showLinks && <div className="overlay"></div>}
      </nav>
    </header>
  );
}
