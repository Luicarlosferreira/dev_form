import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { UseStepValues } from "../../hooks/useStepReducer";
import { TaskStepState } from "../../context/taskStepContext";
import { useNavigate } from "react-router-dom";

import { PersonalContainer } from "./styles";

export const PersonalStep = () => {
  const state = UseStepValues();
  const dispatch = UseStepValues();
  const navigate = useNavigate();

  const [name, setName] = useState<String | any>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (name.length < 10) {
        alert("Please, insert your full name.");
      } else {
        setName("");
        dispatch?.dispatch({ type: TaskStepState.STAGE, payload: 1 });
        dispatch?.dispatch({ type: TaskStepState.SET_NAME, payload: name });
        navigate("/stepTwo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PersonalContainer>
      <span> - Step 1/3 - </span>
      <h1>We Should Start With Your Name</h1>
      <p>Please, Fill The Field With Your Full Name.</p>
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Full Name</label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Button btnText="Register" disabled={name === "" ? true : false} />
      </form>
    </PersonalContainer>
  );
};
