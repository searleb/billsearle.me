import { Code } from "components/Code";
import { Layout } from "components/Layout";
import { Link } from "components/Link";

const ModulesSystems = () => (
  <Layout>
    <h1>JS Module Systems</h1>
    <p>
      Systems to be aware of include CommonJS (CJS), ES2015 Modules (ESM),
      Asynchronous Module Definition (AMD) and Universal Module Definition
      (UMD).
    </p>
    <p>
      CommonJS is what started off Node.js and does not lend itself well to the
      browser as it is a synchronous system
    </p>
    <p>It uses the require/exports syntax.</p>
    <Code>const someModule = require('someModule');</Code>
    <Code>
      {`function myFunc() { ... };

exports.myFunc = myFunc;`}
    </Code>

    <p>
      AMD is a spin off from CJS but with an asynchronous module loading system.
      <br />
      Require.js implements AMD which can be used in the browser.
    </p>
    <br />
    <p>
      ESM is a system designed to support synchronous and asynchronous
      operation.
    </p>
    <p>
      It uses the import/export syntax and is widely used for client side code.
    </p>
    <Code>import someModule from 'someModule';</Code>
    <Code>
      {`function myFunc() { ... }

export default myFunc`}
    </Code>

    <h2>Resources</h2>
    <ul className="list-disc list-inside">
      <li>
        <Link
          href="https://auth0.com/blog/javascript-module-systems-showdown/"
          text="Auth0"
          underline
        />
      </li>
      <li>
        <Link
          href="https://code-trotter.com/web/understand-the-different-javascript-modules-formats/"
          text="Code Trotter"
          underline
        />
      </li>
    </ul>
  </Layout>
);

export default ModulesSystems;
