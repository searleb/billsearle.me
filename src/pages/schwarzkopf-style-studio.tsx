import { Layout } from "components/Layout";
import { PageHead } from "components/PageHead";
import Video from "components/Video";
import { meta } from "page-config";

const SchwarzkopfStyleStudio = () => (
  <Layout>
    <PageHead meta={meta.styleStudio} />
    <article>
      <h1>Schwarzkopf Style Studio</h1>
      <p>
        Unfortunately this site recently died.
        <br />I assume it&apos;s been discontinued, luckily the web archive
        allowed me to a grab a few shots of how it looked (not everything looks
        perfect from the archive).
      </p>
      <Video
        src="/style-studio/style-studio.mp4"
        poster="/style-studio/style-poster.png"
        caption="Style Studio home and blog."
      />
      <Video
        src="/style-studio/colour-match.mp4"
        poster="/style-studio/match-poster.png"
        caption="Colour Match"
      />
    </article>
  </Layout>
);

export default SchwarzkopfStyleStudio;
