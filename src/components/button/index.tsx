import { ButtonContainer } from "./styles";

type BtnProps = {
  btnText: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({ btnText, disabled, onClick }: BtnProps) => {
  return (
    <ButtonContainer disabled={disabled} onClick={onClick}>
      {btnText}
    </ButtonContainer>
  );
};
