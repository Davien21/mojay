import { motion } from "framer-motion";

const HoverCard = ({ children, height }) => {
  height = height ?? "auto";
  return (
    <>
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mb-4 bg-white paper-box-shadow pointer"
        style={{ height }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default HoverCard;
