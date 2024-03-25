import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import PartnerStyles from "./PartnerStyles.module.css";

import partnerGroup1 from "../../assets/mobile/partners/1.png";
import partnerGroup2 from "../../assets/mobile/partners/2.png";

import partner1 from "../../assets/desktop/partners/amgen.png";
import partner2 from "../../assets/desktop/partners/bristol.png";
import partner3 from "../../assets/desktop/partners/cvs.png";
import partner4 from "../../assets/desktop/partners/gsk.png";
import partner5 from "../../assets/desktop/partners/kroger.png";
import partner6 from "../../assets/desktop/partners/lilly.png";
import partner7 from "../../assets/desktop/partners/regeneron.png";
import partner8 from "../../assets/desktop/partners/sands.png";
import partner9 from "../../assets/desktop/partners/sun.png";

import { Image } from "react-bootstrap";

import useMediaQuery from "services/useMediaQuery";

const Partners = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");
  const matchedDesktopLarge = useMediaQuery("(min-width: 1024px)");

  const mainContainer = PartnerStyles.mainContainer;
  const titleContainer = PartnerStyles.titleContainer;
  const contentContainer = PartnerStyles.contentContainer;
  const introContainer = PartnerStyles.introContainer;
  const iconDesktopWidth = PartnerStyles.iconDesktopWidth;
  const logoDiv = PartnerStyles.logoDiv;
  const imgDesktop = PartnerStyles.imgDesktop;
  const img = PartnerStyles.img;

  return (
    <>
      <main className={mainContainer}>
        <section className={contentContainer}>
          <div className={introContainer}>
            {!matchedDesktop && (
              <>
                <div className={titleContainer}>
                  <h3>
                    THANK YOU <br />
                  </h3>
                  <div className={logoDiv}>
                    <h3>TO OUR PARTNERS</h3>
                  </div>
                </div>
                <Carousel
                  autoPlay={true}
                  showThumbs={false}
                  showArrows={false}
                  infiniteLoop={true}
                  showIndicators={false}
                  showStatus={false}
                  animationHandler="fade"
                  transitionTime="500"
                  interval={1000}
                >
                  <div className={img}>
                    <Image src={partnerGroup1} />
                  </div>
                  <div className={img}>
                    <Image src={partnerGroup2} />
                  </div>
                </Carousel>
              </>
            )}

            {matchedDesktop && !matchedDesktopLarge && (
              <>
                <div className={logoDiv}>
                  <br />
                  <h3>
                    THANK YOU{" "}
                    <span
                      style={{ color: "var(--font-color-secondary-light)" }}
                    >
                      TO OUR PARTNERS
                    </span>
                  </h3>
                </div>
                <Carousel
                  // width={500}
                  autoPlay={true}
                  showThumbs={false}
                  showArrows={false}
                  infiniteLoop={true}
                  showIndicators={false}
                  showStatus={false}
                  animationHandler="slide"
                  transitionTime="500"
                  interval={2000}
                  centerMode={true}
                >
                  <div className={imgDesktop}>
                    <Image src={partner1} />
                    <Image src={partner2} />
                    <Image src={partner3} />
                  </div>
                  <div className={imgDesktop}>
                    <Image src={partner4} />
                    <Image src={partner5} />
                    <Image src={partner6} />
                  </div>
                  <div className={imgDesktop}>
                    <Image src={partner7} />
                    <Image src={partner8} />
                    <Image src={partner9} />
                  </div>
                </Carousel>
              </>
            )}

            {matchedDesktopLarge && (
              <>
                <div className={logoDiv}>
                  <br />
                  <h3>
                    THANK YOU{" "}
                    <span
                      style={{ color: "var(--font-color-secondary-light)" }}
                    >
                      TO OUR PARTNERS
                    </span>
                  </h3>
                </div>
                <div className={imgDesktop}>
                  <Image className={iconDesktopWidth} src={partner1} />
                  <Image className={iconDesktopWidth} src={partner2} />
                  <Image className={iconDesktopWidth} src={partner3} />
                  <Image className={iconDesktopWidth} src={partner4} />
                  <Image className={iconDesktopWidth} src={partner5} />
                  <Image className={iconDesktopWidth} src={partner6} />
                  <Image className={iconDesktopWidth} src={partner7} />
                  <Image className={iconDesktopWidth} src={partner8} />
                  <Image className={iconDesktopWidth} src={partner9} />
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Partners;
