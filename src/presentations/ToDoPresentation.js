import React from "react";
import ItemPresentation from '../presentations/ItemPresentation';
import Styled from "styled-components";

const StyledUnorderedList = Styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ToDoPresentation = props => (
  <StyledUnorderedList>
    {
      props.items.map((item, index) => <ItemPresentation key={index} text={item} onDelete={() => props.onDelete(index)} onEdit={() => props.onEdit(index)} />)
    }
  </StyledUnorderedList>
);

export default ToDoPresentation;
