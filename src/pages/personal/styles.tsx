import styled from "styled-components";

export const PersonalContainer = styled.div`
  color: white;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  gap: 15px;
  padding: 2.5em;
  transition: all 0.1s linear;
  animation: FadeIn 0.1s linear;
  width: 100%;
  height: 80vh;

  hr {
    width: 100%;
    height: 2px;
  }

  form {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: 50px;
  }
  form div {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: 10px;
    width: 50%;
  }
  form div input {
    padding: 10px;
    outline: none;
    width: 100%;
    border: 2px solid transparent;
    transition: all 0.1s linear;
    border-radius: 4px;
  }
  form div input:focus {
    border: 2px solid #2196f3;
  }

  @keyframes FadeIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 970px) {
    form div {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      gap: 10px;
      width: 100%;
    }
  }
  @media (max-width: 460px) {
    h1 {
      font-size: 1.5em;
    }
  }
  @media (max-width: 350px) {
    h1 {
      font-size: 1.5em;
    }
    color: white;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    gap: 15px;
    padding: 1em;
    transition: all 0.1s linear;
    animation: FadeIn 0.1s linear;
    width: 100%;
    height: 80vh;
  }
`;
