import * as S from "./styles";
import { Button } from "antd";
import { useDispatch } from "react-redux";

function Footer() {
  const dispatch = useDispatch();

  const handleChangeTheme = (theme) => {
    dispatch({
      type: "CHANGE_THEME",
      payload: theme,
    });
  };
  return (
    <S.FooterWrapper>
      Footer
      <div>
        <Button onClick={handleChangeTheme}>Light</Button>
        <Button onClick={handleChangeTheme}>Dark</Button>
      </div>
    </S.FooterWrapper>
  );
}

export default Footer;
