import styled from "styled-components";
import { device } from "../../utils/devices";

const primaryColor = "#471323";
const secondaryColor = "#5b2e48";

export const CustomButton = styled.button`
  background: linear-gradient(to right, ${primaryColor}, ${secondaryColor});
  position: relative;
  font-family: Modernist;
  padding: 0.9375rem 1.25rem 0.9375rem 1.25rem;
  border-radius: 25px;
  border: none;
  color: #ceb992;
  font-weight: 600;
  width: 50%;
  align-self: flex-end;
  cursor: pointer;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 40%;
    margin-right: 20px;
  }
`;
