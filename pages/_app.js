import "../styles/tailwind.css";
import "../styles/slick.css";
import "../components/HeroCss.module.css"
import "../components/featurecss.module.css"
// import { appWithTranslation } from "next-i18next";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// export default appWithTranslation(MyApp);
export default MyApp;
