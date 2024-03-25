import React from "react";
import TrainingStyles from "./Training.module.css";
import useMediaQuery from "services/useMediaQuery";
import TrainingDesktop from "./TrainingDesktop";
import CheckListMobile from "./CheckListMobile";
import { Link } from "react-router-dom";

const Training = () => {
  const matchedDesktop = useMediaQuery("(min-width: 1024px)");
  const mainContainer = TrainingStyles.mainContainer;
  const titleContainer = TrainingStyles.titleContainer;
  const contentContainer = TrainingStyles.contentContainer;
  const introContainer = TrainingStyles.introContainer;
  const logoDiv = TrainingStyles.logoDiv;
  const textOne = TrainingStyles.textOne;
  const textTwo = TrainingStyles.textTwo;
  const textContainer = TrainingStyles.textContainer;
  const moreBtn = TrainingStyles.moreBtn;
  const divBtnWrapper = TrainingStyles.divBtnWrapper;
  const divider = TrainingStyles.divider;

  const matches768 = useMediaQuery("(min-width:767px)");

  return (
    <>
      {!matchedDesktop && (
        <main id="train" className={mainContainer}>
          <section className={contentContainer}>
            <div className={introContainer}>
              <div className={titleContainer}>
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
              <div className={textContainer}>
                <p className={textOne}>
                  <p className={textTwo}>
                    AN ACCESS/BIOLOGIC {!matches768 && <br />} COORDINATOR IS
                    YOUR SOLUTION
                  </p>
                </p>
              </div>
              <CheckListMobile />
              <div className={divBtnWrapper}>
                <Link to="/readmore" className={moreBtn}>
                  READ MORE
                </Link>
              </div>
            </div>
            <section className={divider}></section>
          </section>
        </main>
      )}
      {matchedDesktop && <TrainingDesktop />}
    </>
  );
};

export default Training;
