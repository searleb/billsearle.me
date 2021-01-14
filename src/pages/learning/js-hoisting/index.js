import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import Code from 'components/Code';
import Link from 'components/Link';

const Quote = ({ children }) => (
  <blockquote className="block pl-2 my-4 italic border-l-2">
    {children}
  </blockquote>
);

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};

const Hoisting = () => (
  <Layout>
    <h1>JS Hoisting</h1>
    <p>
      JS Hoisting refers to the process by which function and
      variable declarations
      are placed into memory before any code is executed.
      <br />
      This allows you to use a them before you it's declared in your code.
    </p>
    <p>
      Only the declarations are hoisted, not the initialization.
    </p>
    <h3>Variables</h3>
    <Code>{
`var num; // declaration
num = 4; // initialization

// declaration and initialization but 
// only var hello = undefined; will be hoisted
var hello = 'world';`
    }
    </Code>
    <p>
      <code>let</code> and <code>const</code> declarations are not hoisted.
      A <code>ReferenceError</code> will be thrown if it's tried to be accessed
      before it's initialized.
    </p>

    <p>
      <code>var</code> is hoisted to the top of it's scope.
      This can be either the global scope or function scope.
    </p>

    <h3>Functions</h3>

    <Code>{
`hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};`
    }
    </Code>
    <p>
      Function declarations are hoisted.
    </p>

    <Code>{
`expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};`
    }
    </Code>
    <p>
      Function expressions are not hoisted.
    </p>

    <h2>Resources</h2>
    <ul className="list-disc list-inside">
      <li>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"
          underline
          text="MDN: Hoisting"
        />
      </li>
      <li>
        <Link
          href="https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript"
          underline
          text="Digital Ocean: Hoisting"
        />
      </li>
    </ul>
  </Layout>
);

export default Hoisting;
