import { HeaderContainer } from "./styles";

type HeaderProps = {
  mainText: string;
  introduceText: string;
};

export const Header = ({ mainText, introduceText }: HeaderProps) => {
  return (
    <HeaderContainer>
      <h1>{mainText}</h1>
      <p>{introduceText}</p>
    </HeaderContainer>
  );
};
