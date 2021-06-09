import styles from "../../../pages/people/people.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./../../modal/index";
const easing = [0.6, -0.05, 0.01, 0.99];
const transition1 = {
  duration: 0.6,
  ease: easing,
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: transition1,
  },
};

const MobilePeopleSection = ({
  onTogglePerson,
  peopleImages,
  longSummary,
  role,
  currentPersonImage,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Modal modalOpen={modalOpen} onModalOpen={setModalOpen}>
        {/* <img
          style={{ maxHeight: "30%", objectFit: "cover" }}
          src={currentPersonImage}
          alt=""
          className="img-fluid def-rounded"
        /> */}
        <p className="def_text_orange mt-3" style={{ fontSize: "1.2rem" }}>
          {role}
        </p>
        <div
          style={{
            backgroundColor: "#fff",
            maxHeight: "90%",
            overflowY: "auto",
          }}
        >
          {longSummary}
        </div>
      </Modal>
      <motion.div className="d-lg-none row mx-auto justify-content-center">
        <motion.div
          className={`col-12 col-6 col-lg-4 ${styles.people_card}`}
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
        >
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onTogglePerson("sunil");
              setModalOpen(true);
            }}
            className="mb-4 bg-white paper-box-shadow pointer"
          >
            <div className={`w-100`}>
              <img src={peopleImages.sunilImage} alt="" className="img-fluid" />
            </div>
            <div className="px-3 pt-3 pb-5 text-left">
              <h4>Sunil Kumar Singh</h4>
              <p>Founder &amp; Director</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`col-12 col-6 col-lg-4 ${styles.people_card}`}
          initial={fadeInUp.animate}
          animate={fadeInUp.animate}
        >
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onTogglePerson("arun");
              setModalOpen(true);
            }}
            className="mb-4 bg-white paper-box-shadow pointer"
          >
            <div className={`w-100`}>
              <img src={peopleImages.arunImage} alt="" className="img-fluid" />
            </div>
            <div className="px-3 pt-3 pb-5 text-left">
              <h4>S. R. Arun</h4>
              <p>Chairman</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`col-12 col-6 col-lg-4 ${styles.people_card}`}
          initial={fadeInUp.animate}
          animate={fadeInUp.animate}
        >
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onTogglePerson("raul");
              setModalOpen(true);
            }}
            className="mb-4 bg-white paper-box-shadow pointer"
          >
            <div className={`w-100`}>
              <img src={peopleImages.raulImage} alt="" className="img-fluid" />
            </div>
            <div className="px-3 pt-3 pb-5 text-left">
              <h4>Raul Geraldes Silva</h4>
              <p>Managing Director &amp; CEO</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`col-12 col-6 col-lg-4 ${styles.people_card}`}
          initial={fadeInUp.animate}
          animate={fadeInUp.animate}
        >
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onTogglePerson("carerra");
              setModalOpen(true);
            }}
            className="mb-4 bg-white paper-box-shadow pointer"
          >
            <div className={`w-100`}>
              <img src={peopleImages.candiImage} alt="" className="img-fluid" />
            </div>
            <div className="px-3 pt-3 pb-5 text-left">
              <h4>Candi Carrera</h4>
              <p>Director</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`col-12 col-6 col-lg-4 ${styles.people_card}`}
          initial={fadeInUp.animate}
          animate={fadeInUp.animate}
        >
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onTogglePerson("siddhant");
              setModalOpen(true);
            }}
            className="mb-4 bg-white paper-box-shadow pointer"
          >
            <div className={`w-100`}>
              <img src={peopleImages.shahImage} alt="" className="img-fluid" />
            </div>
            <div className="px-3 pt-3 pb-5 text-left">
              <h4>Siddhant Shah</h4>
              <p>Director</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`col-12 col-6 col-lg-4 ${styles.people_card}`}
          initial={fadeInUp.animate}
          animate={fadeInUp.animate}
        >
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onTogglePerson("yasser");
              setModalOpen(true);
            }}
            className="mb-4 bg-white paper-box-shadow pointer"
          >
            <div className={`w-100`}>
              <img src={peopleImages.khanImage} alt="" className="img-fluid" />
            </div>
            <div className="px-3 pt-3 pb-5 text-left">
              <h4>Yasser Khan</h4>
              <p>Director</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MobilePeopleSection;
