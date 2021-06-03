import ImageOverlay from "./../../components/imageOverlay/index";
import { peopleImage2, bg1, bg2, myroBg, preimoBg } from "./../../assets/imgs";
import styles from "./values.module.css";

function OurValues() {
  return (
    <div>
      <ImageOverlay height="70vh">
        <img
          src={preimoBg}
          alt=""
          className="img-fluid"
          style={{ maxHeight: "70vh", height: "auto", width: "100%" }}
        />
        <div className={styles.content}>
          <div>This is content</div>
        </div>
      </ImageOverlay>
    </div>
  );
}

export default OurValues;
