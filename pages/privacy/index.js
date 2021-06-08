import React from "react";
import { bg18 } from "../../assets/imgs";
import ImageBackground from "../../components/imageBackground";
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

function Privacy({}) {
  return (
    <>
      <ImageBackground sizeType="short">
        <img src={bg18} alt="" className="img-fluid" />
        <div className={`image_bg_content mt-5 text-shadow`}>
          <div className="def-container-lg my-5 pt-md-5">
            <h1>Our Privacy policy</h1>
            <div className="mt-4 ">
              {/* <p>Meet the team that makes things happen.</p> */}
            </div>
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
            <h6 className="mb-2">PRIVACY POLICY</h6>
            <p className="mb-4 font-italic">
              Last Updated on 30th September 2020
            </p>
          </motion.div>
          <motion.article variants={fadeInUp} className="">
            <p>
              Mojay Global Holding Limited (“Mojay”, “we”, “us” or “our”), a
              holding company registered in the DIFC with its address at N2001,
              Emirates Financial Towers, DIFC, Dubai, UAE, values your privacy
              and recognizes the importance of protecting the privacy of all
              individuals whose personal data it processes, whether collected
              directly or indirectly through its partners and affiliates (“Data
              Subjects”, “you” or “your”).{" "}
            </p>
            <p>
              This privacy policy (this “Policy”) aims to provide Data Subjects
              with an understanding regarding how we handle their data,
              including our data collection practices. We aim to provide
              clarification, through this Policy, about the methods through
              which we collect data, use such data, how it is shared (if at all)
              and how it is protected and stored. This Policy also provides
              information about your rights.
            </p>
            <p>
              Unless the context suggests otherwise, any reference to “data” in
              this Policy is to personal data, which means any data relating to
              an identified or identifiable person. For the avoidance of doubt,
              this Policy does not apply to anonymized or aggregate data or data
              that it is no longer identifiably linked to you. We may use and
              disclose such data to our partners, advertisers and any other
              third parties.{" "}
            </p>
            <p>
              It is important that you read this Policy together with any other
              notice we may provide on other occasions when collecting or
              processing data about you. This Policy is supplementary to such
              other notices and does not override them.
            </p>
            <p>
              We may modify this Policy from time to time. Changes will be
              posted on this page and cannot be retroactive. Where appropriate,
              we will provide you with notice of any material changes made to
              this Policy. What constitutes a “material change” will be
              determined at our sole discretion, in good faith and using
              reasonable judgment and common sense.{" "}
            </p>
            <p>
              The provisions contained in each paragraph of this Policy shall
              apply independently of each of the others and its validity shall
              not be affected if any of the others is invalid. If any of those
              provisions is void but would be valid if some part of the
              provision were deleted or reduced in scope or time, the provision
              in question shall apply with the minimum modification necessary to
              make it valid.
            </p>
            <p>This Policy explains:</p>
            <ol>
              <li>How we collect your data</li>
              <li>Categories of data</li>
              <li>How we use your data</li>
              <li>Legitimate interests</li>
              <li>Sharing of data</li>
              <li>Transferring data outside the DIFC</li>
              <li>Data retention</li>
              <li>Your data rights</li>
              <li>Marketing purposes</li>
              <li>Non-discrimination</li>
              <li>Security measures</li>
              <li>Complaints, questions and suggestions</li>
            </ol>
            <div className="mt-4">
              <div className="h5">
                <span>1.</span>
                <span className="col-auto">How we collect data</span>
              </div>
              <p>
                We collect data from you and from third parties (including any
                person acting on your behalf, our affiliates and so on). We also
                collect data from publicly accessible sources or which have been
                legitimately transmitted to us from our subsidiaries and
                affiliates.
              </p>
              <p>
                In general, we collect data relating to the following categories
                of persons:
              </p>
              <ul>
                <li>
                  Vendors and partners (including consultants) with whom we do
                  business;
                </li>
                <li>
                  Current, former or prospective staff and employees of Mojay,
                  including any managing director, director and independent
                  director, temporary worker, intern, other non-permanent
                  employee, contractor or consultant of Mojay or the Mojay Group
                  (“Workers”);{" "}
                </li>
                <li>Workers’ dependents and emergency contact persons; </li>
                <li>
                  Companies in the region and other companies with which we are
                  affiliated or share common ownership (our “Affiliates”); and
                </li>
                <li>
                  Investors and prospective investors or other business
                  partners.
                </li>
              </ul>
              <p>We collect your data:</p>
              <ul>
                <li>Directly from you.</li>
                <li>From security clearance providers.</li>
                <li>
                  CCTV images from our landlords or taken using our own CCTV
                  systems (if any).
                </li>
                <li>
                  For partners, we may collect your data from your colleagues or
                  employer, if we did not collect such data directly from you.
                </li>
                <li>
                  For investors and prospective investors, we may collect your
                  basic data (i.e. name, title and contact details) from mutual
                  contacts.
                </li>
                <li>
                  For our Affiliates’ customers and employees, we collect your
                  data from the relevant Affiliate.
                </li>
                <li>For Workers, from an employment/recruitment agency.</li>
                <li>For Workers, from your employer if you are a secondee.</li>
                <li>
                  For Workers, from referees, either external or internal.
                </li>
                <li>
                  For our Workers’ dependents and emergency contact persons, we
                  may collect your data from the relevant Worker, for the
                  purpose of performing our obligations towards said Worker such
                  as obtaining visa and insurance for the worker and his/her
                  dependents, or contacting the emergency contact person in case
                  of an emergency regarding the Worker.
                </li>
                <li>From providers of workers benefits.</li>
                <li>Where applicable, from health providers.</li>
              </ul>
              <p>
                Among others, we collect data by way of telephone calls or other
                forms of virtual calls and meetings, by way of physical
                meetings, by way of email, post, your submission of documents
                and applications or other forms in soft and hard formats.{" "}
              </p>
              <p>
                Where you have provided us with the data of third parties,
                including your next of kin, dependents and emergency contacts,
                you confirm that you have shared with them a copy of this Policy
                and they have consented to your giving us their data in
                accordance therewith.{" "}
              </p>
              <p>
                Our collection of data may be legally or contractually required
                for the provision of our services.{" "}
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>2.</span>
                <span className="col-auto">Categories of data</span>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}

export default Privacy;