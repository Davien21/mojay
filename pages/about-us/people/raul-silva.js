import WithInView from "./../../../hoc/withInView/index";
import { motion } from "framer-motion";
const raulSilva = () => {
  let variants = {}
  return (
    <WithInView>
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
      >
        <p>Raul Silva!</p>
      </div>
    </WithInView>
  );
};

export default raulSilva;
