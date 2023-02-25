import { CustomButton } from "./button.styles";

const Button = ({ name, ...otherProps }) => {
  return <CustomButton {...otherProps}>{name}</CustomButton>;
};

export default Button;
