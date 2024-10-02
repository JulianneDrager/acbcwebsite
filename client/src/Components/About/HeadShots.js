import React, { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Button,
  useAccordionButton,
} from "react-bootstrap";
import AboutStyles from "./About.module.css";

import HeadShotCard from "./Headshots/HeadshotCard";
import HeadShotData from "./Headshots/HeadshotData";
import { useMediaQuery } from "@mui/material";

const HeadShots = (props) => {
  const matched728 = useMediaQuery("(min-width: 699px)");
  const matched1200 = useMediaQuery("(min-width: 1199px)");

  const coFoundersTitle = AboutStyles.coFoundersTitle;
  const blackLine = AboutStyles.blackLine;
  const HeadShotReadMoreCoFoundersBtn =
    AboutStyles.HeadShotReadMoreCoFoundersBtn;
  const directorsTitle = AboutStyles.directorsTitle;
  const whiteLine = AboutStyles.whiteLine;
  const headShotDiv = AboutStyles.headShotDiv;
  const headShotWrapper = AboutStyles.headShotWrapper;
  const mainABout = AboutStyles.mainABout;

  // Map function to show the accordion for MEET THE TEAM section.
  const HeadShotMap = HeadShotData.map((item, index) => {
    return <HeadShotCard key={index} {...item} />;
  });
  // ---------------------------------------------------------------

  // Function to toggle the read more button
  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <div style={{ textAlign: "center" }}>
        <Button
          type="button"
          onClick={decoratedOnClick}
          className={HeadShotReadMoreCoFoundersBtn}
        >
          {/* {children} */}
          {isCurrentEventKey ? "CLOSE" : "READ MORE"}
        </Button>
      </div>
    );
  };

  // CO-FOUNDERS Accordion  -------------------------------------------------------------------
  const ReadMoreCoFounders = (
    <Accordion defaultActiveKey="0" alwaysOpen={false}>
      {/* shows the extended text when button is clicked  -----------------*/}

      <Accordion.Collapse eventKey="1">
        <>
          {/* Mitisi head shot  ----------------------------------------------------*/}
          {HeadShotMap[2]}
          {/* --------------------------------------------------------------*/}
        </>
      </Accordion.Collapse>
      <ContextAwareToggle eventKey="1"></ContextAwareToggle>
    </Accordion>
  );

  // DIRECTORS Accordion  ----------------------------------------------------------------------
  // const ReadMoreDirectors = (
  //   <Accordion defaultActiveKey="0" alwaysOpen={false}>
  //     {/* shows the extended text when button is clicked  -----------------*/}

  //     <Accordion.Collapse eventKey="1">
  //       <>
  //         {/* Christy head shot  ------------------------------------------------------*/}
  //         {HeadShotMap[4]}
  //         {/* --------------------------------------------------------------*/}

  //         {/* Angela head shot  ----------------------------------------------------*/}
  //         {/* {HeadShotMap[5]} */}
  //         {/* --------------------------------------------------------------*/}
  //       </>
  //     </Accordion.Collapse>
  //     <ContextAwareToggle eventKey="1"></ContextAwareToggle>
  //   </Accordion>
  // );

  return (
    <>
      {/* MOBILE ---------------------------- */}
      {!matched728 && (
        <main id="about">
          {/* ACBC FOUNDERS Title  699---------------------------------------------------- */}
          <h1 className={coFoundersTitle}>ACBC FOUNDER </h1>
          <div className={whiteLine}></div>
          {/* ------------------------------------------------------------- */}

          {/* Brandis head shot  -----------------------------------------------------*/}
          {HeadShotMap[0]}

          {/* Co-FOUNDERS Title  699---------------------------------------------------- */}
          <h1 className={coFoundersTitle}>Co-FOUNDERs </h1>
          <div className={whiteLine}></div>

          {/* Keri head shot  ------------------------------------------------------*/}
          {HeadShotMap[1]}
          {/* --------------------------------------------------------------*/}

          {/* {ReadMoreCoFounders} */}

          {/* DIRECTORS Title  ------------------------------------------------------------ */}
          <hr style={{ border: "none", margin: "1rem" }} />

          <h1 className={directorsTitle}>ACBC DIRECTORS</h1>
          <div className={blackLine}></div>
          {/* ------------------------------------------------------------- */}

          {/* Christy head shot  -----------------------------------------------------*/}
          {HeadShotMap[4]}
          <br />
          {/* Faith head shot  -----------------------------------------------------*/}
          {HeadShotMap[5]}
          {/* ------------------------------------------------------------- */}

          {/* {ReadMoreDirectors} */}
        </main>
      )}
      {/* LABTOP ---------------------------- */}
      {matched1200 && (
        <main className={mainABout}>
          {/* 1200px ACBC FOUNDERS Title +1200 -------------------------------------------------- */}
          <h1 className={coFoundersTitle}>ACBC Leaders</h1>
          <div className={whiteLine}></div>
          {/* ------------------------------------------------------------- */}

          <div className={headShotWrapper}>
            {/* Brandis head shot  -----------------------------------------------------*/}
            <div className={headShotDiv}>{HeadShotMap[6]}</div>
            {/* Keri head shot  -----------------------------------------------------*/}
            <div className={headShotDiv}>{HeadShotMap[7]}</div>
            {/* Misti head shot  -----------------------------------------------------*/}
            {/* <div className={headShotDiv}>{HeadShotMap[2]}</div> */}
          </div>
          {/* DIRECTORS Title  ------------------------------------------------------------ */}

          <h1 className={directorsTitle}>ACBC DIRECTOR</h1>
          <div className={blackLine}></div>
          {/* ------------------------------------------------------------- */}

          <div className={headShotWrapper}>
            {/* Christy head shot  -----------------------------------------------------*/}
            <div className={headShotDiv}>{HeadShotMap[10]}</div>
            {/* Faith head shot  -----------------------------------------------------*/}
            <div className={headShotDiv}>{HeadShotMap[9]}</div>
          </div>
          {/* ------------------------------------------------------------- */}
        </main>
      )}

      {/* DESKTOP ---------------------------- */}
      {!matched1200 && matched728 && (
        <main id="about">
          {/* 1200px ACBC FOUNDERS Title  -1200 ---------------------------------------------------- */}
          <h1 className={coFoundersTitle}>ACBC Leaders </h1>
          <div className={whiteLine}></div>
          {/* ------------------------------------------------------------- */}

          <div className={headShotWrapper}>
            {/* Brandis head shot  -----------------------------------------------------*/}
            <div className={headShotDiv}>{HeadShotMap[0]}</div>
            {/* Keri head shot  -----------------------------------------------------*/}
            <div className={headShotDiv}>{HeadShotMap[1]}</div>
            {/* Misti head shot  -----------------------------------------------------*/}

            {/* <div className={headShotDiv}>{HeadShotMap[2]}</div> */}
          </div>
          {/* DIRECTORS Title  ------------------------------------------------------------ */}

          <h1 className={directorsTitle}>ACBC DIRECTORS</h1>
          <div className={blackLine}></div>
          {/* ------------------------------------------------------------- */}

          <div className={headShotWrapper}>
            {/* Christy head shot  -----------------------------------------------------*/}
            <div className={headShotDiv}>{HeadShotMap[4]}</div>
            {/* Faith head shot  -----------------------------------------------------*/}
            <div className={headShotDiv}>{HeadShotMap[5]}</div>
          </div>
          {/* ------------------------------------------------------------- */}
        </main>
      )}
    </>
  );
};

export default HeadShots;
