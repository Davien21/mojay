import "../styles/bootstrap.css";
import 'simplebar/dist/simplebar.min.css';

// import "../styles.scss";
import "../styles/globals.css";

import "../styles/extra-responsive.css";
import { AnimatePresence } from "framer-motion";
import Header from './../components/header/index';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Header />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
