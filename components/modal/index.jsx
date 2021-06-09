import { useRef } from "react";
import { motion } from "framer-motion";
import Overlay from "./../overlay/index";
import { CloseButton } from "./../closeButton/index";

const handleAnimationStart = (ref, isOpen) => {
  if (isOpen) ref.current.style.display = "block";
};

const handleAnimationEnd = (ref, isOpen) => {
  if (!isOpen) ref.current.style.display = "none";
};

function Modal({ children, modalOpen, onModalOpen }) {
  const modalBodyRef = useRef();

  return (
    <>
      <Overlay
        className=""
        isOpen={modalOpen}
        onClick={() => {
          onModalOpen(false);
        }}
      ></Overlay>
      <motion.div
        ref={modalBodyRef}
        style={{ position: "fixed", top: 0, zIndex: "102" }}
        onAnimationComplete={() => handleAnimationEnd(modalBodyRef, modalOpen)}
        onAnimationStart={() => handleAnimationStart(modalBodyRef, modalOpen)}
        initial={{ opacity: 0, y: 0 }}
        animate={modalOpen ? { opacity: 1, y: "25%" } : { opacity: 0, y: 0 }}
        className="def-container"
      >
        <div
          className="row justify-content-center
          "
        >
          <div
            style={{
              backgroundColor: "#fff",
              maxHeight: "70vh",
            }}
            className="col-10 py-5 px-"
          >
            <CloseButton toggle={() => onModalOpen(false)} />
            {children}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Modal;
