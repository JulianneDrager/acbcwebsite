import React from "react";
import AboutStyles from "./About.module.css";
import HeadShots from "./HeadShots";

const AboutDesktop = (props) => {
  const mainContainer = AboutStyles.mainContainer;
  const titleContainer = AboutStyles.titleContainer;
  const contentContainer = AboutStyles.contentContainer;
  const introContainer = AboutStyles.introContainer;
  const meetTeamTitle = AboutStyles.meetTeamTitle;
  const meetTeamBody = AboutStyles.meetTeamBody;
  const parentheses = AboutStyles.parentheses;
  const spanText = AboutStyles.spanText;
  const HeadShotsContainer = AboutStyles.HeadShotsContainer;

  const dash = <span className={parentheses}>-</span>;
  return (
    <>
      <main id="about" className={mainContainer}>
        <section className={contentContainer}>
          <div className={introContainer}>
            {/* Teamwork Teamwork Main Title ----------------------------------*/}
            <div className={titleContainer}>
              <h3>
                Team work, <span className={spanText}>Dream</span> Work
                <br />
              </h3>
            </div>
            {/* -------------------------------------------------------------- */}

            {/* MEET THE TEAM SECTION.  ---------------------------------------*/}

            <h1 className={meetTeamTitle}>Meet Our Team</h1>
            <p className={meetTeamBody}>
              At ACBC we take pride in our highly specialized team of
              professionals. We are dedicated to providing ongoing education to
              our peers of various specialties. Expanding the knowledge base on
              all aspects of access to specialty medications.
            </p>
            {/* ------------------------------------------------------------- */}

            <hr style={{ border: "none", margin: ".4rem" }} />

            {/* shoes the extended text when button is clicked  ---------------*/}
            <p className={meetTeamBody}>
              Our team is comprised of specialists from multiple medical
              specialties including rheumatology, dermatology, allergy,
              asthma,pulmonary, neurology, dermatology, and gastroenterology. We
              are dedicated to providing up to date trends on the ever-changing
              insurance and prior authorization landscape to enhance and
              streamline the medication access experience.
            </p>
            {/* ------------------------------------------------------------- */}
            {/* ------------------------------------------------------------- */}
            <div className={HeadShotsContainer}>
              {/* Head Shot Section ------------------------------------------- */}
              {<HeadShots />}
              {/* ------------------------------------------------------------- */}
            </div>
          </div>
        </section>
        <section
          style={{
            padding: ".3rem",
            backgroundColor: "#F1B721",
            width: "100%",
          }}
        ></section>
      </main>
    </>
  );
};

export default AboutDesktop;
