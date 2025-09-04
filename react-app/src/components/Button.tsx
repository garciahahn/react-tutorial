import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  id: string;
  color?: "primary" | "secondary" | "danger";
  onClickButton: (id: string, event: React.MouseEvent) => void;
}

const Button = ({
  children,
  id,
  color = "primary",
  onClickButton,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={(e) => onClickButton(id, e)}
    >
      {children}
    </button>
  );
};

export default Button;
