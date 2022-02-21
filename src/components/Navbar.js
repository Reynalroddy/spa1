import React, { useState } from "react";
import styled from "styled-components";

import { links } from "../data";
import { Link } from "react-router-dom";
import { BiMenuAltRight, BiX } from "react-icons/bi";
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const changeClr = () => {
    if (window.scrollY >= 72) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  const showNavz = () => {
    setShowNav(!showNav);
  };
  window.addEventListener("scroll", changeClr);
  return (
    <Wrapper navState={navState} showNav={showNav}>
      <div className="container nav__container">
        {/* logo */}

        <Link to="/" className="">
          <h4>REYNAL</h4>
        </Link>

        <ul className="nav__menu">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <Link to={url} key={id} className="links">
                <li>{text}</li>
              </Link>
            );
          })}
        </ul>
        <div className="md__btn">
          <BiMenuAltRight className="open" onClick={showNavz} />

          <BiX className="close" onClick={showNavz} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: var(--nav-height);
  transition: var(--transition);
  background: ${(props) => (props.navState ? "#6c63ff" : "transparent")};
  position: sticky;
  top: 0;
  z-index: 11;

  .nav__container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      margin: 0;
    }
  }

  .md__btn {
    display: none;
  }
  .nav__menu {
    display: flex;
    align-items: center;
    transition: var(--transition);
    /* justify-content: space-between; */
    /* width: 60%; */
    gap: 3rem;
    .links {
      display: flex;
      cursor: pointer;
      li {
        font-size: 0.9rem;
        transition: var(--transition);
        text-transform: capitalize;
        font-weight: bold;
        &:hover {
          color: var(--bg-color-2);
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .nav__menu {
      right: 3%;
    }
  }
  @media (max-width: 1024px) {
    @keyframes animeNav {
      0% {
        transform: rotateZ(-90deg);
      }
      100% {
        transform: rotateZ(0);
        opacity: 1;
      }
    }
    .md__btn {
      display: inline-block;
      svg {
        font-size: 2.5rem;
        color: var(--white);
        cursor: pointer;
      }
      .close {
        display: ${(props) => (props.showNav ? "inline-block" : "none")};
      }
      .open {
        display: ${(props) => (props.showNav ? "none" : "inline-block")};
      }
    }

    .nav__menu {
      position: fixed;
      right: 5%;
      top: 4.5rem;
      height: fit-content;
      width: 18rem;
      flex-direction: column;
      gap: 0;
      transition: var(--transition);
      display: ${(props) => (props.showNav ? "flex" : "none")};
      .links {
        width: 100%;
        height: 5.8rem;
        animation: animeNav 1s linear forwards;
        transform-origin: top right;
        opacity: 0;
        &:nth-child(2) {
          animation-delay: 2s;
        }
        &:nth-child(3) {
          animation-delay: 3s;
        }
        &:nth-child(4) {
          animation-delay: 4s;
        }
        &:nth-child(5) {
          animation-delay: 5s;
        }
        li {
          background: var(--color-primary);
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          &:hover {
            background: var(--bg-color-1);
            color: var(--white);
          }
        }
      }
    }
  }
`;
export default Navbar;
