import Link from "next/link";
import { motion } from "framer-motion";

const DropDownCard = ({ children, route }) => {
  return (
    <Link href={route}>
      <motion.div
        style={{ boxShadow: "0 2px 18px 0 rgb(0 0 0 / 10%)", minHeight: "116px" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white def_hover_2 p-3 "
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default DropDownCard;
