import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "./Card";
import { categories } from "../data";

const Categories = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="categories__container">
          <div className="categories__left">
            <h3>categories</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <Link to="" className="my-btn my-btn-primary">
              Learn More
            </Link>
          </div>

          <div className="categories__right">
            {categories.map((item) => {
              const { icon, text, p } = item;
              return <Card key={item.id} icon={icon} p={p} text={text} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--bg-color-2);
  height: 35rem;
  .categories__container {
    display: grid;
    grid-template-columns: 40% 60%;
    /* align-items: center; */
    gap: 3rem;
  }
  a {
    padding: 0.7rem 0.9rem;
  }
  .categories__right {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }

  @media (max-width: 1024px) {
    height: fit-content;
    /* gap: 0; */
    .categories__container {
      grid-template-columns: 1fr;
    }
    p {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    .categories__right {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export default Categories;
