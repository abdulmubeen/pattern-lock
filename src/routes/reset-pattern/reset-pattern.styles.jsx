import styled from "styled-components";
import { CustomButton } from "../../components/button/button.styles";
import { device } from "../../utils/devices";

export const CancelButton = styled.button`
  background: linear-gradient(to right, #585563, #73937e);
  position: relative;
  font-family: Modernist;
  padding: 0.9375rem 1.25rem 0.9375rem 1.25rem;
  border-radius: 25px;
  border: none;
  color: #ceb992;
  font-weight: 600;
  width: 35%;
  align-self: flex-end;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  ${CustomButton} {
    width: 45%;
  }
`;

export const SubTitle = styled.h3`
  padding: 3px 10px 0px 10px;
  text-align: center;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    font-size: 15px;
  }
`;
