import { motion } from "framer-motion";
const raulSilva = () => {
  let variants = {};
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
    >
      <p>Raul Silva!</p>
    </motion.div>
  );
};

export default raulSilva;
