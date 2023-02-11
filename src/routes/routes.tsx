import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "../components/header";
import { SectionSteps } from "../components/section";
import { ContactStep } from "../pages/contact";
import { PersonalStep } from "../pages/personal";
import { ProfissionalStep } from "../pages/profissional";
import { useState } from "react";
import { UseStepValues } from "../hooks/useStepReducer";
import { NotFoundPage } from "../pages/notFound";
import { SubmitPage } from "../pages/submit";
export const RoutesPath = () => {
  const [stepPath, setStepPath] = useState(false);
  const state = UseStepValues();

  const handleStepPath = () => {
    setStepPath(!stepPath);
  };
  return (
    <BrowserRouter>
      {stepPath === false && (
        <>
          <Header
            mainText="Developer Register"
            introduceText="Do your register in our list of jobs instantly and find the best company to hire you."
          />
          <Link className="Link" onClick={handleStepPath} to="/stepOne">
            Start
          </Link>
        </>
      )}
      {state?.state.stage === 3 && stepPath === true ? (
        <SubmitPage setFinalPath={setStepPath} path={stepPath} />
      ) : null}

      {stepPath && state?.state.stage !== 3 && (
        <div className="SectionRoutes">
          <SectionSteps />
          <Routes>
            <Route path="/stepOne" element={<PersonalStep />} />
            <Route
              path="/stepTwo"
              element={
                state?.state.stage === 1 || state?.state.stage === 2 ? (
                  <ProfissionalStep />
                ) : (
                  <NotFoundPage />
                )
              }
            />
            <Route
              path="/finalStep"
              element={
                state?.state.stage === 2 ? <ContactStep /> : <NotFoundPage />
              }
            />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
};
