import styles from "./img_overlay.module.css";

const ImageOverlay = ({ children, height }) => {
  return (
    <div className={styles.body} style={{ height }}>
      {children}
    </div>
  );
};

export default ImageOverlay;
