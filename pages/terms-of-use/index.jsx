import ImageBackground from "./../../components/imageBackground/index";
import Image from "next/image";
import { bg7 } from "../../assets/imgs";
import { motion } from "framer-motion";
import Footer from "./../../components/footer/index";

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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const TermsOfUse = () => {
  return (
    <>
      <ImageBackground sizeType="short">
        <Image layout="fill" src={bg7} alt="" className="img-fluid" />
        <div className={`image_bg_content mt-5 text-shadow`}>
          <div className="def-container-lg my-5 pt-md-5">
            <h1>Our Terms of Use</h1>
          </div>
        </div>
      </ImageBackground>
      <motion.section className="clear-nav-margin">
        <motion.div
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          className="def-container-lg my-5"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="">
            <h3 className="mb-4">MOJAY GLOBAL HOLDING LIMITED</h3>
            <h6 className="mb-2">WEBSITE TERMS OF USE</h6>
          </motion.div>
          <motion.article variants={fadeInUp} className="">
            <div className="mt-4">
              <div className="h5">
                <span>1.</span>
                <span className="col-auto">Introduction.</span>
              </div>
              <p>
                These Website Standard Terms and Conditions (these “Terms” or
                these “Website Standard Terms and Conditions”) contained herein
                on this webpage, shall govern your use of this website,
                including all pages within this website (collectively referred
                to hereinbelow as this “Website”). These Terms apply in full
                force and effect to your use of this Website, and by using this
                Website, you expressly accept all terms and conditions contained
                herein in full. You must not use this Website if you have any
                objection to any of these Website Standard Terms and Conditions.
              </p>
              <p>
                The content of the pages of this website is for your general
                information and use only. It is subject to change without
                notice.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>2.</span>
                <span className="col-auto">Intellectual Property Rights.</span>
              </div>
              <p>
                Other than content you own, which you may have opted to include
                on this Website, under these Terms, Mojay Global Holding Limited
                (“Company”) and/or its licensors own all rights to the
                intellectual property and material contained in this Website,
                and all such rights are reserved.
              </p>
              <p>
                You are granted a limited license only, subject to the
                restrictions provided in these Terms, for purposes of viewing
                the material contained on this Website.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>3.</span>
                <span className="col-auto">Restrictions.</span>
              </div>
              <p>
                You are expressly and entirely restricted from all the
                following:
              </p>
              <ul className="default_setting">
                <li>publishing any Website material in any media;</li>
                <li>
                  selling, sublicensing or otherwise commercializing any Website
                  material;
                </li>
                <li>publicly performing or showing any Website material;</li>
                <li>
                  using this Website in any way that is, or maybe, damaging to
                  this Website;
                </li>
                <li>
                  using this Website in any way that impacts user access to this
                  Website;
                </li>
                <li>
                  using this Website contrary to applicable laws and
                  regulations, or in a way that causes, or may cause, harm to
                  the Website, or any person or business entity;
                </li>
                <li>
                  engaging in any data mining, data harvesting, data extracting
                  or any other similar activity concerning this Website, or
                  while using this Website;
                </li>
                <li>
                  using this Website to engage in any advertising or marketing;
                </li>
              </ul>
              <p>
                Specific areas of this Website are restricted from access by
                you, and the company may further limit access by you to any
                areas of this Website, at any time, in its sole and absolute
                discretion. Any user ID and password you may have for this
                Website are confidential, and you must maintain the
                confidentiality of such information.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>4.</span>
                <span className="col-auto">Your Content.</span>
              </div>
              <p>
                In these Website Standard Terms and Conditions, “Your Content”
                shall mean any audio, video, text, images or other material you
                choose to display on this Website. Concerning Your Content, by
                displaying it, you grant Company a non-exclusive, worldwide,
                irrevocable, royalty-free, sublicensable license to use,
                reproduce, adapt, publish, translate and distribute it in all
                media.
              </p>
              <p>
                Your Content must be your own and must not be infringing on any
                third party’s rights. The company reserves the right to remove
                any of Your Content from this Website at any time, and for any
                reason, without notice.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>5.</span>
                <span className="col-auto">No warranties.</span>
              </div>
              <p>
                This Website is provided “as is,” with all faults, and the
                company makes no express or implied representations or
                warranties, of any kind related to this Website or the materials
                contained on this Website. Additionally, nothing contained on
                this Website shall be construed as providing consult or advice
                to you.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>6.</span>
                <span className="col-auto">Limitation of liability.</span>
              </div>
              <p>
                In no event shall the company, nor any of its officers,
                directors and employees, be liable to you for anything arising
                out of or in any way connected with your use of this Website,
                whether such liability is under contract, tort or otherwise, and
                the company, including its officers, directors, and employees
                shall not be liable for any indirect, consequential or special
                liability arising out of or in any way related to your use of
                this Website.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>7.</span>
                <span className="col-auto">Indemnification.</span>
              </div>
              <p>
                You as a result of this fully indemnify the company from and
                against any liabilities, costs, demands, causes of action,
                damages and expenses (including reasonable attorney’s fees)
                arising out of or in any way related to your breach of any of
                the provisions of these Terms.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>8.</span>
                <span className="col-auto">Severability.</span>
              </div>
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid under any applicable law, such unenforceability or
                invalidity shall not render these Terms unenforceable or invalid
                as a whole, and such provisions shall be deleted without
                affecting the remaining provisions herein.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>9.</span>
                <span className="col-auto">Variation of Terms.</span>
              </div>
              <p>
                The company is permitted to revise these Terms at any time as it
                sees fit, and by using this Website, you are expected to review
                such Terms regularly to ensure you understand all terms and
                conditions governing the use of this Website.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>10.</span>
                <span className="col-auto">Assignment.</span>
              </div>
              <p>
                The company shall be permitted to assign, transfer, and
                subcontract its rights and obligations under these Terms without
                any notification or consent required. However, you shall not be
                allowed to assign, transfer, or subcontract any of your rights
                and obligations under these Terms.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>11.</span>
                <span className="col-auto">Entire Agreement.</span>
              </div>
              <p>
                These Terms, including any legal notices and disclaimers
                contained on this Website, constitute the entire agreement
                between the company and you with your use of this Website and
                supersede all prior agreements and understandings concerning the
                same.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>12.</span>
                <span className="col-auto">
                  Governing Law &amp; Jurisdiction.
                </span>
              </div>
              <p>
                These Terms will be governed by and construed following the laws
                of the Dubai International Financial Centre , and you submit to
                the non-exclusive jurisdiction of the DIFC Courts for the
                resolution of any disputes.
              </p>
            </div>
          </motion.article>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
};

export default TermsOfUse;
