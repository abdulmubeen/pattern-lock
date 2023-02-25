import styled from "styled-components";
import { CustomButton } from "../../components/button/button.styles";
import { device } from "../../utils/devices";

export const SubText = styled.div`
  text-align: center;
  margin: 0 10px;
`;
export const SubTitle = styled.h3`
  padding: 3px 10px 0px 10px;
  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    font-size: 15px;
  }
`;
export const Description = styled.span`
  padding: 0 10px 10px 10px;
  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    font-size: 11px;
  }
`;
export const QuestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 10px;
`;
export const QuestionLabel = styled.label`
  margin-top: 50px;
  font-weight: bold;
  font-size: 20px;
  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    font-size: 17px;
  }
`;
export const QuestionInput = styled.input`
  margin-top: 20px;
  border: none;
  font-family: Modernist;
  font-size: 15px;
  padding: 10px 10px;
  border-radius: 7px;
  color: #5b2e48;

  :focus {
    outline-color: #585563;
  }

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    font-size: 12px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;

  ${CustomButton} {
    width: 40%;
  }
`;

export const CancelButton = styled.button`
  background: linear-gradient(to right, #585563, #73937e);
  position: relative;
  font-family: Modernist;
  padding: 0.9375rem 1.25rem 0.9375rem 1.25rem;
  border-radius: 25px;
  border: none;
  color: #ceb992;
  font-weight: 600;
  width: 40%;
  align-self: flex-end;
  cursor: pointer;
`;
