import { Img } from "components/Img";
import Layout from "components/Layout";
import { Link } from "components/Link";
import PageHead from "components/PageHead";
import Video from "components/Video";
import { meta } from "page-config";
import squareImg from "public/nba/square.png";
import storyImg from "public/nba/story.png";

const NbaAllStarVote = () => (
  <Layout>
    <PageHead meta={meta.nba} />
    <article>
      <h1>NBA All-Star Vote</h1>
      <p className="italic">
        Edit:{" "}
        <Link
          underline
          href="https://www.linkedin.com/feed/update/urn:li:activity:6738182613925818368/"
          text="We won an award!"
        />
      </p>
      <p>
        For 2020 the NBA voting app was redesigned and rebuilt by{" "}
        <Link
          href="https://enginedigital.com"
          text="Engine Digital."
          underline
        />
      </p>
      <p>
        I was fortunate to be taken on as the lead developer, primarily focused
        on the architecture and functionality of the application with support
        from two UI developers.
      </p>
      <p>
        I used Next.js as the framework and deployed via pre-rendering all the
        pages to be statically hosted and distributed over a CDN.
      </p>
      <p>
        In the month it was live, tens of millions of votes were cast through
        the app.
      </p>

      <Video
        src="/nba/nba.mp4"
        poster="/nba/poster.png"
        caption="A quick walk through of the 2020 NBA All Star Voting app."
      />

      <h4 className="mt-12">Features include</h4>
      <ul className="text-lg list-disc list-inside">
        <li>Multiple language support, including image assets.</li>
        <li>First visit only onboarding.</li>
        <li>Interactive court view.</li>
        <li>Search, filter and sort all players.</li>
        <li>
          Add and remove votes, limited by position and conference. I used
          reselect with redux to persists search results across page navigation
          without recalculating unless a search parameter changes.
        </li>
        <li>Pre-fill votes via a query param.</li>
        <li>ESI integration.</li>
        <li>Country dependent dynamic submit form.</li>
        <li>24 hour voting lock out after submitting.</li>
        <li>Client side generated .png of the users votes.</li>
      </ul>

      <h4 className="mt-12">Shareable assets</h4>
      <p>
        To generate these images we first created individual player images, I
        then render the court and the player images into a canvas element and
        saved it out as a base64 string. The string is then set as the source
        for an image to be displayed on the page.
      </p>
      <p>
        The string is also saved into localStorage to persist the image during
        the 24hr lock out period.
      </p>
      <p>A blob is created for the download buttons.</p>
      <p>
        Any error in loading a player image or if not all positions are filled
        by a user a randomly selected default &quot;ghost&quot; image is used in
        place.
      </p>
      <div className="flex mt-8">
        <div className="flex-1 w-1 mr-6">
          <Img src={storyImg} alt="share story" />
        </div>
        <div className="flex-1 w-1">
          <Img src={squareImg} alt="share square" />
        </div>
      </div>

      <p className="mt-12">
        The project will be live at{" "}
        <Link underline href="https://vote.nba.com/en" text="vote.nba.com" />{" "}
        during Jan 2020.
      </p>

      <p>
        <Link
          underline
          href="https://enginedigital.com/news/2020-01-06-nba-all-star-voting-experience-gets-an-upgrade-and-improves-on-all-performance-metrics/"
          text="See Engine Digitals write up."
        />
      </p>
    </article>
  </Layout>
);

export default NbaAllStarVote;
