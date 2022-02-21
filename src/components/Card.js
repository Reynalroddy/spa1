import React from "react";
import styled from "styled-components";
const Card = ({ icon, p, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <h5>{text}</h5>
      <p>{p}</p>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background: var(--bg-color-3);
  border-radius: 2rem;
  transition: var(--transition);
  padding: 2rem;
  cursor: pointer;
  &:hover {
    box-shadow: var(--shadow-4);
  }
  &:nth-child(2) {
    span {
      background: var(--red-dark);
    }
  }
  &:nth-child(3) {
    span {
      background: var(--primary-700);
    }
  }

  &:nth-child(5) {
    span {
      background: var(--color-warning);
    }
  }

  span {
    background: var(--color-primary);
    padding: 0.5rem;
    border-radius: 0.9rem;

    svg {
      font-size: 1.2rem;
      /* margin-top: 0.5rem; */
    }
  }
  h5 {
    margin-top: 1.5rem;
  }
`;

export default Card;
