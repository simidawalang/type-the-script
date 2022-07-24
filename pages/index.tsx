import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

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

      <header className="home-header">
        <div className="intro container bg-brand text-brand-2">
          <h1 className="app-name">
            <span>Type</span>
            <span className="text-sm">the</span>
            <span>Script</span>
          </h1>
        </div>
        <div className="intro container bg-gray app-description">
          <div>
            <h2 className="welcome-text">Hi there...</h2>
            <p>
              Need a simple app to improve your typing skills? Type the Script
              is perfect for you. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem enim adipisci, provident iusto cumque natus
              quisquam nisi? Corrupti maiores repudiandae consectetur enim
              recusandae cum atque delectus fugiat, dolore magni voluptatum?
            </p>
            <a className="btn btn-brand get-started-link" href="/play">
              Get started
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
