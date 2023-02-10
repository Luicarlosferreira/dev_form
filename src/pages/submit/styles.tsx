import styled from "styled-components";

export const SubmitContainer = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  border-radius: 2px;

  a {
    background-color: #213547;
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 3px;
    transition: all 0.1s linear;
  }
  a:hover {
    background-color: #15212c;
  }

  @media (max-width: 508px) {
    background-color: white;
    padding: 15px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    border-radius: 2px;

    h1 {
      font-size: 25px;
    }
  }
`;
