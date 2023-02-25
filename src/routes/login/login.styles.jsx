import styled from "styled-components";
import { CustomButton } from "../../components/button/button.styles";
import { device } from "../../utils/devices";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 10px 10px 10px;

  ${CustomButton} {
    width: 40%;
  }

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 300px;
  }
`;
