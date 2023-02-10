import { useContext } from "react";
import { StepContext } from "../context/taskStepContext";

export const UseStepValues = () => {
  const context = useContext(StepContext);

  if (!context) {
    console.log("Error: useStepValues must be used within a TaskStepProvider");
  }
  return context;
};
