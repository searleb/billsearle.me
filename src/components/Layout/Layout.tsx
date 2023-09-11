import { Container } from "components/Container";
import { ReactNode } from "react";

interface Layout {
  children: ReactNode;
}

export const Layout = ({ children }) => <Container>{children}</Container>;
