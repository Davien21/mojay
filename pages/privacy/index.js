import React from "react";
import { bg7 } from "../../assets/imgs";

import Image from "next/image";
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
        <Image layout="fill" src={bg7} alt="" className="img-fluid" />
        <div className={`image_bg_content mt-5 text-shadow`}>
          <div className="def-container-lg my-5 pt-md-5">
            <h1>Our Privacy policy</h1>
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
              Mojay Global Holding Limited ( "
              <span className="font-weight-bold">Mojay</span>”,
              <span className="font-weight-bold">we</span>”, “
              <span className="font-weight-bold">us</span>” or “
              <span className="font-weight-bold">our</span>”), a holding company
              registered in the DIFC with its address at N2001, Emirates
              Financial Towers, DIFC, Dubai, UAE, values your privacy and
              recognizes the importance of protecting the privacy of all
              individuals whose personal data it processes, whether collected
              directly or indirectly through its partners and affiliates ( “
              <span className="font-weight-bold">Data</span>” “
              <span className="font-weight-bold">Subjects</span>”, “
              <span className="font-weight-bold">you</span>” or “
              <span className="font-weight-bold">your</span>”).
            </p>
            <p>
              This privacy policy (this “
              <span className="font-weight-bold">Policy</span>”) aims to provide
              Data Subjects with an understanding regarding how we handle their
              data, including our data collection practices. We aim to provide
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
              third parties.
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
              reasonable judgment and common sense.
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
            <ol className="font-weight-bold">
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
              <ul className="default_setting">
                <li>
                  Vendors and partners (including consultants) with whom we do
                  business;
                </li>
                <li>
                  Current, former or prospective staff and employees of Mojay,
                  including any managing director, director and independent
                  director, temporary worker, intern, other non-permanent
                  employee, contractor or consultant of Mojay or the Mojay Group
                  (“Workers”);
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
              <p className="my-3">We collect your data:</p>
              <ul className="default_setting">
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
                and applications or other forms in soft and hard formats.
              </p>
              <p>
                Where you have provided us with the data of third parties,
                including your next of kin, dependents and emergency contacts,
                you confirm that you have shared with them a copy of this Policy
                and they have consented to your giving us their data in
                accordance therewith.
              </p>
              <p>
                Our collection of data may be legally or contractually required
                for the provision of our services.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>2.</span>
                <span className="col-auto">Categories of data</span>
              </div>
              <p>We process standard data, which includes, as applicable:</p>
              <ul className="default_setting">
                <li className="mb-2">
                  <span className="col-auto underline-text">
                    Identity data:
                  </span>
                  <span className="">
                    This includes first name, last name, nationality, address,
                    title, marital status, gender and date of birth, national
                    identifiers (copies of passport and identity card).
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">Contact data:</span>
                  <span className="">
                    This includes first name, last name, nationality, address,
                    title, marital status, gender and date of birth, national
                    identifiers (copies of passport and identity card).
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">
                    Financial data
                  </span>
                  <span className="">
                    Financial transactions entered with all customers and
                    employees of Mojay and its subsidiaries (the “
                    <b>Mojay Group</b>”) and our other Affiliates for the
                    purpose of conducting financial auditing.
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">
                    Communications data:
                  </span>
                  <span className="">
                    This includes details of any communication we have had with
                    you, such as complaints or incidents.
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">
                    Security clearance data
                  </span>
                  <span className="">
                    This includes the results of any searches undertaken to
                    ascertain whether the information provided by you is
                    accurate, basic checks and higher security clearance details
                    depending on the nature of your job or our relationshipo.
                  </span>
                </li>
              </ul>
              <p className="font-italic my-2">
                More specifically with respect to Workers
              </p>
              <ul className="default_setting">
                <li>
                  Information about your employment, such as your role,
                  designation, salary, payment details, attendance, overtime,
                  working hours, contractual and legal entitlements and usage of
                  such entitlements.
                </li>
                <li>
                  Information relating to your qualifications, job application,
                  employment references, right to work information and details
                  of any criminal convictions that you declare.
                </li>
                <li>
                  Workers’ bank account and related payment details, salary
                  payment records.
                </li>
                <li>
                  Data relating to Workers’ end-of-service benefits, including
                  membership in any end-of-service compensation schemes to which
                  you have been enrolled (e.g. the DEWS scheme).
                </li>
                <li>
                  Data relating to Workers’ taken annual, sick, maternal, or
                  other leaves and details relating to your leave entitlements
                  and rights: including leave applications and the exercise of
                  other related rights.
                </li>
                <li>
                  Any other data required to obtain visas, flight tickets and
                  other related immigration papers, and insurance and other
                  related papers, for our workers and our workers’ spouses and
                  dependents.
                </li>
                <li>
                  Data pertaining to your education, skills, certifications,
                  employment story, curriculum vitae, training requirements,
                  training story, course completed/needed, performance
                  evaluations/reviews and data relating to the recruiting
                  process.
                </li>
                <li>
                  Data to enroll you into competitions and for other related
                  administrative purposes.
                </li>
                <li>
                  Complaints/grievances submitted by or against you, and
                  investigations to which you may be party or witness.
                </li>
                <li>
                  Disciplinary records and documentation concerning you or to
                  which you may be related.
                </li>
                <li>
                  Photos and CCTV images from our landlords or taken using our
                  own CCTV systems (if any).
                </li>
                <li>
                  Data related to your use of Mojay’s IT system and resources,
                  to the extent legally permitted.
                </li>
                <li>
                  Health data submitted by you either directly or through a
                  medical certificate or doctor’s note, including with respect
                  to any sick leaves taken, and work fitness notes.
                </li>
                <li>
                  Accident records with respect to any occupational injuries.
                </li>
              </ul>
              <p className="my-2">
                However, in certain circumstances, we may need to collect, or
                request your special category of personal data for employment
                related purposes: for example, data about your racial / ethnic
                origin, gender and disabilities for the purposes of equal
                opportunities monitoring, to comply with anti-discrimination
                laws and for government reporting obligations and data regarding
                your health check-up and physical or mental condition data so
                that we can consider how we might accommodate you in your role.
                We might also process data about you to provide health and
                insurance benefits to you and your dependents.
              </p>
              <p>
                If we collect materially different data or materially change how
                we use your data, we will notify you and modify this Policy.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>3.</span>
                <span className="col-auto">How we use your data</span>
              </div>
              <p>
                We may use your data for the purposes set out in this Policy as
                well as for any legal reasons that may apply, some of which we
                have set out herein.
              </p>
              <p>
                We are legally obliged to have a lawful reason for processing
                your data, which we process if:
              </p>
              <ul className="default_setting">
                <li className="mb-2">
                  You have provided your consent, whether to us or our
                  Affiliates, to the processing of your data for the stated
                  purpose.
                </li>
                <li className="">
                  <p>
                    Processing of your data is necessary to perform or enter a
                    contract with you, this includes, among others:
                  </p>
                  <ol style={{ listStyleType: "lower-alpha" }}>
                    <li>
                      drafting and entering contracts, non-disclosure agreements
                      and licensing agreements;
                    </li>
                    <li>preparing proposals for prospective investors; and</li>
                    <li>
                      applying for employment visas and visas for your
                      dependents, preparing offer letters and obtaining medical
                      insurance for you and your dependents (depending on our
                      legal and contractual obligations).
                    </li>
                    <li>
                      drafting and entering contracts, non-disclosure agreements
                      and licensing agreements;
                    </li>
                  </ol>
                </li>
                <li className="">
                  Processing is necessary to protect your vital interests or
                  that of another natural person.
                </li>
                <li className="">
                  Processing is necessary for legitimate interests pursued by us
                  or any of our Affiliates to whom your data was made available,
                  except where overridden by your interests or rights (please
                  see section 4 for more information regarding this).
                </li>
                <li className="">
                  Processing is required to comply with applicable law to which
                  we are subject: e.g. providing required details on the DIFC
                  Portal for registration and compliance purposes.
                </li>
              </ul>
              <p className="font-italic my-2">
                With respect to Workers specifically, we use your data:
              </p>
              <ul className="default_setting">
                <li>
                  For the purpose of carrying out the obligations and exercising
                  the specific rights of Mojay or you in the context of
                  performance of your work contract, including but not limited
                  to recruitment, visa or work permit processing, providing you
                  access to our premises and services for your role and managing
                  our human resources processes.
                </li>
                <li>
                  To arrange payment of your salary and other legal benefits, as
                  well as administer your statutory and contractual leave
                  entitlements such as annual and sick leave.
                </li>
                <li>
                  To assess your performance, conduct salary reviews and deal
                  with work-related disputes.
                </li>
                <li>
                  To identify and provide the training and developments needs
                  required for your work.
                </li>
                <li>
                  To monitor your compliance with Mojay’s policies and
                  procedures and to ensure the security of our premises, IT
                  systems and staff.
                </li>
              </ul>
              <p>
                Where workers are using Mojay’s IT resources for limited
                personal purposes, they are required to label any personal email
                with the term “Private” or “Personal” in the subject line of the
                email or the name of the relevant folder. To the extent legally
                permissible, the workers’ professional and personal use of
                Mojay’s IT resources may be processed, including recorded,
                stored and analyzed for the following purposes:
              </p>
              <ul>
                <li>Identifying, analyzing, and correcting any errors.</li>
                <li>
                  Ensuring the security and integrity of Mojay’s IT resources.
                </li>
                <li>
                  Ensuring use of Mojay’s IT resources in compliance with
                  Mojay’s policies, particularly its data processing policies.
                </li>
                <li>Improving Mojay’s IT resources.</li>
                <li>
                  Investigating any suspected or actual technical and security
                  breaches, as well as any suspected or actual breaches of your
                  contractual and legal obligations (each, a “Security
                  Incident”).
                </li>
              </ul>
              <p>
                Where a Security Incident takes place, Mojay may identify the
                related IT device, including your work laptop or work mobile, as
                associated with such incident. Mojay will be permitted to
                confiscate such IT device for the purpose of conducting its
                investigation and for the duration of its investigation, as well
                as for the duration of any subsequent formal investigation by
                the public authorities, and the following data may be processed:
              </p>
              <ul>
                <li>Data and time of each data.</li>
                <li>
                  Email addresses and IP addresses to which the IT device was
                  sending, or from which it was receiving, data.
                </li>
                <li>Website browsing story.</li>
                <li>
                  Folders and files, including downloaded/uploaded folders and
                  files.
                </li>
              </ul>
              <p className="my-2">
                Except for the cases permitted by law and in this Privacy
                Notice, Mojay will not access the content of any emails or
                electronic folders with titles including the term “Personal” or
                “Private”.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>4.</span>
                <span className="col-auto">Legitimate interests</span>
              </div>
              <p>
                Where we are processing your data for legitimate interests, we
                will always take into account your interests, rights and
                freedoms. Our legitimate interests include:
              </p>
              <ul className="default_setting">
                <li className="mb-2">
                  Authentication purposes, to verify the authenticity of the
                  information provided by you;
                </li>
                <li className="">
                  Conducting background checks and diligence checks for
                  anti-money laundering and other regulatory purposes;
                </li>
                <li className="">
                  Managing access to our offices and systems and for security
                  reasons;
                </li>
                <li className="">
                  [Generally, internal and external audit purposes, including
                  audits to support our finance department;]
                </li>
                <li className="">
                  With respect to business contacts, for the purpose of
                  obtaining/providing services, depending on the nature of the
                  business;
                </li>
                <li>To consider prospective candidates for recruitment;</li>
                <li>
                  For administration purposes relating to our employees and
                  those of our Affiliates including recording any incidents, and
                  other related internal administrative purposes;
                </li>
                <li>
                  To communicate with the Data Subjects regarding their provided
                  data, employment or prospective employment or otherwise their
                  relationship with the Mojay Group;
                </li>
                <li>
                  To maintain dependents, emergency contact details and nominee
                  details for any dues from us to ensure we are able to contact
                  our employee’s family member where necessary to perform our
                  obligations towards the employee (e.g. in emergency
                  circumstances or to provide benefits as per the employment
                  contract);
                </li>
                <li>To prevent and investigate criminal acts;</li>
                <li>
                  Video surveillance of the offices to collect evidence in case
                  of attacks, fraud or other policy or legal breaches;
                </li>
                <li>
                  To exercise or defend our legal rights and comply with court
                  orders; and
                </li>
                <li>
                  To keep your data safe and secure. Using your data for
                  security purposes (e.g. ensuring IT security) or to
                  investigate possible fraud or other violations of this Policy
                  and other contractual obligations.
                </li>
              </ul>
              <p className="">
                We may process your data without your knowledge or consent, in
                compliance with the above rules, where this is required or
                permitted by law.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>5.</span>
                <span className="col-auto">Sharing of data</span>
              </div>
              <p>
                Where we share your data with third parties, we always ensure
                appropriate measures are taken to protect your data in
                compliance with applicable laws.
              </p>
              <p>
                We share your data internally purely on a need-to-know basis. We
                share your data with our Affiliates, with persons representing
                you or arranging services on your behalf, as well as with other
                persons to help us provide you with our services or from whom we
                need information to process your claims or entitlements. We also
                share your information where required to by law or to protect
                our legal rights.
              </p>
              <p>
                In certain instances, we share your data with the following
                persons for the purposes set out in this Policy:
              </p>
              <ul className="default_setting">
                <li className="mb-2">
                  Other companies belonging to the Mojay Group;
                </li>
                <li className="">
                  Entities to which our services are outsourced;
                </li>
                <li className="">
                  Our partners and other third parties that assist us in our
                  provision of products and services, including agents working
                  on our behalf, reinsurers and insurers, actuaries, auditors,
                  financial, legal and tax consultants, IT service providers,
                  AML and CFT detection companies, data protection supervisory
                  authorities and other regulators;
                </li>
                <li className="">
                  Governmental entities to the extent required to perform our
                  contractual obligations: e.g. to obtain your employment visa
                  and visas for your dependents or other work-permit and
                  residency documents;
                </li>
                <li className="">
                  DIFC labor department in accordance with our legal and
                  contractual rights with respect to your employment;
                </li>
                <li>
                  Any entity which purchases all or part of the Mojay Group;
                </li>
                <li>
                  Persons with whom we are permitted or obliged to share your
                  data by applicable law, e.g. the DIFC Authority in certain
                  circumstances;
                </li>
                <li>
                  To assist law-enforcement authorities in performing their
                  duties, including any investigations that may concern you; and
                </li>
                <li>Public authorities in accordance with applicable laws.</li>
                <li>To prevent and investigate criminal acts;</li>
                <li>
                  Video surveillance of the offices to collect evidence in case
                  of attacks, fraud or other policy or legal breaches;
                </li>
                <li>
                  To exercise or defend our legal rights and comply with court
                  orders; and
                </li>
                <li>
                  To keep your data safe and secure. Using your data for
                  security purposes (e.g. ensuring IT security) or to
                  investigate possible fraud or other violations of this Policy
                  and other contractual obligations.
                </li>
              </ul>
              <p className="">
                We may process your data without your knowledge or consent, in
                compliance with the above rules, where this is required or
                permitted by law.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>6.</span>
                <span className="col-auto">
                  Transferring data outside the DIFC
                </span>
              </div>
              <p>
                As part of a multinational group, we deal with entities in
                different jurisdictions with global presence themselves. As a
                result, where legally required or while carrying out our rights
                pursuant to this Policy, we transfer and process data inside and
                outside the DIFC. Certain countries where we process data may
                have laws less protective than those in the DIFC and the DIFC
                Data Protection Commissioner may consider them to not have an
                adequate level of data protection.
              </p>
              <p>
                Where we transfer your data outside the DIFC, we always ensure
                appropriate measures are taken to protect your data in
                compliance with applicable laws.
              </p>
              <p>
                We will only transfer your data to a jurisdiction classified as
                adequate by the DIFC DP Commissioner or otherwise where we have
                put in place adequate safeguards to protect your data. In
                particular, if none of the above apply and we wish to transfer
                your data to a jurisdiction that does not have an adequate level
                of data protection as per the DIFC Data Protection Commissioner,
                we will undertake all reasonable measures to ensure this
                protection is set out in a written agreement between us and the
                receiving entity or that otherwise, the legally required
                measures are undertaken. For more information on the safeguards
                and measures undertaken by us to protect your data, please
                contact us using the details set out under section [12].
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>7.</span>
                <span className="col-auto">Data retention </span>
              </div>
              <p>
                We will retain your data to the extent reasonably necessary to
                protect our legitimate interests, comply with our legal,
                accounting or reporting obligations, enforce our agreements with
                you or where you have requested us to retain your data for any
                other purpose (e.g. proof of employment).
              </p>
              <p>
                While determining the appropriate retention period of data, we
                take into consideration:
              </p>
              <ul className="default_setting">
                <li className="mb-2">
                  Legal and contractual requirements, including how long it is
                  reasonable to retain records to prove compliance therewith;
                </li>
                <li className="">
                  Time limitations for the making of claims relating to the
                  data;
                </li>
                <li className="">
                  Mandatory or recommended record keeping obligations by laws,
                  regulations and other advisors;
                </li>
                <li className="">
                  The purposes for which we process your data;
                </li>
                <li className="">
                  The nature, sensitivity and amount of the data;
                </li>
                <li>
                  The potential risk of harm from disclosure or unauthorized use
                  of your data; and
                </li>
                <li>
                  Whether we can achieve our purposes through other means than
                  retention.
                </li>
              </ul>

              <p className="mt-3">
                We keep a basic record of your employment with Mojay, including
                name, position, and duration of employment, for at least [10]
                years from the date of termination of your employment with
                Mojay. If you do not wish that record of your employment with
                Mojay be retained for this purpose, please inform us about this
                in writing using the contact details under section 12.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>8.</span>
                <span className="col-auto">Your data rights</span>
              </div>
              <p>
                With respect to your data, you have the following rights, among
                others:
              </p>
              <ul className="default_setting">
                <li className="mb-2">
                  <span className="col-auto underline-text">
                    • Right to withdraw consent:
                  </span>
                  <span className="">
                    Where the basis to our processing of your data is consent,
                    you have the right to withdraw such consent. Such withdrawal
                    shall not affect the legality, accuracy and validity of any
                    processing or related activities carried out before the date
                    of receipt of your withdrawal.
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">
                    • Right of access:
                  </span>
                  <span className="">
                    You have the right to ask us to provide you with information
                    relating to any data of yours processed by us. We are
                    permitted to restrict such access where legal grounds set
                    out in applicable data protection laws apply, such as, among
                    others, to protect the rights of others or avoid obstructing
                    legal inquiries, investigations and procedures. Where we
                    restrict your access to data, we will inform you of the
                    basis for such restriction.
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">
                    • Right to request rectification:
                  </span>
                  <span className="">
                    You have the right to request rectification of your data in
                    accordance with applicable laws.
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">
                    • Right to request deletion:
                  </span>
                  <span className="">
                    You have the right to request deletion of your data where
                    (a) it is no longer necessary for the purposes it was
                    collected; (b) you withdrew your consent and no other lawful
                    processing basis applies; (c) our storage is unlawful or
                    deletion is required for us to comply with applicable law;
                    or (d) you object to our processing of your data and we do
                    not have any overriding legitimate grounds to continue with
                    such processing. We are not obliged to delete any data
                    unless at least 1 (one) of the above circumstances apply and
                    we do not require your data to comply with legal
                    requirements or to establish or defend ourselves with
                    respect to any legal claims.
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">
                    • Right to object to processing:
                  </span>
                  <span className="">
                    You have the right to object to our processing of your data
                    at any time on reasonable and justifiable grounds where our
                    processing is based on a task carried out in the public
                    interest or we informed you that your data is processed for
                    legitimate interests of ours or of third parties.
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">
                    • Right to object to processing:
                  </span>
                  <span className="">
                    You have the right to object to our processing of your data
                    at any time on reasonable and justifiable grounds where our
                    processing is based on a task carried out in the public
                    interest or we informed you that your data is processed for
                    legitimate interests of ours or of third parties.
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">
                    • Right to restrict processing:
                  </span>
                  <span className="">
                    You have the right to request that we restrict processing of
                    your data if (a) you contest the accuracy of your data, for
                    as long as it takes us to verify such accuracy; (b) our
                    processing is unlawful and you oppose erasure of your data
                    but request restriction instead; (c) we no longer need your
                    data but you require them to establish, exercise or defend
                    yourself against legal claims; or (d) where you have
                    objected to our processing of your data and we are
                    establishing if we have overriding legitimate grounds to
                    continue such processing.
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">
                    • Right to data portability:
                  </span>
                  <span className="">
                    You have the right to request that we transfer the data that
                    you have provided us to any other person in a
                    machine-readable format.
                  </span>
                </li>
                <li className="">
                  <span className="col-auto underline-text">
                    • Right to object to automated processing, including
                    profiling:
                  </span>
                  <span className="">
                    We do not generally use fully automated decision-making
                    processes, including profiling. Except for limited
                    circumstances as provided by law, you have the right to
                    object to any decision made by us solely on automated
                    processing, including profiling, if such decision would
                    affect you legally or in any other serious manner, and
                    instead request that the decision is reviewed manually.
                  </span>
                </li>
              </ul>
              <p>
                Where you wish to exercise any of the above rights, please
                contact us using the details set out under section 12. We may
                request that you confirm your identity and provide further
                information to enable us to assess your request.
              </p>
              <p>
                Where your request pursuant to this section is clearly
                groundless, repetitive or excessive, we may charge a reasonable
                fee or to the extent legally permitted, refuse to comply with
                your request.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>10.</span>
                <span className="col-auto"> Non-discrimination</span>
              </div>
              <p>
                We will not discriminate or penalize you in any manner for
                exercising any of your rights pursuant to this Policy or
                applicable laws.
              </p>
              <p className="">
                Where you refuse to provide us the data necessary for engaging
                or employing you or providing you with our services, this may
                result in our inability to engage you or provide you our
                services (as applicable). Where this is the case we will inform
                you of the same.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>11.</span>
                <span className="col-auto">Security measures</span>
              </div>
              <p>
                We have undertaken all reasonable and legally required security
                measures to ensure your data is secure and prevent it from being
                accidentally lost, or used, accessed, altered or disclosed in an
                unauthorized way. We also regularly review and update such
                measures to meet new perceived threats that may arise from
                technological advances. We cannot warrant or guarantee the
                security of any data you send us.
              </p>
              <p className="">
                Where legally required to do so, we will notify you and any
                applicable regulator of any suspected or actual breach of data.
              </p>
            </div>
            <div className="mt-4">
              <div className="h5">
                <span>12.</span>
                <span className="col-auto">Security measures</span>
              </div>
              <p>
                If you have any questions, comments or complaints relating to
                this Policy or the manner in which we collect and use your data,
                please contact us using the following contact information:
              </p>
              <div className="mt-2">
                <span style={{ fontWeight: "550" }}>Contact person:</span>
                <span className="col"> Yasser Khan</span>
              </div>
              <div className="mt-1">
                <span style={{ fontWeight: "550" }}>Telephone number: </span>
                <a className="pointer col" tel="+971 564159009">
                  +971 564159009
                </a>
              </div>
              <div className="mt-1">
                <span style={{ fontWeight: "550" }}>Email Address: </span>
                <a className="pointer col" mailto="yasser@mojay.com">
                  yasser@mojay.com
                </a>
              </div>
              <div className="mt-1">
                <span style={{ fontWeight: "550" }}>Physical Address</span>
                <a
                  target="_blank"
                  className="pointer col"
                  href="https://goo.gl/maps/ZBMUJ8ax53nSQDXDA"
                >
                  N2001, Emirates Financial Towers, DIFC, Dubai, UAE
                </a>
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
