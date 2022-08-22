import Head from "next/head";
import Home2 from "../components/Home2";
import Pricing from "../components/Pricing";
import Home from "../components/Home2";
import Layout from "../components/Layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";

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

export default function Homepage(props) {
  return (
    <>
      <Head>
        <title>The BNPT Company</title>
        <title>The Best NP Technologies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.locals}
      <Layout>
        <Hero />
        <Home2 />  
        {/* Head */}
        <Pricing />  
        {/* Service, About, Contact */}
      </Layout>
    </>
  );
}
