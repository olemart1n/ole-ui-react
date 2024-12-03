import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button className="bg-red-700 border">{children}</button>;
};

export { type ButtonProps, Button };
