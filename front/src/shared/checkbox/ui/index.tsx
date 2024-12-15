import './styled.css'
import { InputHTMLAttributes } from "react"

export const Checkbox: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      type="checkbox"
      className="custom-checkbox"
    />
  );
};
