import { ContactContainer } from "./styles";
import { Button } from "../../components/button";
import { useState } from "react";
import { UseStepValues } from "../../hooks/useStepReducer";
import { TaskStepState } from "../../context/taskStepContext";
import { useNavigate } from "react-router-dom";

const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

export const ContactStep = () => {
  const navigate = useNavigate();

  const dispatch = UseStepValues();
  const [email, setEmail] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validEmail.test(email)) {
      setEmail("");
      dispatch?.dispatch({ type: TaskStepState.SET_EMAIL, payload: email });
      dispatch?.dispatch({ type: TaskStepState.STAGE, payload: 3 });
      navigate("/submit");
    } else alert("Wrong format email");
  };

  return (
    <ContactContainer>
      <span> - Step 3/3 - </span>
      <h1>Amazing!</h1>
      <p>Where We and Our Business partners Can Find You?</p>
      <p>Please, fill the field with your E-mail.</p>
      <hr />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">E-mail:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            required
          />
        </div>
        <Button btnText="Send" />
      </form>
    </ContactContainer>
  );
};
