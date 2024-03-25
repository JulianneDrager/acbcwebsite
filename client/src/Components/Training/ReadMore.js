import React from "react";
import TrainingStyles from "./Training.module.css";
import ReadMoreStyles from "./checkReadMore.module.css";
import { Container } from "react-bootstrap";
import Navigation from "Components/Nav/Nav";
import CheckListProps from "./CheckListProps";
import CheckListDesktopData from "./CheckListReadMoreData";
import useMediaQuery from "services/useMediaQuery";
import Footer from "Components/Footer/Footer";

const ReadMore = () => {
  const desktopCheckListRM = CheckListDesktopData.map((data) => {
    return <CheckListProps key={data.id} {...data} />;
  });

  const mainContainer = TrainingStyles.mainContainer;
  const titleContainerRM = ReadMoreStyles.titleContainerRM;
  const contentContainer = TrainingStyles.contentContainer;
  const introContainerRM = ReadMoreStyles.introContainerRM;
  const logoDiv = TrainingStyles.logoDiv;
  const textOneRM = ReadMoreStyles.textOneRM;
  const textTwoRM = ReadMoreStyles.textTwoRM;
  const textContainerRM = ReadMoreStyles.textContainerRM;
  const checklistWrapper = TrainingStyles.checklistWrapper;

  const matches768 = useMediaQuery("(min-width:767px)");

  return (
    <>
      <Navigation />
      <main
        className={mainContainer}
        style={{
          maxWidth: "1700px",
          margin: "0 auto",
        }}
      >
        <section className={contentContainer}>
          <div className={introContainerRM}>
            <div className={titleContainerRM}>
              <h3>NATIONAL & LOCAL</h3>
              <div className={logoDiv}>
                <h3>IN-OFFICE TRAINING</h3>
              </div>
            </div>
            <h4>
              ARE YOU FRUSTRATED WITH {!matches768 && <br />}
              THE PROCESS OF OBTAINING {!matches768 && <br />}
              SPECIALTY MEDICATION?
            </h4>
            <div className={textContainerRM}>
              <p className={textOneRM}>
                <p className={textTwoRM}>
                  AN ACCESS/BIOLOGIC {!matches768 && <br />} COORDINATOR IS YOUR
                  SOLUTION{" "}
                </p>
              </p>
            </div>
            {desktopCheckListRM}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ReadMore;
