import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";
const Accordion = () => {
  const [acc, setAcc] = useState(false);
  const acct = useRef(null);

  return (
    <Wrapper>
      <div className="icon" onClick={() => setAcc(!acc)}>
        {acc ? <BiMinus></BiMinus> : <BiPlus></BiPlus>}
      </div>

      <div className="question" ref={acct}>
        <h4 onClick={() => setAcc(!acc)}>Are you okay?</h4>
        {acc && (
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy.
          </p>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background: var(--color-primary);
  height: fit-content;
  padding: 2rem;
  display: flex;
  gap: 1.4rem;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
  h4 {
    font-size: 1rem;
    margin: 0;
  }
  .icon {
    align-self: flex-start;
    font-size: 1.2rem;
  }
`;
export default Accordion;
