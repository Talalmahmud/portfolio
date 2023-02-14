import React from "react";
import { HashLink } from "react-router-hash-link";
import { Container } from "reactstrap";
import navLinks from "./navlinks";
import { BiMenuAltRight } from "react-icons/bi";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between ">
            <div className="nav__logo">
              <HashLink to={"/"}>
                <h2>Talal</h2>
              </HashLink>
            </div>
            <div className="nav__menu d-flex gap-5">
              {navLinks.map((item, index) =>
                item.display === "/portfolio" ? (
                  <NavLink key={index} to={item.url}>
                    {item.display}
                  </NavLink>
                ) : (
                  <HashLink key={index} to={item.url}>
                    {item.display}
                  </HashLink>
                )
              )}
            </div>
            <div className="nav__right">
              <BiMenuAltRight />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
