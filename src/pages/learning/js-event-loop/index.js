import Layout from 'components/Layout';
import Link from 'components/Link';
import PropTypes from 'prop-types';

const Quote = ({ children }) => (
  <blockquote className="block pl-2 my-4 italic border-l-2">
    {children}
  </blockquote>
);

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};

const EventLoop = () => (
  <Layout>
    <h1>JS Event Loop</h1>
    <h2>Resources</h2>
    <ul className="list-disc list-inside">
      <li>
        <Link
          href="https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5"
          text="SessionStack: How JavaScript Works, Event Loop"
          underline
        />
      </li>
      <li>
        <Link
          href="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf"
          text="SessionStack: How JavaScript works, Call Stack"
          underline
        />
      </li>
      <li>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
          text="MDN: Concurrency model and the event loop"
          underline
        />
      </li>
      <li>
        <Link
          href="https://medium.com/better-programming/how-does-the-browser-execute-asynchronous-code-3808dff05ca4"
          text="How Does the Browser Execute Asynchronous Code?"
          underline
        />
      </li>
    </ul>
    <section>
      <h2>Quotes</h2>
      <Quote>
        The Event Loop has one simple job —
        to monitor the Call Stack and the Callback Queue.
        If the Call Stack is empty, it will take the first
        event from the queue and will push it to the Call Stack, which effectively runs it.
      </Quote>
      <Quote>
        JavaScript is a single-threaded programming language,
        which means it has a single Call Stack.
        Therefore it can do one thing at a time.
        The Call Stack is a data structure which records basically where in the program we are.
      </Quote>
    </section>
    <section>
      <h2>Notes</h2>
      <ul className="list-disc list-inside">
        <li>
          Function calls form a stack of frames within the Call Stack.
        </li>
        <li>
          The Event Loop watches the Callback Queue and adds
          the frame to the Call Stack to be executed.
        </li>
        <li>
          Returning from a function pops is off the Call Stack.
        </li>
        <li>
          An Embedded iFrame has it's own call stack,
          postMessage is the only way to communicate between the two.
        </li>
      </ul>
    </section>
  </Layout>
);

export default EventLoop;
