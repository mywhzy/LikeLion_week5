import React from "react";
import styled from 'styled-components';

const TitleBox = styled.div` 
  height: 90px;
  text-align: center;
  width: 604px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid rgb(149, 178, 247);
  background-color: rgb(192, 221, 251);
  color: rgb(83, 157, 247);
  box-shadow:  1px 1px 3px 1px #6293f3;`;

const TitleText = styled.h3`
  font-size: 35px;
  font-style: italic;
  line-height:20px;
  &:hover{
    color: rgba(121, 158, 254, 0.831);
  }

  &:hover::after{
    margin-left:15px;
    content:'#해보자고';
    font-size: 30px;
    color: rgba(84, 141, 254, 0.79);
    text-decoration:underline;
  }
  `;

function Title({title}){

  return(
    <TitleBox>
      <TitleText>{title}</TitleText>
    </TitleBox>
  );
}

export default Title;
