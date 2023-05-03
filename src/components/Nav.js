import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, fade } from "../animation";

import logo from "../img/raccoon.png"
import home from "../img/home.svg"
import projects from "../img/projects.png"

const logoImg = styled.nav`
  height: 20%;
  width: 20%;
`;

const Navbar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #c06c84;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 5000;
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 2rem;
      position: relative;
      color: #171F46;
    }
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 2rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    display: none;
    padding: 1rem;
    h1 {
      font-size: 0.5rem;
    }
    ul {
      li {
        font-size: 0.5em;
        display: none;
      }
    }
  }
`;

const NavbarMobile = styled.div`
  display: none;
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
    background: #c06c84;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 5000;
    h1 {
      font-size: 0.5rem;
    }
    ul {
      li {
        font-size: 0.5em;
        display: none;
      }
    }
  }
`;

const Navmenu = styled(motion.div)`
  background-color: #c06c84;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  z-index: 5001;
  font-size: 5rem;
  transition: 0.5s ease-in-out;
  ul {
    list-style: none;
    li {
      padding-left: 1.6rem;
      position: relative;
      color: #f67280;
    }
  }
`;

const Contact = styled(motion.div)`
  padding: 1rem;
  width: 100vw;
  color: #c06c84;
  background-color: #f67280;
  h2 {
    font-size: 50%;
    margin: 0;
  }
  p {
    color: #c06c84;
    margin: 0;
    padding: 0;
  }
  button {
    border: none;
    margin: 2rem 0;
    background-color: #c06c84;
    /* padding-left: 0; */
  }
`;

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Navbar>
        <h1>
          <NavLink id="logo" to="/">
            <img src={logo}/>
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink className="styled-link" to="/">
              About me
            </NavLink>
          </li>
          <li>
            <NavLink className="styled-link" to="/projects">
              My Projects
            </NavLink>
          </li>
        </ul>
      </Navbar>
      {/* Mobile responsive sidebar opens up on mobile devices */}
      <NavbarMobile>
        <h1>
          <NavLink id="logo" to="/">
            Capture
          </NavLink>
        </h1>
        <div className="box" onClick={() => setIsClicked(!isClicked)}>
          <div className={`btn ${isClicked ? "active" : "not-active"}`}>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
          </div>
        </div>
      </NavbarMobile>
      {isClicked ? (
        <Navmenu
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <ul>
            <li>
              <NavLink
                className="menu-link"
                to="/"
                onClick={() => setIsClicked(!isClicked)}
                style={(isClicked) => ({
                  color: isClicked && path === "/" ? "#f67280" : "#eee",
                })}
              >
                <img src={home}/>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu-link"
                to="/projects"
                onClick={() => setIsClicked(!isClicked)}
                style={(isClicked) => ({
                  color: isClicked && path === "/projects" ? "#f67280" : "#eee",
                })}
              >
                <img src={projects}/>
              </NavLink>
            </li>
          </ul>
        </Navmenu>
      ) : (
        ""
      )}
    </>
  );
};

export default Nav;
