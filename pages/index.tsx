import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Type the Script</title>
        <meta name="description" content="A typing app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="home-header">
        <div className="intro">
          <h1>
            Type <span>the</span> Script
          </h1>
        </div>
        <div className="intro">
          <h2>Hi there...</h2>
          <p>
            Need a simple app to improve your typing
            skills? Type the Script is perfect for you.
          </p>
          <a href="/play">Get started</a>
        </div>
      </header>
    </div>
  );
};

export default Home;
