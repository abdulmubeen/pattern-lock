import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import PatternCanvas from "../../components/pattern-canvas/pattern-canvas.component";
import Pattern from "../../utils/pattern-lock";
import { toast } from "react-toastify";

import {
  CancelButton,
  ButtonContainer,
  SubTitle,
} from "./reset-pattern.styles";
import Button from "../../components/button/button.component";
import {
  PatternContainer,
  ContentWrapper,
  Title,
} from "../../styles/pattern.styles";
const ResetPattern2 = () => {
  const navigate = useNavigate();
  const { patternHash } = useSelector((state) => state.hash);
  const [patHtml, setPatHtml] = useState(false);
  useEffect(() => {
    setPatHtml(true);
  }, []);
  useEffect(() => {
    if (patHtml) Pattern("reset2");
  }, [patHtml]);
  const cancelHandler = () => {
    navigate("/");
  };
  const checkHash = () => {
    const hash = localStorage.getItem("ResetScreen2") !== null;
    if (hash) {
      if (
        patternHash !== 0 &&
        patternHash === localStorage.getItem("ResetScreen2")
      ) {
        toast.success("Verified! You can now reset your pattern");
        navigate("/reset");
      } else {
        toast.error("Pattern doesn't match");
      }
    } else {
      toast.error("Set the Pattern to proceed");
    }
  };
  return (
    <>
      <PatternContainer>
        <ContentWrapper>
          <Title>Reset Pattern</Title>
          <SubTitle>Enter Existing Pattern to Proceed</SubTitle>
          <PatternCanvas htmlState={patHtml} />
          <ButtonContainer>
            <CancelButton onClick={cancelHandler}>Go Back</CancelButton>
            <Button name={"Verify"} onClick={() => checkHash()} />
          </ButtonContainer>
        </ContentWrapper>
      </PatternContainer>
    </>
  );
};

export default ResetPattern2;
