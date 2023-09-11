import { Layout } from "components/Layout";
import Image from "next/image";
import { Link } from "next/link";

function About() {
  return (
    <Layout>
      <article>
        <h1 className="mb-16 leading-none">
          No mess, no fuss... welcome to your new home of healthy!
        </h1>
        <Image
          src="/healthy/banner.webp"
          alt="banner"
          width="1368"
          height="772"
        />
        <p className="mt-4">
          If you’re like most people you’ve probably searched online (a lot) for
          ways to be more healthy. In fact, according to Google 70,000
          health-related searches are made every minute.
        </p>
        <p>
          And when it takes less than a second (0.62 to be exact) for about
          1,300,000,000 results to pop up on the screen, you can be forgiven for
          thinking ‘nope, too hard’.
        </p>
        <p>
          There’s so much information coming our way. It’s overwhelming. And how
          do we know whether the stuff we’re reading is trustworthy and backed
          by experts?
        </p>

        <Link href="sustainable-development">
          <a className="text-lg underline">Sustainable Development</a>
        </Link>
      </article>
    </Layout>
  );
}

export default About;
