import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
        <title>The BNPT Company</title>
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
