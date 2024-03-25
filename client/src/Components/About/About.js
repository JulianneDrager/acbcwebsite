import React from "react";
import AboutStyles from "./About.module.css";
import useMediaQuery from "services/useMediaQuery";
import AboutDesktop from "./AboutDesktop";
import MeetTeamCard from "./MeetTheTeamSection/MeetTeamCard";
import MeetTheTeamData from "./MeetTheTeamSection/MeetTeamData";
import HeadShots from "./HeadShots";

const About = (props) => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = AboutStyles.mainContainer;
  const titleContainer = AboutStyles.titleContainer;
  const contentContainer = AboutStyles.contentContainer;
  const introContainer = AboutStyles.introContainer;
  const HeadShotsContainer = AboutStyles.HeadShotsContainer;

  const spanText = AboutStyles.spanText;

  // Map function to show the accordion for MEET THE TEAM section.
  const MeetTheTeamMap = MeetTheTeamData.map((item, index) => {
    return <MeetTeamCard key={index} {...item} />;
  });
  // ---------------------------------------------------------------

  return (
    <>
      {!matchedDesktop && (
        <main id="team" className={mainContainer}>
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
              {MeetTheTeamMap[0]}
              {/* ------------------------------------------------------------- */}

              {/* Head Shot Section ------------------------------------------- */}
              <div className={HeadShotsContainer}>{<HeadShots />}</div>
              {/* ------------------------------------------------------------- */}
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
      )}

      {matchedDesktop && <AboutDesktop />}
    </>
  );
};

export default About;
