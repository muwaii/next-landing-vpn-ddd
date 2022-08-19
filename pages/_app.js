import "../styles/tailwind.css";
import "../styles/slick.css";
import { appWithTranslation } from "next-i18next";
import "../components/HeroCss.module.css"
import "../components/FeatureCss.module.css"
import "../components/Layout/HeaderCss.module.css"
import "../components/PricingCss.module.css"




function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
// export default MyApp;
