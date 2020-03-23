import React from 'react';
import Logo from "./logo";
import SearchBar from "./search-bar";

function Header() {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
    </header>
  )
}

export default Header;
