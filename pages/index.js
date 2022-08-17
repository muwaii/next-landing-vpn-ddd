import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<<<<<<< HEAD
=======

>>>>>>> 59af7dee1418ded098c75955a4f95c9ac7337ffb

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header"
      ])),
    },
  };
}

export default function Home(props) {
  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>The BNPT Company</title>
=======
        <title>The Best NP Technologies</title>
>>>>>>> 59af7dee1418ded098c75955a4f95c9ac7337ffb
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.locals}
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }){
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "home",
        "common",
        "navbar",
        "footer",
      
      ])),
    },
  };
}
