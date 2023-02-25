import { useNavigate } from "react-router";
import {
  PatternContainer,
  ContentWrapper,
  Title,
} from "../../styles/pattern.styles";
import {
  SubTitle,
  Description,
  SubText,
  QuestionContainer,
  QuestionInput,
  QuestionLabel,
  ButtonContainer,
  CancelButton,
} from "./forgot-pattern.styles";
import Button from "../../components/button/button.component";
import { toast } from "react-toastify";

const ForgotPattern = () => {
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("/");
  };
  const buttonHandler = () => {
    const userAnswer = document.getElementById("answer").value;
    if (userAnswer.length) {
      if (userAnswer === "4050") {
        toast.success("Correct Answer!");
        navigate("/reset");
      } else {
        toast.error("Wrong Answer");
      }
    } else {
      toast.error("Invalid Input");
    }
  };
  return (
    <PatternContainer>
      <ContentWrapper>
        <Title>Forgot Pattern?</Title>
        <SubText>
          <SubTitle>Don't Worry, We got you!</SubTitle>
          <Description>Solve the question to reset your pattern.</Description>
        </SubText>
        <QuestionContainer>
          <QuestionLabel>What is "40"+"50"?</QuestionLabel>
          <QuestionInput id="answer" placeholder="Enter your answer" />
        </QuestionContainer>
        <ButtonContainer>
          <CancelButton onClick={cancelHandler}>Go Back</CancelButton>
          <Button name="Submit" onClick={buttonHandler} />
        </ButtonContainer>
      </ContentWrapper>
    </PatternContainer>
  );
};

export default ForgotPattern;
