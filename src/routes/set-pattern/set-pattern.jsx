import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import PatternCanvas from "../../components/pattern-canvas/pattern-canvas.component";
import Pattern from "../../utils/pattern-lock";
import { setPatternSet } from "../../store/slices/patternSlice";
import { toast } from "react-toastify";

import Button from "../../components/button/button.component";
import {
  PatternContainer,
  ContentWrapper,
  Title,
} from "../../styles/pattern.styles";

const SetPattern = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [patHtml, setPatHtml] = useState(false);
  useEffect(() => {
    setPatHtml(true);
  }, []);
  useEffect(() => {
    if (patHtml) Pattern("set");
  }, [patHtml]);
  const patternHash = () => {
    const hash = localStorage.getItem("SetScreen") !== null;
    if (hash) {
      dispatch(setPatternSet(localStorage.getItem("SetScreen")));
      toast.success("Pattern set!");
      navigate("/confirm");
    } else {
      toast.error("Set the Pattern to proceed");
    }
  };
  return (
    <>
      <PatternContainer>
        <ContentWrapper>
          <Title>Set Pattern</Title>
          <PatternCanvas htmlState={patHtml} />
          <Button name={"Set Pattern"} onClick={() => patternHash()} />
        </ContentWrapper>
      </PatternContainer>
    </>
  );
};

export default SetPattern;
