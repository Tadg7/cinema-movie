import React from "react";
import navListData from "../data/navListData";
import NavListItem from "../components/NavListItem";
import "./header.css";
import Search from "../components/Search";
import Button from "../components/Button";
export const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        cinima
      </a>
      <ul className="nav">
        {navListData.map((item) => {
          return (
            <NavListItem key={item.id} name={item.name} link={item.link} />
          );
        })}
      </ul>
      <Search />
      <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name="sign in" />
    </header>
  );
};
export default Header;