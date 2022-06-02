import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Newsletter } from "../components/layout/Newsletter";
import { Showcase } from "../components/Showcase";
import { GetServerSideProps } from "next";
import Client from "~/utils/Client";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Showcase />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const homeData = await Client.get("getHomeData");

  console.log(homeData);

  return {
    props: {},
  };
};

export default Home;
