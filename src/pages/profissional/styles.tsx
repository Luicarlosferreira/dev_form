import styled from "styled-components";

export const ProfissionalContainer = styled.div`
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
  form section {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    width: 100%;

    padding: 10px 0;
  }
  form section div {
    display: flex;
    gap: 10px;
  }
  form div input {
    cursor: pointer;
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

  @media (max-width: 350px) {
    color: white;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    gap: 5px;
    padding: 1em;
    transition: all 0.1s linear;
    animation: FadeIn 0.1s linear;
    width: 100%;
    height: 100%;
    form {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      gap: 50px;
    }
    form div label {
      font-size: 12px;
    }
    form h2 {
      font-size: 1.5em;
    }
  }
`;
