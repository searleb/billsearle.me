import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className="container max-w-4xl px-8 my-12 ml-0 md:my-16 lg:ml-20 xl:ml-40">
    {children}
  </div>
);
