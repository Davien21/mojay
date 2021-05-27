import React from "react";

import { motion } from "framer-motion";

function OurBusiness() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        This is the Our business Page!
      </motion.div>
    </>
  );
}

export default OurBusiness;
