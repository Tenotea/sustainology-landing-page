import Head from "next/head";
import HomeTemplate from "~/templates/home-template/HomeTemplate";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sustainology</title>
        <meta
          name="description"
          content="Submission by Emmanuel Adelakun (devtenotea@gmail.com)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </>
  );
}
