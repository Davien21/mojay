import {
  respectImg,
  bg5,
  empathyImg,
  integrityImg,
  innovationImg,
  performanceImg,
} from "./../../assets/imgs";

import ImageBackground from "../../components/imageBackground";
import styles from "./values.module.css";

function OurValues() {
  return (
    <>
      <ImageBackground height="70vh">
        <img
          src={bg5}
          alt=""
          className="img-fluid image_overlay"
          style={{ maxHeight: "70vh", height: "auto", width: "100%", backgroundPosition: "0% 50%" }}
        />
        <div className={styles.content}>
          <div className="m-5 pt-5">
            <h1>Our Values</h1>
            <div className="mt-4 ">
              <p>
                Our foundation lies in our core values, always directing us
                towards the path of growth.
              </p>
            </div>
          </div>
        </div>
      </ImageBackground>
      <section className="my-5">
        <div className="def-container mt-5 pt-5">
          <article className="text-center ">
            <h3>We live by Our Values</h3>
            <hr className="undertone ml-auto" />
          </article>
        </div>
        <div className="def-container my-5">
          <div className="row mx-auto justify-content-center">
            <div className="col-md-4 my-5 px-4 px-sm-5 px-md-3">
              <div className="" style={{ height: "200px" }}>
                <img
                  src={empathyImg}
                  alt=""
                  className="img-fluid def-rounded"
                />
              </div>
              <h5 className="text-center my-3 h4">Empathy</h5>
              <article className="text-center">
                We value People and their lives. We value communities and their
                needs. We value our Planet and its sustainability. Empathy is at
                the core of our business.
              </article>
            </div>
            <div className="col-md-4 my-5 px-4 px-sm-5 px-md-3">
              <div className="" style={{ height: "200px" }}>
                <img
                  src={respectImg}
                  alt=""
                  className="img-fluid def-rounded"
                />
              </div>
              <h5 className="text-center my-3 h4">Respect</h5>
              <article className="text-center">
                We treat everyone with equal respect, which is reflected in the
                way we communicate and engage with our stakeholders, clients and
                partners.
              </article>
            </div>
            <div className="col-md-4 my-5 px-4 px-sm-5 px-md-3">
              <div className="" style={{ height: "200px" }}>
                <img
                  src={integrityImg}
                  alt=""
                  className="img-fluid def-rounded"
                />
              </div>
              <h5 className="text-center my-3 h4">Integrity</h5>
              <article className="text-center">
                We develop our businesses with honesty, ethics and
                professionalism.
              </article>
            </div>
            <div className="col-md-4 my-5 px-4 px-sm-5 px-md-3">
              <div className="" style={{ height: "200px" }}>
                <img
                  src={innovationImg}
                  alt=""
                  className="img-fluid def-rounded"
                />
              </div>
              <h5 className="text-center my-3 h4">Innovation</h5>
              <article className="text-center">
                We think outside the box, challenging the status quo, and
                looking beyond the first right idea.
              </article>
            </div>
            <div className="col-md-4 my-5 px-4 px-sm-5 px-md-3">
              <div className="" style={{ height: "200px" }}>
                <img
                  src={performanceImg}
                  alt=""
                  className="img-fluid def-rounded"
                />
              </div>
              <h5 className="text-center my-3 h4">Performance</h5>
              <article className="text-center">
                We are committed to our work and organization. Meeting our
                targets is always our utmost priority
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurValues;
