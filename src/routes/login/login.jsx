import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setIsDisabled } from "../../store/slices/hashSlice";

import PatternCanvas from "../../components/pattern-canvas/pattern-canvas.component";
import Pattern from "../../utils/pattern-lock";
import { destroyPattern } from "../../utils/pattern-lock";
import { toast } from "react-toastify";

import Button from "../../components/button/button.component";
import DropdownMenu from "../../components/dropdown-button/dropdown.component";
import {
  PatternContainer,
  ContentWrapper,
  Title,
} from "../../styles/pattern.styles";
import { FooterWrapper } from "./login.styles";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [patHtml, setPatHtml] = useState(false);
  const [counter, setCounter] = useState(0);
  const { patternHash, isDisabled } = useSelector((state) => state.hash);

  const handleOptionSelect = (option) => {
    if (option === "Reset Password") {
      navigate("/reset1");
    } else if (option === "Forgot Password") {
      navigate("/forgot");
    }
  };

  const options = ["Reset Password", "Forgot Password"];

  useEffect(() => {
    if (isDisabled) {
      setTimeout(() => {
        dispatch(setIsDisabled(false));
        toast.info("You can now login");
      }, 1000 * 30);
    }
  }, [dispatch, isDisabled]);

  useEffect(() => {
    setPatHtml(true);
  }, []);
  useEffect(() => {
    if (!isDisabled) {
      if (patHtml) Pattern("login");
    } else {
      destroyPattern();
    }
  }, [patHtml, isDisabled]);

  const checkPatternHash = () => {
    const hash = localStorage.getItem("LoginScreen") !== null;
    console.log("hey");
    if (hash) {
      if (
        patternHash.length !== 0 &&
        patternHash === localStorage.getItem("LoginScreen")
      ) {
        toast.success("Login Successfull!");
      } else {
        if (counter >= 4) {
          dispatch(setIsDisabled(true));
          toast.error("You have been locked out for 30 seconds!");
        } else {
          let temp = counter + 1;
          setCounter(temp);
          toast.error("You have entered a wrong pattern, Try Again!");
        }
      }
    } else {
      toast.error("Set the Pattern to proceed!");
    }
  };
  return (
    <>
      {}
      <PatternContainer>
        <ContentWrapper>
          <Title>Enter Pattern</Title>
          <PatternCanvas htmlState={patHtml} />
          <FooterWrapper>
            <DropdownMenu options={options} onSelect={handleOptionSelect} />
            {!isDisabled ? (
              <Button name={"Login"} onClick={() => checkPatternHash()} />
            ) : (
              ""
            )}
          </FooterWrapper>
        </ContentWrapper>
      </PatternContainer>
    </>
  );
};

export default Login;
