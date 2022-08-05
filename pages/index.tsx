import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Type the Script</title>
        <meta name="description" content="A typing app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header home-header">
        <div className="intro container">
          <h1 className="header-text">
            <span>Type</span>
            <span className="text-sm">the</span>
            <span>Script</span>
          </h1>
        </div>
        <div className="intro container bg-gray">
          <div className="app-description">
            <h2 className="welcome-text">Hi there...</h2>
            <p>
              Need a simple app to improve your typing skills? Type the Script
              is perfect for you.
            </p>
            <p>Measure both your speed and accuracy.</p>
            <Link href="/challenge">
              <a className="btn btn-brand challenge-link">Get Started</a>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
