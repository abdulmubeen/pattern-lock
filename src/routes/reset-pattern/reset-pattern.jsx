import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setPatternHash } from "../../store/slices/hashSlice";

import PatternCanvas from "../../components/pattern-canvas/pattern-canvas.component";
import Pattern from "../../utils/pattern-lock";
import { toast } from "react-toastify";

import Button from "../../components/button/button.component";
import {
  PatternContainer,
  ContentWrapper,
  Title,
} from "../../styles/pattern.styles";
const ResetPattern = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [patHtml, setPatHtml] = useState(false);
  useEffect(() => {
    setPatHtml(true);
  }, []);
  useEffect(() => {
    if (patHtml) Pattern("reset");
  }, [patHtml]);
  const patternHash = () => {
    const hash = localStorage.getItem("ResetScreen") !== null;
    if (hash) {
      dispatch(setPatternHash(localStorage.getItem("ResetScreen")));
      toast.success("Pattern set!");
      navigate("/");
    } else {
      toast.error("Set the Pattern to proceed");
    }
  };
  return (
    <>
      <PatternContainer>
        <ContentWrapper>
          <Title>Reset Pattern</Title>
          <PatternCanvas htmlState={patHtml} />
          <Button name={"Reset Pattern"} onClick={() => patternHash()} />
        </ContentWrapper>
      </PatternContainer>
    </>
  );
};

export default ResetPattern;
