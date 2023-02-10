import styled from "styled-components";

export const SectionContainer = styled.div`
  color: green;
  width: 100%;
  height: 80vh;
  padding: 2em;
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  gap: 40px;

  .firstContainer,
  .secondContainer,
  .thirdContainer {
    display: flex;
    gap: 40px;
    align-items: center;
    cursor: pointer;
    width: 400px;
  }

  .firstContainer div,
  .secondContainer div,
  .thirdContainer div {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    gap: 5px;
    width: 100%;
  }
  .firstContainer div p,
  .secondContainer div p,
  .thirdContainer div p {
    color: gray;
  }
  .firstContainer div h2,
  .secondContainer div h2,
  .thirdContainer div h2 {
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
    background-color: #24242481;
    padding: 15px;
    border-radius: 50%;
    transition: all 0.2s linear;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a:hover {
    background-color: black;
  }

  a svg {
    width: 30px;
    height: 25px;
    color: #e7e7e7;
    transition: all 0.2s linear;
  }
  a svg:hover {
    color: white;
  }

  @media (max-width: 970px) {
    .firstContainer,
    .secondContainer,
    .thirdContainer {
      display: flex;
      gap: 40px;
      align-items: center;
      cursor: pointer;
      width: 100%;
    }
  }

  @media (max-width: 660px) {
    color: green;
    width: 100%;
    height: 25%;
    padding: 2em;
    display: flex;
    align-items: flex-end;
    flex-flow: row;
    gap: 2px;
  }
  .firstContainer,
  .secondContainer,
  .thirdContainer {
    display: flex;
    flex-flow: column-reverse;
    gap: 10px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
  }
  .firstContainer div,
  .secondContainer div,
  .thirdContainer div {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 5px;
    width: 100%;
    text-align: center;
  }

  .firstContainer div p,
  .secondContainer div p,
  .thirdContainer div p {
    color: gray;
    font-size: 12px;
  }

  @media (max-width: 450px) {
    color: green;
    width: 100%;
    height: 25%;
    padding: 0;
    display: flex;
    align-items: flex-end;
    flex-flow: row;
    gap: 2px;

    .firstContainer div,
    .secondContainer div,
    .thirdContainer div {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 5px;
      width: 100%;
      text-align: center;
    }

    .firstContainer div p,
    .secondContainer div p,
    .thirdContainer div p {
      color: gray;
      font-size: 10px;
    }
    .firstContainer div h2,
    .secondContainer div h2,
    .thirdContainer div h2 {
      font-size: 1.2em;
    }
    a svg {
      width: 26px;
      height: 21px;
      color: #e7e7e7;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: 310px) {
    color: green;
    width: 100%;
    height: 25%;
    padding: 0;
    display: flex;
    align-items: flex-end;
    flex-flow: row;
    gap: 2px;

    .firstContainer div,
    .secondContainer div,
    .thirdContainer div {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 5px;
      width: 100%;
      text-align: center;
    }

    .firstContainer div p,
    .secondContainer div p,
    .thirdContainer div p {
      color: gray;
      font-size: 7px;
    }
    .firstContainer div h2,
    .secondContainer div h2,
    .thirdContainer div h2 {
      font-size: 1em;
    }
    a svg {
      width: 25px;
      height: 20px;
      color: #e7e7e7;
      transition: all 0.2s linear;
    }
  }
  @media (max-width: 270px) {
    a svg {
      width: 20px;
      height: 15px;
      color: #e7e7e7;
      transition: all 0.2s linear;
    }
  }
`;
