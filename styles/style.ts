import styled from "styled-components";
import { SubHeadingProps } from "../shared/interfaces/interfaces";
import { theme } from "./theme";

export const Heading = styled.h1`
  :hover {
    color: ${theme.blue};
    font-family: cursive;
  }
`;
export const SubHeading = styled.h3<SubHeadingProps>`
  cursor: ${(props) => props.cursor ? props.cursor : ""};
  color: ${theme.blue};
  font-size: 20px;
  :hover {
    font-family: cursive;
    color: ${theme.navyBlue};
  }
`;

export const Card = styled.div`
  margin: 20px 30%;
  background: ${theme.cream};
  // border: 2px solid ${theme.navyBlue};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 4px 4px ${theme.cream};
  padding: 20px;
  :hover {
    box-shadow: 4px 4px 8px 8px ${theme.cream};
  }
`;
export const InputContainer = styled.div`
`

export const Input = styled.input`
  margin: 10px;
  padding: 15px 25px;
  font-size: 18px;
  border-radius: 10px;
  outline: none;
  border: none;
  width: 350px;
  color: ${theme.black};
  background: ${theme.lightSilver};
  border: 2px solid transparent;
  :focus {
    border: 2px solid ${theme.blue};
  }
`;

export const PrimaryButton = styled.button`
  cursor: pointer;
  margin: 30px 0px;
  padding: 15px 25px;
  width: 200px;
  font-size: 18px;
  border: 2px solid ${theme.lightSilver};
  border-radius: 10px; 
  :hover {
    border: 2px solid transparent;
    background: ${theme.navyBlue}; 
    box-shadow: 1px 1px 2px 2px ${theme.navyBlue};
  }
`