import { Action } from "@remix-run/router";
import { createContext, useReducer, ReactNode } from "react";

//types

type InitialTypes = {
  stage: number;
  name: string;
  skills: [];
  email: string;
};

type ActionProps = {
  type: TaskStepState;
  payload: any;
};

type ProviderProps = {
  children: ReactNode;
};
type ContextTypes = {
  state: InitialTypes;
  dispatch: (action: ActionProps) => void;
};
//context
export const StepContext = createContext<ContextTypes | undefined>(undefined);

//enum
export enum TaskStepState {
  STAGE,
  SET_NAME,
  SKILLS,
  SET_EMAIL,
}

//initialValuesReducer
const INITIAL: InitialTypes = {
  stage: 0,
  name: "",
  skills: [],
  email: "",
};

//reducer
const ReducerValues = (state: InitialTypes, action: ActionProps) => {
  switch (action.type) {
    case TaskStepState.STAGE:
      return {
        ...state,
        stage: action.payload,
      };

    case TaskStepState.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case TaskStepState.SKILLS:
      return {
        ...state,
        skills: action.payload,
      };
    case TaskStepState.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

//provider
export const StepProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(ReducerValues, INITIAL);
  const values = { state, dispatch };
  return <StepContext.Provider value={values}>{children}</StepContext.Provider>;
};
