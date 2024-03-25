import React from "react";
import TrainingStyles from "./Training.module.css";
import useMediaQuery from "services/useMediaQuery";
import { Col, Container, Row } from "react-bootstrap";
import CheckListDesktopData from "./CheckListDesktopData";
import CheckListProps from "./CheckListProps";

const TrainingDesktop = () => {
  const desktopCheckList = CheckListDesktopData.map((data) => {
    return <CheckListProps key={data.id} {...data} />;
  });

  console.log(desktopCheckList);

  const mainContainer = TrainingStyles.mainContainer;
  const titleContainer = TrainingStyles.titleContainer;
  const contentContainer = TrainingStyles.contentContainer;
  const introContainer = TrainingStyles.introContainer;
  const logoDiv = TrainingStyles.logoDiv;
  const textOne = TrainingStyles.textOne;
  const textTwo = TrainingStyles.textTwo;
  const textContainer = TrainingStyles.textContainer;
  const checklistWrapper = TrainingStyles.checklistWrapper;
  const divider = TrainingStyles.divider;
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  return (
    <>
      {matchedDesktop && (
        <main id="train" className={mainContainer}>
          <section className={contentContainer}>
            <div className={introContainer}>
              <div className={titleContainer}>
                <span>NATIONAL & LOCAL </span>
                <span className={logoDiv}>IN-OFFICE TRAINING</span>
              </div>
              <h4>
                FRUSTRATED WITH THE PROCESS OF OBTAINING SPECIALTY MEDICATION?
              </h4>
              <div className={textContainer}>
                <span className={textTwo}>
                  AN ACCESS/BIOLOGIC COORDINATOR IS YOUR SOLUTION
                </span>
              </div>
              <Container
                className={checklistWrapper}
                style={{ marginTop: "2rem" }}
              >
                <Row>
                  <Col>
                    {desktopCheckList[0]}
                    {desktopCheckList[1]}
                    {desktopCheckList[2]}
                    {/* one check /two paragraphs incl. */}
                    {desktopCheckList[3]}
                    {desktopCheckList[4]}
                    {desktopCheckList[5]}
                  </Col>
                  <Col>
                    <Col>
                      {desktopCheckList[6]}
                      {desktopCheckList[7]}
                      {desktopCheckList[8]}
                      {desktopCheckList[9]}
                      {desktopCheckList[10]}
                      {desktopCheckList[11]}
                      {desktopCheckList[12]}
                      {desktopCheckList[13]}
                      {desktopCheckList[14]}
                    </Col>
                  </Col>
                </Row>
              </Container>
            </div>
            <section className={divider}></section>
          </section>
        </main>
      )}
    </>
  );
};

export default TrainingDesktop;
