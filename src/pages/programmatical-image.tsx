import Code from "components/Code";
import { Layout } from "components/Layout";
import { Link } from "components/Link";
import { PageHead } from "components/PageHead";
import { useRouter } from "next/router";
import { meta } from "page-config";
import { useEffect, useState } from "react";

const Engage = () => {
  const [colorImg, setColorImage] = useState();
  const router = useRouter();

  useEffect(() => {
    const fetchColorImage = async () => {
      const search = new URLSearchParams(router.query).toString();
      const res = await fetch(`/api/engage?${search}`);
      if (res.ok) {
        const json = await res.json();
        setColorImage(json);
      } else {
        console.log("something broke", res.statusText);
      }
    };

    fetchColorImage();
  }, [router.query]);

  return (
    <Layout>
      <PageHead meta={meta.engage} />
      <h1>Programmatical Image</h1>

      <figure style={{ width: 256, height: 128 }} className="my-8">
        {colorImg && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            width="256px"
            height="128px"
            src={colorImg}
            alt="So many colors!"
          />
        )}
      </figure>

      <h2>The challenge</h2>
      <p className="mt-4">
        You need to write a program which will produce an image in which each
        colour occurs exactly once -- with no repetition and no unused colours.
        Colours are formed by combining a red, green, and blue component in the
        range 0..256; your program will need to break each component into 32
        steps -- 8, 16,24, .. 256 -- which means you will have 32,768 discrete
        colours. Your image will therefore need to be sized to accommodate
        exactly this number of unique colours -- for example, 256x128px
        (although other dimensions are possible).
      </p>
      <p>
        Possible query params:
        <Code>sort=1 alpha=1..255</Code>
      </p>
      <ul>
        <li>
          <Link
            underline
            href="/programmatical-image?sort=1"
            text="Alt image: ?sort=1"
            className="text-xl"
          />
        </li>
        <li>
          <Link
            underline
            href="https://github.com/searleb/billsearle.me/blob/master/src/pages/api/engage.js"
            text="GitHub Code Here"
            className="text-xl"
          />
        </li>
      </ul>
    </Layout>
  );
};

export default Engage;
