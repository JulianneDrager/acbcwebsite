import React, { useContext } from "react";
import EventsStyles from "../Events.module.css";
import {
  Accordion,
  AccordionContext,
  Button,
  useAccordionButton,
} from "react-bootstrap";

const IntroCard = (props) => {
  const mainContainer = EventsStyles.mainContainer;
  const introContainer = EventsStyles.introContainer;
  const bodyText = EventsStyles.bodyText;
  const readMoreButton = EventsStyles.readMoreButton;
  const eventsSubTitle = EventsStyles.eventsSubTitle;

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
        style={
          {
            // display: isCurrentEventKey ? "none" : "inline",
          }
        }
        onClick={decoratedOnClick}
        className={readMoreButton}
      >
        {/* {children} */}
        {isCurrentEventKey ? "CLOSE" : "READ MORE"}
      </Button>
    );
  };

  const readMoreIntro = (
    <Accordion defaultActiveKey="0" alwaysOpen={false}>
      <h1 className={eventsSubTitle}>
        Learn How Our ACBC Events <br />
        Can Benefit Your Office Staff
      </h1>
      <p className={bodyText}>{props.paraOne}</p>
      <p className={bodyText}>{props.paraTwo}</p>{" "}
      <Accordion.Collapse eventKey="1">
        <p className={bodyText}>{props.paraThree}</p>
      </Accordion.Collapse>
      <ContextAwareToggle eventKey="1"></ContextAwareToggle>
      {/* ------------------------------------------------------------- */}
    </Accordion>
  );

  return (
    <>
      <main id="events" className={mainContainer}>
        <div className={introContainer}>{readMoreIntro}</div>
      </main>
    </>
  );
};

export default IntroCard;
