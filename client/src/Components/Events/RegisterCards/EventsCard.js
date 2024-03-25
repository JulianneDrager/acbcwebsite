import React from "react";
import EventsStyles from "../Events.module.css";
import { Button, Image } from "react-bootstrap";

const EventsCard = (props) => {
  const mainContainer = EventsStyles.mainContainer;
  const titleContainer = EventsStyles.titleContainer;
  const introContainer = EventsStyles.introContainer;
  const registerButtonDiv = EventsStyles.registerButtonDiv;
  const logoStyle = EventsStyles.logoStyle;
  const hustonText = EventsStyles.hustonText;
  const detailsTitle = EventsStyles.detailsTitle;
  const address = EventsStyles.address;
  const detailsBody = EventsStyles.detailsBody;
  const registerText = EventsStyles.registerText;
  const registerBtn = EventsStyles.registerBtn;

  const lightGrey = { color: "var(--color-light-grey)" };
  const gold = { color: "var(--color-gold)" };

  return (
    <>
      {/* {!matchedDesktop && ( */}
      <main id="about" className={mainContainer}>
        <div className={introContainer}>
          {/* REGISTER BUTTON -------------------------------------------------*/}
          <div className={registerButtonDiv}>
            <Image src={props.logo} className={logoStyle} />
            <Image src={props.state} className={props.classNameState} />
            <div className={titleContainer}>
              <h2>
                <span className={hustonText}>{props.stateName} </span>
                <br />
                {props.stateSubName}
              </h2>
            </div>
            <h1 className={detailsTitle}>
              <span style={lightGrey}>WHEN:</span>
              {props.when}
              <br />
              <span style={lightGrey}>TIME:</span>
              {props.time}
            </h1>

            <div className={detailsBody}>
              <span style={gold}>LOCATED AT: </span>
              <br />
              {props.addressTitle1} <br />
              {props.addressTitle2} <br />
              <span className={address}>
                {props.address1} <br />
                {props.address2}
              </span>
            </div>
            <h1 className={registerText}>REGISTER</h1>
            <Button className={registerBtn}>{props.btnTittle}</Button>
          </div>

          {/* REGISTER BUTTON (MI) */}
        </div>
      </main>
      {/* )} */}

      {/* {matchedDesktop && <AboutDesktop />} */}
    </>
  );
};

export default EventsCard;
