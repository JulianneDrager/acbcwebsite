import { useContext } from "react";
import ContactStyle from "../Contact/Contact.module.css";
import {
  Accordion,
  Button,
  AccordionContext,
  useAccordionButton,
} from "react-bootstrap";
import AddRegisterForm from "./AddRegisterForm";

const Add = ({ visibility, setVisibility, ...props }) => {
  const hrStyle = { margin: ".3rem", border: "none" };

  // Function to toggle the read more button --------------------------------
  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;

    const handleClick = () => {
      decoratedOnClick(); // This will toggle the accordion section
      // buttonTextToggle();
      // console.log("visibility", visibility);
    };

    return (
      <Button
        style={{
          backgroundColor: "#7f734e",
          color: "white",
          border: "none",
          margin: ".5rem",
        }}
        type="button"
        // className={mapIconStyle}
        onClick={handleClick}
      >
        {isCurrentEventKey ? "CLOSE" : "ADD REGISTRANTS"}
      </Button>
    );
  };

  return (
    <>
      {/* Accordion ------------------------------------------- */}
      <section>
        {/* MapButton ------------------------------------------- */}
        <Accordion defaultActiveKey="0" alwaysOpen={false}>
          <ContextAwareToggle
            setVisibility={setVisibility}
            eventKey="1"
          ></ContextAwareToggle>
          <Accordion.Collapse eventKey="1">
            <div>
              <AddRegisterForm />
            </div>
          </Accordion.Collapse>
        </Accordion>
        <hr style={hrStyle} />
      </section>
    </>
  );
};

export default Add;
