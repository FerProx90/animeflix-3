import { Link } from "react-router-dom";
import "./styles.css";

const Button = ({
  linkRef,
  text,
  customButton,
  comesFromForm,
  onClickEvent = () => {
    return;
  },
}) => {
  return comesFromForm ? (
    <button className={`button button-${customButton}`} onClick={onClickEvent}>
      {text}
    </button>
  ) : (
    <Link className={`button button-${customButton}`} to={`${linkRef}`}>
      {text}
    </Link>
  );
};

export default Button;
