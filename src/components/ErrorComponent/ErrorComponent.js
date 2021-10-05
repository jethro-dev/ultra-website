import React from "react";
import {
  ErrorContainer,
  ErrorTitle,
  ErrorParagraph,
} from "./ErrorComponent.styled";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <ErrorContainer>
      <Container style={{ textAlign: "center" }}>
        <ErrorTitle>Oops...</ErrorTitle>
        <ErrorParagraph>This page does not exist!</ErrorParagraph>
        <Link to="/">
          <Button big fontBig>
            Back to Home
          </Button>
        </Link>
      </Container>
    </ErrorContainer>
  );
};

export default ErrorComponent;
