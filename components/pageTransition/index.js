import { motion } from "framer-motion";
import { mojayFavicon } from "../../assets/imgs";
import { useEffect } from "react";
import Image from 'next/image';

const style = {
  backgroundColor: "white",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  zIndex: "10000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function PageTransition() {

  return (
    <motion.div exit={{ opacity: 0 }} style={style}>
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: 20,
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
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
  );
}

export default PageTransition;
