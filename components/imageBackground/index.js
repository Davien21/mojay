import { Image } from "next/image";
import styles from "./image_background.module.css";

const ImageBackground = ({ children, sizeType }) => {
  return (
    <div className={`${styles.image_overlay} ${styles[sizeType]}`}>
      {children}
    </div>
  );
};

export default ImageBackground;
