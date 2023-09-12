import Head from "next/head";
import { domain } from "page-config";

interface PageHeadProps {
  meta: {
    title: string;
    desc: string;
    url: string;
  };
}

export const PageHead = ({ meta }: PageHeadProps) => (
  <Head>
    <title>{meta.title}</title>
    <link rel="canonical" href={`${domain}${meta.url}`} />
    <meta name="description" content={meta.desc} />
    <meta name="author" content="Bill Searle" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={meta.desc} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:img" content={`${domain}/favicon.ico`} />
    <meta property="og:url" content={`${domain}${meta.url}`} />
  </Head>
);
