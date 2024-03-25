import React from "react";
import EventsStyles from "./Events.module.css";
import EventImg from "../../assets/images/events/event-banner-mobile.png";
import EventImgDesktop from "../../assets/images/events/event-banner-desktop.png";
import { Image } from "react-bootstrap";
import EventsData from "./RegisterCards/EventsData";
import EventsCard from "./RegisterCards/EventsCard";
import IntroCard from "./EventIntroParagraph/IntroCard";
import IntroData from "./EventIntroParagraph/IntroData";
// import AboutDesktop from "Components/About/AboutDesktop";
import { useMediaQuery } from "@mui/material";

const EventsDesktop = (props) => {
  const mainContainer = EventsStyles.mainContainer;
  const titleContainer = EventsStyles.titleContainer;
  const contentContainer = EventsStyles.contentContainer;
  const introContainer = EventsStyles.introContainer;
  const EventsImg = EventsStyles.EventsImg;
  const spanText = EventsStyles.spanText;

  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  // Map function to show Register Buttons.
  const EventsMap = EventsData.map((item, index) => {
    return <EventsCard key={index} {...item} />;
  });

  // Map function to show intro text.
  const IntroTextMap = IntroData.map((item, index) => {
    return <IntroCard key={index} {...item} />;
  });

  return (
    <>
      <main id="events" className={mainContainer}>
        <section className={contentContainer}>
          <div className={introContainer}>
            {/* Events Main Title ----------------------------------*/}
            <div className={titleContainer}>
              <h1>
                ACBC<span className={spanText}> Events</span>
                <br />
              </h1>
              <Image
                src={matchedDesktop ? EventImg : EventImgDesktop}
                className={EventsImg}
              />
            </div>

            {/* Event Intro Paragraph -------------------------------------- */}
            {IntroTextMap}

            {/* REGISTER BUTTON -------------------------------------------------*/}
            {EventsMap}
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
    </>
  );
};

export default EventsDesktop;
