import React, { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Button,
  useAccordionButton,
} from "react-bootstrap";
import AboutStyles from "../About.module.css";

const MeetTeamCard = (props) => {
  const meetTeamTitle = AboutStyles.meetTeamTitle;
  const meetTeamBody = AboutStyles.meetTeamBody;
  const readMoreButton = AboutStyles.readMoreButton;

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
  //-----------------------------------------------------------------------------------

  return (
    <>
      {/* Accordion to show WHO IS ACBC text when read more btn is clicked. */}

      <Accordion defaultActiveKey="0" alwaysOpen={false}>
        <>
          {/* Meet Our Team Section.  ---------------------------------------*/}
          <h1 className={meetTeamTitle}>{props.title}</h1>
          <p className={meetTeamBody}>{props.body}</p>
          {/* ------------------------------------------------------------- */}
        </>

        <hr style={{ border: "none", margin: ".4rem" }} />

        {/* shoes the extended text when button is clicked  ---------------*/}
        <Accordion.Collapse eventKey="1">
          <p className={meetTeamBody}>{props.bodyExt}</p>
        </Accordion.Collapse>
        <ContextAwareToggle eventKey="1"></ContextAwareToggle>
        {/* ------------------------------------------------------------- */}
      </Accordion>
    </>
  );
};

export default MeetTeamCard;
