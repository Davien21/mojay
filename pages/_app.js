import "../styles/globals.css";
import "../styles/bootstrap.css";
// import "../styles/extra-responsive.css";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/nav";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Nav />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
