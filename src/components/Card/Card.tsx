import { ReactNode } from "react";

interface CardProps {
  theme: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  children: ReactNode;
}

export const Card = ({ theme, children }: CardProps) => (
  <div className="px-2 py-4 w-full sm:w-1/2">
    <div
      style={{ background: theme.primary, color: theme.secondary }}
      className="shadow-xl rounded-xl p-8 transition-colors duration-300"
    >
      {children}
    </div>
  </div>
);
