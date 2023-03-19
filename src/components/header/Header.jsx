import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Container } from "reactstrap";
import navLinks from "./navlinks";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 790) {
      console.log("s");
      setMenu(true);
    }
  }, []);
  return (
    <>
      <div className="header">
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between ">
            <div className="nav__logo">
              <HashLink to={"#home"}>
                <h2>Talal</h2>
              </HashLink>
            </div>
            {menu && (
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
            )}

            <div className="nav__right">
              {toggle ? (
                <BiMenuAltRight
                  className="nav__right__icon"
                  onClick={() => {
                    setToggle(false);
                    setMenu(true);
                  }}
                />
              ) : (
                <RxCross2
                  className="nav__right__icon"
                  onClick={() => {
                    setToggle(true);
                    setMenu(false);
                  }}
                />
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
