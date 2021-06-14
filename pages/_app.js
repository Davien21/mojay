import "../styles/bootstrap.css";
import "../styles/globals.css";

import "../styles/extra-responsive.css";
import { AnimatePresence } from "framer-motion";
import Header from "./../components/header/index";
import { useState, useEffect } from "react";

import PageTransition from "./../components/pageTransition/index";

function MyApp({ Component, pageProps, router }) {
  const [routeChanging, setRouteChanging] = useState(false);

  useEffect(() => {
    const routeChangeStartHandler = () => setRouteChanging(true);

    const routeChangeEndHandler = () => setRouteChanging(false);

    router.events.on("routeChangeStart", routeChangeStartHandler);
    router.events.on("routeChangeComplete", routeChangeEndHandler);
    router.events.on("routeChangeError", routeChangeEndHandler);
    return () => {
      router.events.off("routeChangeStart", routeChangeStartHandler);
      router.events.off("routeChangeComplete", routeChangeEndHandler);
      router.events.off("routeChangeError", routeChangeEndHandler);
    };
  }, [routeChanging]);

  return (
    <>
      {routeChanging ? (
        <PageTransition />
      ) : (
        <>
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default MyApp;
