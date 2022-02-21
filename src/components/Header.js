import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../assets/header-img.svg";
const Header = () => {
  return (
    <Wrapper>
      <div className="container header__container">
        <div className="header__left">
          <h1 className="">grow your skills to advance your career path</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <Link to="" className="my-btn my-btn-primary">
            Get Started
          </Link>
        </div>

        <div className="header__right">
          <div className="header__img">
            <img src={img} alt="learnning" className="img" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  height: 70vh;
  margin-bottom: 4rem;
  overflow: hidden;
  /* width: 100vw; */
  .header__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3rem;
    height: 100%;
    h4 {
      margin: 0;
    }
  }

  .header__left {
    a {
      padding: 0.7rem 0.9rem;
    }
  }
  .md__btn {
    display: none;
  }
  .nav__menu {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    /* width: 60%; */
    gap: 3rem;
    .links {
      display: flex;
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
    min-height: 100vh;
    .header__container {
      grid-template-columns: 1fr;
      text-align: center;
      margin-top: 0;
    }
    .header__left {
      a {
        padding: 1.7rem 1.7rem;
      }
    }
  }
  @media (max-width: 1024px) {
    height: 52vh;
    /* gap: 0; */
  }

  @media screen and (max-width: 600px) {
    min-height: 100vh;
    .header__container {
      grid-template-columns: 1fr;
      text-align: center;
      margin-top: 0;
    }
    .header__left {
      a {
        padding: 1.7rem 1.7rem;
      }
    }
  }
`;
export default Header;
