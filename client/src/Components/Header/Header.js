import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import {
  Accordion,
  AccordionContext,
  useAccordionButton,
} from "react-bootstrap";
import LikedIn from "../../assets/mobile/header/linkedIn.png";
import HeaderStyles from "./Header.module.css";
import useMediaQuery from "services/useMediaQuery";
import logoImg from "../../assets/images/header/logo.svg";
import videoUrl from "../../assets/videos/acbc-video.mp4";
import posterUrl from "../../assets/images/header/screenshot.png";

const Header = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = HeaderStyles.mainContainer;
  const headerRow = HeaderStyles.headerRow;
  const logo = HeaderStyles.logo;
  const titleContainer = HeaderStyles.titleContainer;
  const link = HeaderStyles.link;
  const contentContainer = HeaderStyles.contentContainer;
  const introContainer = HeaderStyles.introContainer;
  const readMoreButton = HeaderStyles.readMoreButton;

  const spanText = HeaderStyles.spanText;
  const bootCampText = HeaderStyles.bootCampText;
  const acbcSubTitle = HeaderStyles.acbcSubTitle;
  const parentheses = HeaderStyles.parentheses;

  const leftParentheses = <span className={parentheses}> (</span>;
  const leftParenthesesNoSpace = <span className={parentheses}>(</span>;
  const rightParentheses = <span className={parentheses}>) </span>;
  const rightParenthesesNoSpace = <span className={parentheses}>)</span>;
  const dash = <span className={parentheses}>-</span>;
  const headerIntroParagraph = HeaderStyles.headerIntroParagraph;
  const headerSubParagraph = HeaderStyles.headerSubParagraph;
  const missionText = HeaderStyles.missionText;
  const brTag = HeaderStyles.brTag;

  const url =
    "https://www.linkedin.com/company/access-coordinator-boot-camp/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3ByhbqHBk5RUuljGfH09I48A%3D%3D";

  // Function to toggle the read more button
  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <Button
        type="button"
        style={{
          display: isCurrentEventKey ? "none" : "inline",
          // margin: "-19px 0px 14px 0",
        }}
        onClick={decoratedOnClick}
        className={readMoreButton}
      >
        {/* {children} */}
        {isCurrentEventKey ? "CLOSE" : "READ MORE"}
      </Button>
    );
  };
  //-----------------------------------------------------------------------------------

  // Accordion to show WHO IS ACBC text when read more btn is clicked.
  const ReadMoreAccordion = (
    <>
      {!matchedDesktop && (
        <Accordion defaultActiveKey="0" alwaysOpen={false}>
          <br className={brTag} />
          <h1 className={acbcSubTitle}>Who Is ACBC:</h1>
          <>
            <p className={headerIntroParagraph}>
              Access Coordinator
              <br />
              Boot Camp {leftParentheses}ACBC{rightParenthesesNoSpace},
              <br />a dedicated 501{leftParenthesesNoSpace}c
              {rightParenthesesNoSpace}
              {leftParenthesesNoSpace}3{rightParentheses}
              <br />
              non{dash}profit organization
              <br />
              catering to professionals across
              <br />
              all medical specialties responsible
              <br />
              for prescribing biologic and systemic
              <br />
              medications to patients with auto{dash}
              <br />
              immune diseases.
            </p>
          </>

          <ContextAwareToggle eventKey="1"></ContextAwareToggle>

          <Accordion.Collapse eventKey="1">
            <p className={headerSubParagraph}>
              Our organization comprises a diverse team of medical experts well
              {dash}versed in biologics, possessing the expertise to effectively
              disseminate crucial information and streamline processes, all
              aimed at enhancing patient care.
            </p>
          </Accordion.Collapse>
        </Accordion>
      )}
    </>
  );

  // -----------------------------------------------------------------------------------

  return (
    <>
      <main className={mainContainer}>
        <header className={headerRow}>
          <Image src={logoImg} className={logo} />

          <a href={url}>
            <Image src={LikedIn} className={link} />
          </a>
        </header>

        <section className={contentContainer}>
          <div className={introContainer}>
            {/* Access Coordinator Main Title. ------------------------------  */}
            <div className={titleContainer}>
              <h1>
                Access<span className={spanText}> Coordinator</span> <br />
                <span className={bootCampText}>Boot Camp</span>
              </h1>
            </div>
            {/* -------------------------------------------------------------- */}

            {/* Video Player */}

            <video
              controls
              autoPlay
              muted
              playsInline
              style={{ width: "100%" }}
              poster={posterUrl}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* ACBC Mission Statement -------------------------------------- */}
            <h1 className={acbcSubTitle}>ACBC Mission Statement:</h1>

            <p className={missionText}>
              Our mission is to introduce and educate healthcare professionals
              from all specialties to the realm of specialty medications, arming
              them with the essential tools and resources required to secure
              access to medications that will profoundly improve the lives of
              their patients.
            </p>
            {/* -------------------------------------------------------------- */}

            {/* Who is ACBC text ----------------------------------------------*/}
            {ReadMoreAccordion}

            {matchedDesktop && (
              <>
                <h1 className={acbcSubTitle}>Who IS ACBC:</h1>
                <p className={headerIntroParagraph}>
                  Access Coordinator Boot Camp {leftParentheses}ACBC
                  {rightParenthesesNoSpace}, a dedicated 501
                  {leftParenthesesNoSpace}c{rightParenthesesNoSpace}
                  {leftParenthesesNoSpace}3{rightParentheses}
                  non{dash}profit organization catering to professionals across
                  all medical specialties responsible for prescribing biologic
                  and systemic medications to patients with auto{dash}
                  immune diseases. Our organization comprises a diverse team of
                  medical experts well{dash}versed in biologics, possessing the
                  expertise to effectively disseminate crucial information and
                  streamline processes, all aimed at enhancing patient care.
                </p>
              </>
            )}
            {/* -------------------------------------------------------------- */}
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
      {/* )} */}
    </>
  );
};

export default Header;
