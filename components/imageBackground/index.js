import { Image } from "next/image";
import styles from "./image_background.module.css";

const ImageBackground = ({ src }) => {
  return (
    <div className={styles.image_overlay}>
      {/* <div> */}
        <img src={src} className="img-fluid" />
      {/* </div> */}
    </div>
  );
};

export default ImageBackground;
