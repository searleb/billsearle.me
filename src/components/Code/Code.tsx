import { ReactNode } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import cssLang from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("css", cssLang);

interface CodeProps {
  css?: boolean;
  children: ReactNode;
}

export const Code = ({ css = false, children }: CodeProps) => (
  <section className="my-4 shadow-sm">
    <SyntaxHighlighter
      language={css ? "css" : "jsx"}
      style={atomOneDark}
      showLineNumbers
    >
      {children}
    </SyntaxHighlighter>
  </section>
);
