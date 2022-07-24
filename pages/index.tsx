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
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem enim
              adipisci, provident iusto cumque natus quisquam nisi? Corrupti
              maiores repudiandae consectetur enim recusandae cum atque delectus
              fugiat, dolore magni voluptatum?
            </p>
            <Link href="/challenge">
              <a className="btn btn-brand">Get Started</a>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
