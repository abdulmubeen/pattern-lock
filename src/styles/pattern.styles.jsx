import styled from "styled-components";
import { device } from "../utils/devices";

export const PatternContainer = styled.div`
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 5px;
  background-color: #ceb992;
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 325px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 300px;
  }
`;

export const Title = styled.h1`
  align-self: center;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    font-size: 25px;
  }
`;
