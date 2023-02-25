import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import PatternCanvas from "../../components/pattern-canvas/pattern-canvas.component";
import Pattern from "../../utils/pattern-lock";
import { toast } from "react-toastify";
import { setPatternHash } from "../../store/slices/hashSlice";

import Button from "../../components/button/button.component";
import {
  PatternContainer,
  ContentWrapper,
  Title,
} from "../../styles/pattern.styles";

const ConfirmPattern = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [patHtml, setPatHtml] = useState(false);
  const prePattern = useSelector((state) => state.pattern.patternSet);
  useEffect(() => {
    setPatHtml(true);
  }, []);
  useEffect(() => {
    if (patHtml) Pattern("confirm");
  }, [patHtml]);
  const checkHash = () => {
    const hash = localStorage.getItem("ConfirmScreen") !== null;
    if (hash) {
      if (
        prePattern.length !== 0 &&
        prePattern === localStorage.getItem("ConfirmScreen")
      ) {
        dispatch(setPatternHash(localStorage.getItem("ConfirmScreen")));
        toast.success("Pattern Verified!");
        navigate("/");
      } else {
        toast.error("Pattern doesn't match");
      }
    } else {
      toast.error("Set the Pattern to Proceed");
    }
  };
  return (
    <>
      <PatternContainer>
        <ContentWrapper>
          <Title>Confirm Pattern</Title>
          <PatternCanvas htmlState={patHtml} />
          <Button name={"Verify"} onClick={() => checkHash()} />
        </ContentWrapper>
      </PatternContainer>
    </>
  );
};

export default ConfirmPattern;
