import Head from "next/head";

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
      <main className="min-h-screen bg-app-background-green"></main>
    </>
  );
}
