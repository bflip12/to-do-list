//I, Bobby Filippopoulos, 000338236 verify that this is my work and only my work
import React from "react";
import Styled from "styled-components";

const StyledListButton = Styled.button`
  top: 0px;
  position: relative;
  font: 200 16px/1.5 Helvetica, Verdana, sans-serif;
  width: 65px;
  height: 30px;
  cursor: pointer;
  font-size : 16px;
  font-weight: 300;
  color: black;
  background-color:#E7D8B7;
  border-radius: 1  px;
  border: .8px solid #B8B8B8;
  box-shadow: 0px 0px 1.5px 0px rgba(0,0,0,0.15);

  &:focus{
    outline:0;
  }

  &:hover{
    background-color:#eee4cd;
    border: .5px solid #B8B8B8;
  }

  &:active{
    border: .5px solid #ccc;
    background-color:#E7D8B7;
    box-shadow: 0px 0px 2.3px 0px #B8B8B8;
  }
`;

const InputContainer = Styled.div`
  padding-right: 6px;
`;

const StyledInput = Styled.input`
  margin:0;
  padding: 6.5px 40px;
  box-sizing: border-box;
  outline: none;
  &:focus{
    border: 1.5px solid #94A1C6;
    margin-right:1px;
  }
`;

const StyledWrapper = Styled.div`
display: flex;
flex-direction: column;
align-items: center;;
padding-bottom: 65px;
`;
const StyledForm= Styled.form`

`;

const FormPresentation = ({onSubmit, onChange, term}) => {
  return (
    <StyledWrapper>
      <StyledForm className="App" onSubmit={onSubmit}>
        <InputContainer><StyledInput value={term} onChange={onChange} /></InputContainer>
        <StyledListButton>Add</StyledListButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default FormPresentation;
