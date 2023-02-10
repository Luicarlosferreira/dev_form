import { Button } from "../../components/button";
import { ProfissionalContainer } from "./styles";
import { useState } from "react";
import { UseStepValues } from "../../hooks/useStepReducer";
import { TaskStepState } from "../../context/taskStepContext";
import { useNavigate } from "react-router-dom";

const employmentFreeOccupation = {
  react: "Web FrontEnd Developer - React",
  node: "BackEnd Developer - Node.JS",
  mongo: "BackEnd Developer - MongoDB",
  aws: "Aws Services Developer - AWS",
};

export const ProfissionalStep = () => {
  const [skill1, setSkill1] = useState<boolean>(false);
  const [skill2, setSkill2] = useState<boolean>(false);
  const [skill3, setSkill3] = useState<boolean>(false);
  const [skill4, setSkill4] = useState<boolean>(false);

  const state = UseStepValues();
  const dispatch = UseStepValues();
  const navigate = useNavigate();

  const handleProfissional = (e: React.FormEvent) => {
    e.preventDefault();
    const totalSkills: any = [];
    if (skill1) {
      totalSkills.push(employmentFreeOccupation.react);
    }
    if (skill2) {
      totalSkills.push(employmentFreeOccupation.node);
    }
    if (skill3) {
      totalSkills.push(employmentFreeOccupation.mongo);
    }

    if (skill4) {
      totalSkills.push(employmentFreeOccupation.aws);
    }
    if (totalSkills.length === 0) {
      alert("Fill in at least one of the fields to proceed.");
    }
    const totalMapped =
      totalSkills &&
      totalSkills.map((item: any) => {
        return item;
      });

    dispatch?.dispatch({ type: TaskStepState.STAGE, payload: 2 });
    dispatch?.dispatch({ type: TaskStepState.SKILLS, payload: totalMapped });
    navigate("/finalStep");
  };

  return (
    <ProfissionalContainer>
      <span> - Step 2/3 - </span>
      <div>
        {state?.state.name && (
          <>
            <h1>{state.state.name},</h1>
            <h3>Can You Introduce a Little Of Yourself With Us?</h3>
          </>
        )}
      </div>
      <hr />
      <br />

      <form onSubmit={handleProfissional}>
        <h2>Choose The Options That Match You.</h2>
        <section>
          <div>
            <input
              name="frontend"
              type="checkbox"
              value={skill1}
              onChange={(e) => setSkill1(e.target.checked)}
            />
            <label htmlFor="frontend">{employmentFreeOccupation.react}</label>
          </div>
          <div>
            <input
              name="backend"
              type="checkbox"
              value={skill2}
              onChange={(e) => setSkill2(e.target.checked)}
            />
            <label htmlFor="backend">{employmentFreeOccupation.node}</label>
          </div>
          <div>
            <input
              name="mongo"
              type="checkbox"
              value={skill3}
              onChange={(e) => setSkill3(e.target.checked)}
            />
            <label htmlFor="mongo">{employmentFreeOccupation.mongo}</label>
          </div>
          <div>
            <input
              name="aws"
              type="checkbox"
              value={skill4}
              onChange={(e) => setSkill4(e.target.checked)}
            />
            <label htmlFor="aws">{employmentFreeOccupation.aws}</label>
          </div>
        </section>
        <Button
          btnText="Send"
          disabled={skill1 || skill2 || skill3 || skill4 ? false : true}
        />
      </form>
    </ProfissionalContainer>
  );
};
