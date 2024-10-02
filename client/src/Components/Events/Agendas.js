import React from "react";
import EventsStyles from "./Events.module.css";
import HustonTexasAgenda2024 from "../../assets/images/HoustonDailyAgenda.pdf";
import MIAgeneda2024 from "../../assets/images/MichiganAgenda24.pdf";
import { Button } from "react-bootstrap";
import Navigation from "Components/Nav/Nav";

const Agendas = (props) => {
  const mainContainer = EventsStyles.mainContainer;
  const titleContainer = EventsStyles.titleContainer;
  const contentContainer = EventsStyles.contentContainer;
  const introContainer = EventsStyles.introContainer;
  const spanText = EventsStyles.spanText;
  const mainWrapper = EventsStyles.mainWrapper;

  const texasAgenda = () => {
    window.open(HustonTexasAgenda2024);
  };

  const michignAgenda = () => {
    window.open(MIAgeneda2024);
  };

  return (
    <>
      <Navigation />
      <div className={mainWrapper}>
        <main id="events" className={mainContainer}>
          <section className={contentContainer}>
            <div className={introContainer}>
              {/* Events Main Title ----------------------------------*/}
              <div className={titleContainer}>
                <h1>
                  ACBC<span className={spanText}> PAST AGENDAS</span>
                  <br />
                  <Button
                    onClick={texasAgenda}
                    style={{
                      background: "none",
                      border: "none",
                      textDecoration: "underline",
                      fontSize: "1.5rem",
                    }}
                  >
                    HUSTON TEXAS 2024 ROUND UP
                  </Button>
                  <Button
                    onClick={michignAgenda}
                    style={{
                      background: "none",
                      border: "none",
                      textDecoration: "underline",
                      fontSize: "1.5rem",
                    }}
                  >
                    GRAND RAPIDS 2024 ROUND UP
                  </Button>
                </h1>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Agendas;
