import styled from "styled-components";

export const ErrorContainer = styled.div`
  color: #fff;
  padding: 160px 0;
  background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
  display: flex;
`;
export const ErrorTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 100px;
`;
export const ErrorParagraph = styled.p`
  font-size: 2rem;
  margin-bottom: 100px;
`;
