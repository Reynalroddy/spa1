import React from "react";
import styled from "styled-components";
import img1 from "../assets/course-1.jpg";
import img2 from "../assets/course-2.jpg";
import img3 from "../assets/course-3.jpg";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <Wrapper>
      <h2 className="title">our popular courses</h2>
      <div className="container course__container">
        <article className="course">
          <div className="course__image">
            <img src={img1} className="img" alt="course" />
          </div>
          <div className="course__info">
            <h4>course 1</h4>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
            <Link to="" className="my-btn my-btn-primary">
              Learn More
            </Link>
          </div>
        </article>

        <article className="course">
          <div className="course__image">
            <img src={img2} className="img" alt="course" />
          </div>
          <div className="course__info">
            <h4>course 2</h4>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
            <Link to="" className="my-btn my-btn-primary">
              Learn More
            </Link>
          </div>
        </article>

        <article className="course">
          <div className="course__image">
            <img src={img3} className="img" alt="course" />
          </div>
          <div className="course__info">
            <h4>course 3</h4>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
            <Link to="" className="my-btn my-btn-primary">
              Learn More
            </Link>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background: var(--bg-color-2); */
  height: 29rem;
  margin-top: 15rem;
  .course__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* align-items: center; */
    gap: 2rem;
  }
  a {
    padding: 0.7rem 0.9rem;
  }
  .course__info {
    padding: 2rem;
  }
  article {
    text-align: center;
    background: var(--bg-color-2);
    border: 1px solid transparent;
    transition: var(--transition);
    &:hover {
      background: transparent;
      border-color: var(--color-primary);
    }
  }

  @media (max-width: 1024px) {
    margin-top: 0;
    height: fit-content;
    .course__container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    .course__container {
      grid-template-columns: 1fr;
    }
  }
`;
export default Courses;
