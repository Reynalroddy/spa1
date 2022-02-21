import React from "react";
import styled from "styled-components";
import Accordion from "./Accordion";
import { links } from "../data";
const Faq = () => {
  return (
    <Wrapper>
      <h2 className="title">frequently asked question</h2>
      <div className="container faqs__container">
        {links.map((item, i) => {
          return <Accordion key={i} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--bg-color-2);
  box-shadow: inset 0 0 3rem rgba(0, 0, 0, 0.5);
  margin-top: 20rem;
  transition: var(--transition);
  .faqs__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (max-width: 1024px) {
    margin-top: 0;

    .faqs__container {
      grid-template-columns: 1fr;
    }
  }
`;
export default Faq;
