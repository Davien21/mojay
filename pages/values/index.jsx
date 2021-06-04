import { peopleImage2, bg1, bg2, myroBg, preimoBg } from "./../../assets/imgs";
import ImageBackground from "../../components/imageBackground";
import styles from "./values.module.css";

function OurValues() {
  return (
    <ImageBackground height="70vh">
      <img
        src={peopleImage2}
        alt=""
        className="img-fluid image_overlay"
        style={{ maxHeight: "70vh", height: "auto", width: "100%" }}
      />
      <div className={styles.content}>
        <div className=" m-5">
          <h2>Our Values</h2>
        </div>
      </div>
    </ImageBackground>
  );
}

export default OurValues;
