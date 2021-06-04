import { Image } from "next/image";
import styles from "./image_background.module.css";

const ImageBackground = ({ children, height }) => {
  return (
    <div className={styles.image_overlay} style={{ height }}>
      {children}
    </div>
  );
};

export default ImageBackground;
