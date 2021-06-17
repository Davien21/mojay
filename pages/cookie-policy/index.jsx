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

const CookiePolicy = () => {
  return (
    <>
      <ImageBackground sizeType="short">
        <Image layout="fill" src={bg7} alt="" className="img-fluid" />
        <div className={`image_bg_content mt-5 text-shadow`}>
          <div className="def-container-lg my-5 pt-md-5">
            <h1>Our Cookie Policy</h1>
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
            <h6 className="mb-2">COOKIE POLICY</h6>
          </motion.div>
          <motion.article variants={fadeInUp} className="">
            <p className="">
              Below is information about how{" "}
              <span className="font-weight-bold">
                Mojay Global Holding Limited
              </span>
              (“<span className="font-weight-bold">MGHL</span>”) and its
              affiliates (“<span className="font-weight-bold">we</span>”) use
              cookies and other similar technology on this website.
            </p>
            <p className="mb-0">
              This policy is effective as of June 15, 2021.
            </p>
            <p>
              Please note that this cookie policy will be updated from time to
              time.
            </p>
            <p>
              We can place cookies and other similar technology on your device,
              including mobile device, in accordance with your preferences set
              on our cookie consent program. Depending on your settings in our
              cookie consent program on your mobile device, the following
              information may be collected through cookies or similar
              technology: your unique device identifier, mobile device IP
              address, information about your device’s operating system, mobile
              carrier, and your location information (to the extent permissible
              under applicable law).
            </p>
            <div className="mt-4">
              <h4 className="mb-2">What are cookies?</h4>
              <p>
                Cookies are simple text files that are stored on your computer
                or mobile device by a website’s server. Each cookie is unique to
                your web browser. It will contain some anonymous information
                such as a unique identifier, website’s domain name, and some
                digits and numbers. Cookies managed by MGHL only are called
                “first party cookies” whereas cookies from third parties are
                called “third party cookies” as explained below.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-2">
                Why do we use cookies and similar technologies?
              </h4>
              <p>
                Cookies do a lot of different jobs, such as letting you navigate
                between pages efficiently, remembering your preferences and
                generally improving the user experience. They can also help to
                ensure that the advertisements you see online are more relevant
                to you and your interests. In addition, cookies can help us to
                analyze the use of our websites and online content (analytics
                cookies) and they can also facilitate/track the interaction on
                our websites and online content with social media (e.g. links to
                social media sites, like buttons, etc.).
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-2">
                Does MGHL use cookies for marketing and analytics?
              </h4>
              <p className="mb-1">
                Yes, we may use information collected from our cookies to
                identify user behavior and to serve content and offers based on
                your profile, and for the other purposes described below, to the
                extent legally permissible in certain jurisdictions. In other
                cases, we can associate cookie information (including
                information from cookies placed via our advertisements on third
                party sites) with an identifiable individual. <br />
              </p>
              <p className="mb-1">For example:</p>
              <ul>
                <li>
                  • If we send you a targeted email which includes web beacons,
                  cookies, or similar technologies we will know whether you
                  open, read, or delete the message.
                </li>
                <li>
                  • When you click a link in a marketing e-mail you receive from
                  MGHL, we will also use a cookie to log what pages you view and
                  what content you download from our websites, even if you are
                  not registered at or signed into our site.
                </li>
                <li>
                  <span className="font-weight-bold">
                    • Combining and analyzing personal data{" "}
                  </span>
                  <span>
                    – As described above, we may combine data from publicly
                    available sources, and from our different e-mail, website,
                    and personal interactions with you (this includes
                    information collected across our different websites such as
                    our careers and corporate sites and information collected
                    when you sign-up or log on to our sites or connect to our
                    sites using your social media credentials (such as
                    LinkedIn). We combine this data to better assess your
                    experience with MGHL and to perform the other activities
                    described throughout our privacy policy.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="mb-2">
                Do you use any cookies from third party companies?
              </h4>
              <p>
                Some cookies, web beacons and other tracking and storage
                technologies that we use are from third party companies (third
                party cookies), such as Facebook, Google Analytics, Microsoft,
                Marketo Munchkin Tracking, Twitter, Knotch, YouTube, Instagram,
                Yoptima and Linkedin Analytics to provide us with web analytics
                and intelligence about our sites which may also be used to
                provide measurement services and target ads.
              </p>
              <p>
                {" "}
                These companies use programming code to collect information
                about your interaction with our sites, such as the pages you
                visit, the links you click on and how long you are on our sites.
                This code is only active while you are on MGHL website.
              </p>
              <p>
                For more information on how these companies collect and use
                information on our behalf, please refer to their privacy
                policies: Facebook at{" "}
                <a
                  className="web-default"
                  href="https://www.facebook.com/policy.php"
                >
                  Facebook Data Policy
                </a>
                , Google (including YouTube) at{" "}
                <a
                  className="web-default"
                  href="https://www.google.com/intl/en/policies/"
                >
                  Google Privacy &amp; Terms
                </a>{" "}
                Google Privacy &amp; Terms, Microsoft at{" "}
                <a
                  className="web-default"
                  href="https://privacy.microsoft.com/en-us/privacystatement"
                >
                  Microsoft Privacy Statement
                </a>
                , Marketo at{" "}
                <a
                  className="web-default"
                  href="https://www.marketo.com/trust/legal/privacy/"
                >
                  Marketo Privacy Policy
                </a>
                , Linkedin at{" "}
                <a
                  className="web-default"
                  href="https://www.linkedin.com/legal/privacy-policy"
                >
                  Linkedin Privacy Policy
                </a>
                , Twitter at{" "}
                <a
                  className="web-default"
                  href="https://twitter.com/en/privacy"
                >
                  Twitter Privacy Policy
                </a>
                , Knotch at{" "}
                <a className="web-default" href="https://knotch.com/privacy/">
                  Knotch Privacy Policy
                </a>
                , Instagram at{" "}
                <a
                  className="web-default"
                  href="https://help.instagram.com/519522125107875"
                >
                  Instagram Data Policy
                </a>{" "}
                and Yoptima at{" "}
                <a
                  className="web-default"
                  href="http://www.yoptima.com/privacy-policy"
                >
                  Yoptima Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-2">
                Does MGHL use any tracking technologies similar to cookies?
              </h4>
              <p>
                We may also use web beacons (including conversion pixels) or
                other technologies for similar purposes as above and we may
                include these on our sites, in marketing e-mail messages or our
                newsletter, affiliated. websites, to determine whether messages
                have been opened and links clicked on. Web beacons do not place
                information on your device, but they may work in conjunction
                with cookies to monitor website activity. The information
                provided below about cookies also applies to web beacons and
                similar technologies. Conversion pixels are small codes located
                on a particular web page which are triggered when someone visits
                a page resulting in an increase in the conversion count.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-2">
                What if I don’t want cookies or similar tracking technologies?
              </h4>
              <p>
                You can adjust your cookie settings through our cookie consent
                program. If you want to remove existing cookies from your
                device, you can do this using your browser options. If you want
                to block future cookies being placed on your device, you can use
                our cookie consent program.
              </p>
              <p>
                Please bear in mind that deleting and blocking cookies may have
                an impact on your user experience.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-2">What types of cookies does the site use?</h4>
              <p>
                The cookies used on MGHL sites have been categorized below.
                However, it is important to note that not all cookies may be
                used in all jurisdictions or websites. A list of the categories
                of cookies used on this website is set out below.
              </p>
              <ul className="default_setting">
                <li>
                  <h6 className="mb-2">Strictly Necessary cookies</h6>
                  <p>
                    These cookies are essential to enable you to move around the
                    site and use its features, such as accessing secure areas of
                    the site. Without these cookies, services you have asked for
                    cannot be provided.
                  </p>
                </li>
                <li>
                  <h6 className="mb-2">First party analytics cookies</h6>
                  <p>
                    These cookies allow us to employ data analytics so we can
                    measure and improve the performance of our site and provide
                    more relevant content to you. These cookies don't collect
                    information that identifies a visitor down to an individual
                    level that is available to us. These cookies are not passing
                    personally identifiable information to any external third
                    party other than in limited cases when we engage a service
                    provider to act on our behalf but who is then unable to use
                    the data for their own purposes. These include Adobe’s
                    Analytics, Target and Audience Manager; Content square and
                    Demand base.
                  </p>
                </li>
                <li>
                  <h6 className="mb-2">Performance cookies</h6>
                  <p>
                    Performance cookies are generally third-party cookies from
                    vendors we work with or who work on our behalf that collect
                    information about your visit and use of the MGHL website,
                    for instance which pages you visit the most often, and if
                    you get error messages from web pages. These cookies don't
                    collect information that identifies a visitor. All
                    information these cookies collect is anonymous and is only
                    used to improve how the website works. Third party vendors
                    may have access to this data and may use it to improve their
                    overall services and offerings.
                  </p>
                </li>
                <li>
                  <h6 className="mb-2">Functionality cookies</h6>
                  <p>
                    These cookies allow a site to remember choices you make
                    (such as your username, language or the region you are in)
                    and provide more enhanced, personal features.
                  </p>
                  <p>
                    These cookies cannot track your browsing activity on other
                    websites. They don’t gather any information about you that
                    could be used for advertising or remembering where you’ve
                    been on the Internet outside our site.
                  </p>
                </li>
                <li>
                  <h6 className="mb-2">Advertising and social media cookies</h6>
                  <p>
                    Advertising and social media cookies (including web beacons
                    and other tracking and storage technologies) are used to:
                  </p>
                  <ol className="mb-3">
                    <li>
                      deliver advertisements more relevant to you and your
                      interests;
                    </li>
                    <li>limit the number of times you see an advertisement;</li>
                    <li>
                      help measure the effectiveness of the advertising
                      campaign;
                    </li>
                    <li>retargeting to MGHL websites/information and</li>
                    <li>
                      understand people’s behavior after they view an
                      advertisement. They are usually placed on behalf of
                      advertising networks with the site operator’s permission.
                    </li>
                  </ol>
                  <p>
                    They remember that you have visited a site and quite often
                    they will be linked to site functionality provided by the
                    other organization. This may impact the content and messages
                    you see on other websites you visit.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p>
                If you have any questions now or during your visit, please
                submit your request through our Contact Us form. In addition, to
                find the MGHL affiliate in your country, visit our Office
                Directory page.
              </p>
              <p>
                You can adjust your cookie settings at any time from our cookie
                consent program.
              </p>
            </div>
          </motion.article>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
};

export default CookiePolicy;
