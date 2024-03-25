import React, { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Button,
  Image,
  useAccordionButton,
} from "react-bootstrap";
import AboutStyles from "../About.module.css";

const HeadshotCard = (props) => {
  const bioTextSection = AboutStyles.bioTextSection;
  const HeadShotTitle = AboutStyles.HeadShotTitle;
  const HeadShotSubTitle = AboutStyles.HeadShotSubTitle;
  const HeadShotBody = AboutStyles.HeadShotBody;
  const HeadShotReadMoreButton = AboutStyles.HeadShotReadMoreButton;
  const profileImg = AboutStyles.profileImg;
  const imageWrapper = AboutStyles.imageWrapper;

  // Function to toggle the read more button
  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <div style={{ textAlign: "end" }}>
        <Button
          type="button"
          // style={{
          //   // display: isCurrentEventKey ? "none" : "inline",
          //   margin: "-5px 14px 10px 0px",
          // }}
          onClick={decoratedOnClick}
          className={HeadShotReadMoreButton}
        >
          {/* {children} */}
          {isCurrentEventKey ? "CLOSE" : "READ MORE"}
        </Button>
      </div>
    );
  };
  //-----------------------------------------------------------------------------------

  return (
    <>
      {/* Accordion to show WHO IS ACBC text when read more btn is clicked. */}

      {/* {!matchedDesktop && ( */}
      <div className={imageWrapper}>
        <Image className={profileImg} src={props.img} alt="props.alt" />
      </div>

      <div className={bioTextSection}>
        <Accordion defaultActiveKey="0" alwaysOpen={false}>
          <>
            {/* Meet Our Team Section.  ---------------------------------------*/}

            <h1 className={HeadShotTitle}>{props.title}</h1>
            <p className={HeadShotSubTitle}>{props.subTitle}</p>

            <hr style={{ border: "none", margin: ".4rem" }} />
            <p className={HeadShotBody}>{props.body}</p>

            {/* ------------------------------------------------------------- */}
          </>

          {/* shoes the extended text when button is clicked  ---------------*/}
          <Accordion.Collapse eventKey="1">
            <>
              <p className={HeadShotBody}>{props.bodyExt}</p>
              <hr style={{ border: "none", margin: ".4rem" }} />
            </>
          </Accordion.Collapse>
          <ContextAwareToggle eventKey="1"></ContextAwareToggle>
          {/* ------------------------------------------------------------- */}
        </Accordion>
      </div>
    </>
  );
};

export default HeadshotCard;
