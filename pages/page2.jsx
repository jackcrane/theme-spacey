import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App PAGE 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      PAGE 2
      <main>
        {/* <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}
      </main>
    </div>
  );
}
