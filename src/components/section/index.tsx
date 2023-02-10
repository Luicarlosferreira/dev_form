import { SectionContainer } from "./styles";
import { FaUserAlt, FaBookOpen, FaMailBulk } from "react-icons/all";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UseStepValues } from "../../hooks/useStepReducer";

export const SectionSteps = () => {
  const state = UseStepValues();
  return (
    <SectionContainer>
      <div className="firstContainer">
        <div>
          <h2>Personal</h2>
          <p>Introduce Yourself</p>
        </div>
        <Link
          style={
            state?.state.stage === 0 ||
            state?.state.stage === 1 ||
            state?.state.stage === 2
              ? { cursor: "pointer", background: "#646cffaa" }
              : { cursor: "not-allowed" }
          }
          to={
            state?.state.stage === 1 ||
            state?.state.stage === 2 ||
            state?.state.stage === 3
              ? "/stepOne"
              : "#"
          }
        >
          <FaUserAlt />
        </Link>
      </div>
      <div className="secondContainer">
        <div>
          <h2>Profissional</h2>
          <p>Inform Your Skills</p>
        </div>
        <Link
          style={
            state?.state.stage === 1 || state?.state.stage === 2
              ? { cursor: "pointer", background: "#646cffaa" }
              : { cursor: "not-allowed" }
          }
          to={
            state?.state.stage === 1 || state?.state.stage === 2
              ? "/stepTwo"
              : "#"
          }
        >
          <FaBookOpen />
        </Link>
      </div>
      <div className="thirdContainer">
        <div>
          <h2>Contact</h2>
          <p>How We Can Find You?</p>
        </div>
        <Link
          style={
            state?.state.stage === 2
              ? { cursor: "pointer", background: "#646cffaa" }
              : { cursor: "not-allowed" }
          }
          to={state?.state.stage === 2 ? "/finalStep" : "#"}
        >
          <FaMailBulk />
        </Link>
      </div>
    </SectionContainer>
  );
};
