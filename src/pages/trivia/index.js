import Layout from "../../components/Layout";
import { Link } from "../../components/Link";
import PageHead from "../../components/PageHead";
import { meta } from "../../page-config";

const Index = () => (
  <Layout>
    <PageHead meta={meta.trivia} />
    <article>
      <h1 className="mb-6">Trivia!</h1>
      <p>
        This project came to being due to Covid-19{" "}
        <span aria-label="virus emoji" role="img">
          🦠
        </span>
      </p>
      <p>
        Since everyone is isolating, a few friends have been hosting trivia
        nights by live streaming over Facebook or wherever, I thought it might
        be useful if everyone could see the current question instead of shouting
        over each other asking for it to be repeated etc. You know what it's
        like trying to have an online meeting with too many people...
      </p>
      <p>
        The idea was to make it as simple as possible, so I've used Google
        sheets as the data store. There is no sign up required, just use you're
        own Google account.
      </p>
      <p>
        The host can change the title and has a couple of large buttons to move
        back and forward through the questions. The players will see the
        questions update in realtime thanks to Firestore.
      </p>
      <p>If you&apos;d like to create your own game:</p>
      <ol className="list-inside list-decimal">
        <li>
          Create a new{" "}
          <Link
            href="https://docs.google.com/spreadsheets/u/0/"
            text="Google Sheet."
            underline
          />
        </li>
        <li>
          Columns are as follows:
          <ul className="ml-8">
            <li>A: Category</li>
            <li>B: Category Question Number</li>
            <li>C: Question</li>
            <li>D: Image (Must be a URL direct to the image)</li>
          </ul>
        </li>
        <li>
          Set the sharing options to "Anyone with the link{" "}
          <strong>can view</strong>".
        </li>
        <li>
          Copy the sheet ID from the URL, it will look something like this:{" "}
          <br />
          <span className="opacity-50 text-base ml-8">
            https://docs.google.com/spreadsheets/d/
          </span>
          <strong className="text-base">
            1wqUTTWBsf-kizQFxdnYUZg3ABnp02rjorGLLQMaAoRw
          </strong>
          <span className="opacity-50 text-base">/edit#gid=0</span>
        </li>
        <li>
          Go to{" "}
          <span className="underline italic">
            billsearle.me/trivia/YOUR-SHEET-ID?host=1
          </span>{" "}
          to host the game.
        </li>
        <li>
          Share{" "}
          <span className="underline italic">
            billsearle.me/trivia/YOUR-SHEET-ID
          </span>{" "}
          with friends to follow along.
        </li>
      </ol>

      <h2 className="mt-12">Demo</h2>
      <ul>
        <li>
          <Link
            href="https://docs.google.com/spreadsheets/d/1wqUTTWBsf-kizQFxdnYUZg3ABnp02rjorGLLQMaAoRw/edit?usp=sharing"
            text="Google Sheet Example"
          />
        </li>
        <li>
          <Link
            href="/trivia/1wqUTTWBsf-kizQFxdnYUZg3ABnp02rjorGLLQMaAoRw?host=1"
            text="Host"
          />
        </li>
        <li>
          <Link
            href="/trivia/1wqUTTWBsf-kizQFxdnYUZg3ABnp02rjorGLLQMaAoRw"
            text="Player"
          />
        </li>
      </ul>
    </article>
  </Layout>
);

export default Index;
