import React from "react";
import Styled from "styled-components";

const StyledListItemText = Styled.li`
  font: 200 18px/1.5 Helvetica, Verdana, sans-serif;
  padding: 10px;
  color: #212121;
`;

const StyledListItem = Styled.div`
  border-bottom: 1px solid #ccc;
  &:last-child{
    border: none;
  }
  width: 500px;
  display: inline-block;
`;

const ButtonContainer = Styled.div`
  padding-right: 8px;
`;

const StyledListButton = Styled.button`
  top: 0px;
  position: relative;
  font: 200 15px/1.5 Helvetica, Verdana, sans-serif;
  width: 60px;
  height: 30px;
  cursor: pointer;
  color: black;
  /*-webkit-border-radius: 2px;*/
  /*box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.15);*/
  /*background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #E7D8B7), color-stop(1, #E7D8B7));*/
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
const TextContainer = Styled.div`
  padding-left: 5px;
`;

const ItemPresentation = ({text, onEdit, onDelete}) => (
    <StyledListItem>
      <StyledListItemText>
        <ButtonContainer><StyledListButton onClick={onEdit}>Edit</StyledListButton></ButtonContainer>
        <ButtonContainer><StyledListButton onClick={onDelete}>X</StyledListButton></ButtonContainer>
        <TextContainer>{text}</TextContainer>
      </StyledListItemText>
    </StyledListItem>
);

export default ItemPresentation;
