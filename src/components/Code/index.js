import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import cssLang from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('css', cssLang);

const Code = ({ css, children }) => (
  <section className="my-4 shadow-sm">
    <SyntaxHighlighter
      language={css ? 'css' : 'jsx'}
      style={atomOneDark}
      showLineNumbers
    >
      {`${children}`}
    </SyntaxHighlighter>
  </section>
);

Code.propTypes = {
  css: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Code.defaultProps = {
  css: false,
};

export default Code;
