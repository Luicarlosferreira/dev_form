import { SubmitContainer } from "./styles";
import { Link } from "react-router-dom";
import { UseStepValues } from "../../hooks/useStepReducer";
import { TaskStepState } from "../../context/taskStepContext";

type StepProps = {
  setFinalPath: (value: boolean) => void;
  path: boolean;
};

export const SubmitPage = ({ setFinalPath, path }: StepProps) => {
  const dispatch = UseStepValues();
  const state = UseStepValues();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch?.dispatch({
      type: TaskStepState.STAGE,
      payload: 0,
    });
    setFinalPath(false);
    console.log(state?.state);
  };
  return (
    <SubmitContainer>
      <h1>Thank your for sharing your informations. </h1>
      <p>All Informations are confidencial. </p>
      <Link to="/" onClick={handleSubmit}>
        Back
      </Link>
    </SubmitContainer>
  );
};
