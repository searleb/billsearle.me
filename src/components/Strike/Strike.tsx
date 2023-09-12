import { ReactNode } from "react";

interface StrikeProps {
  children: ReactNode;
  strike?: boolean;
}

export const Strike = ({ children, strike = true }: StrikeProps) =>
  strike ? (
    <span className="line-through opacity-60">{children}</span>
  ) : (
    children
  );
