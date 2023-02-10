import styled from "styled-components";

export const ContactContainer = styled.div`
  color: white;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  gap: 15px;
  padding: 2.5em;
  transition: all 0.1s linear;
  width: 100%;
  height: 80vh;
  animation: FadeIn 0.1s linear;
  hr {
    width: 100%;
    height: 2px;
  }
  form {
    display: flex;
    flex-flow: column;
    gap: 20px;
  }
  form div {
    display: flex;
    flex-flow: column;
    font-size: 1.2em;
    gap: 10px;
  }
  form div input {
    padding: 10px;
    outline: none;
    width: 50%;
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
    form div input {
      padding: 10px;
      outline: none;
      width: 100%;
      border: 2px solid transparent;
      transition: all 0.1s linear;
      border-radius: 4px;
    }
  }

  @media (max-width: 660px) {
    color: white;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    gap: 5px;
    padding: 2.5em;
    transition: all 0.1s linear;
    width: 100%;
    height: 100%;
    animation: FadeIn 0.1s linear;
    p {
      font-size: 0.8em;
    }
  }
  @media (max-width: 350px) {
    color: white;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    gap: 5px;
    padding: 1em;
    transition: all 0.1s linear;
    width: 100%;
    height: 100%;
    animation: FadeIn 0.1s linear;

    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 10px;
    }
  }
`;
