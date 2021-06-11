import "../styles/bootstrap.css";

// import "../styles.scss";
import "../styles/globals.css";

import "../styles/extra-responsive.css";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./../components/header/index";
import Image from "next/image";
import { mojayFavicon, mojayLogoHorizontal } from "../assets/imgs";
import { useState, useEffect } from "react";

import routers from "next/router";

function MyApp({ Component, pageProps, router }) {
  const [routeChanging, setIsRouteChanging] = useState(false);
  useEffect(() => {
    const routeChangeStartHandler = () => setIsRouteChanging(true);

    const routeChangeEndHandler = () => setIsRouteChanging(false);

    router.events.on("routeChangeStart", routeChangeStartHandler);
    router.events.on("routeChangeComplete", routeChangeEndHandler);
    router.events.on("routeChangeError", routeChangeEndHandler);
    return () => {
      router.events.off("routeChangeStart", routeChangeStartHandler);
      router.events.off("routeChangeComplete", routeChangeEndHandler);
      router.events.off("routeChangeError", routeChangeEndHandler);
    };
  }, []);

  return (
    <>
      {routeChanging ? (
        <motion.div
          exit={{ opacity: 0 }}
          style={{
            backgroundColor: "white",
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: "10000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: 20,
              transition: {
                duration: 1,
                yoyo: Infinity,
              },
            }}
            style={{ marginTop: "-10%" }}
          >
            <Image
              src={mojayFavicon}
              className="img-fluid"
              width={77}
              height={84}
              alt=""
            />
          </motion.div>
        </motion.div>
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
