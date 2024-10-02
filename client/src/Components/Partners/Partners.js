import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import PartnerStyles from "./PartnerStyles.module.css";

// import partnerGroup1 from "../../assets/mobile/partners/1.png";
// import partnerGroup2 from "../../assets/mobile/partners/2.png";

import sponsor1 from "../../assets/images/sponsors/Abbvie-sm.png";
import sponsor1a from "../../assets/images/sponsors/ucb.png";
import sponsor2 from "../../assets/images/sponsors/astrazeneca-sm.png";
import sponsor3 from "../../assets/images/sponsors/BMS-sm.png";
import sponsor4 from "../../assets/images/sponsors/Boehringer-sm.png";
import sponsor5 from "../../assets/images/sponsors/Dermavant-sm.png";
import sponsor6 from "../../assets/images/sponsors/Incyte-sm.png";
import sponsor7 from "../../assets/images/sponsors/leo-sm.png";
import sponsor8 from "../../assets/images/sponsors/Lilly-sm.png";
import sponsor9 from "../../assets/images/sponsors/novartis-logo-sm.png";
import sponsor10 from "../../assets/images/sponsors/Paragon-sm.png";
import sponsor11 from "../../assets/images/sponsors/Pfizer-sm.png";
import sponsor12 from "../../assets/images/sponsors/regeneron-sm.png";
import sponsor13 from "../../assets/images/sponsors/RxNexus-sm.png";
import sponsor14 from "../../assets/images/sponsors/sands-sm.png";
import sponsor15 from "../../assets/images/sponsors/vivo-sm.png";
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

  // links
  const abbvie = "https://www.abbvie.com/";
  const bms = "https://www.bms.com/";
  const astrazeneca = "https://www.astrazeneca.com/";
  const boehringer = "https://www.boehringer-ingelheim.com/";
  const dermavant = "https://dermavant.com/";
  const incyte = "https://www.incyte.com/";
  const lilly = "https://www.lilly.com/";
  const novartis = "https://www.novartis.com/";
  const pfizer = "https://www.pfizer.com/";
  const regeneron = "https://www.regeneron.com/";
  const rxnexus = "https://www.rxnexus.com/";
  const sandsrx = "https://www.sandsrx.com/";
  const vivo = "https://vivoinfusion.com/";
  const leo = "https://www.leo-pharma.com/";
  const paragon = "https://www.paragonhealthcare.com/";

  // links section
  const linkSection = (
    <>
      {" "}
      <i style={{ fontSize: ".7rem" }}>
        <a href={abbvie}>Abbvie</a> | <a href={astrazeneca}>AstraZeneca</a> |{" "}
        {""}
        <a href={bms}>BMS</a> | <a href={boehringer}>Boehringer</a> |{" "}
        <a href={dermavant}>Dermavant</a> | <a href={incyte}>Incyte</a> |{" "}
        <a href={lilly}> Lilly </a>| <a href={novartis}>Novartis</a> |{" "}
        <a href={pfizer}>Pfizer</a> |<a href={regeneron}>Regeneron</a> |{" "}
        <a href={rxnexus}>RxNexus | </a>
        <a href={sandsrx}>SandsRX | </a>
        <a href={vivo}>Vivo Infusion</a> | <a href={leo}>Leo pharma</a> |{" "}
        <a href={paragon}>Paragon Healthcare</a>
      </i>
    </>
  );
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
                    <h3>TO OUR SPONSORS</h3>
                    {linkSection}
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
                    <Image src={sponsor1} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor1a} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor2} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor2} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor3} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor4} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor5} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor6} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor7} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor8} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor9} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor10} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor11} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor12} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor13} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor14} />
                  </div>
                  <div className={img}>
                    <Image src={sponsor15} />
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
                      TO OUR PARTNERS <br />
                      {linkSection}
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
                    <Image src={sponsor1} />
                    <Image src={sponsor1a} />
                    <Image src={sponsor2} />
                  </div>
                  <div className={imgDesktop}>
                    <Image src={sponsor6} />
                    <Image src={sponsor8} />
                    <Image src={sponsor4} />
                  </div>
                  <div className={imgDesktop}>
                    <Image src={sponsor12} />
                    <Image src={sponsor7} />
                    <Image src={sponsor3} />
                  </div>
                  <div className={imgDesktop}>
                    <Image src={sponsor9} />
                    <Image src={sponsor10} />
                    <Image src={sponsor14} />
                  </div>
                  <div className={imgDesktop}>
                    <Image src={sponsor15} />
                    <Image src={sponsor11} />
                    <Image src={sponsor13} />
                  </div>
                  <div className={imgDesktop}>
                    <Image src={sponsor5} />
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
                      TO OUR PARTNERS <br />
                      {linkSection}
                    </span>
                  </h3>
                </div>
                <div className={imgDesktop}>
                  <Image className={iconDesktopWidth} src={sponsor1} />
                  <Image className={iconDesktopWidth} src={sponsor1a} />
                  <Image className={iconDesktopWidth} src={sponsor2} />
                  <Image className={iconDesktopWidth} src={sponsor15} />
                  <Image className={iconDesktopWidth} src={sponsor7} />
                  <Image className={iconDesktopWidth} src={sponsor5} />
                </div>
                <div className={imgDesktop}>
                  <Image className={iconDesktopWidth} src={sponsor6} />
                  <Image className={iconDesktopWidth} src={sponsor4} />
                  <Image className={iconDesktopWidth} src={sponsor8} />
                  <Image className={iconDesktopWidth} src={sponsor9} />
                  <Image className={iconDesktopWidth} src={sponsor10} />
                </div>
                <div className={imgDesktop}>
                  <Image className={iconDesktopWidth} src={sponsor11} />
                  <Image className={iconDesktopWidth} src={sponsor12} />
                  <Image className={iconDesktopWidth} src={sponsor13} />
                  <Image className={iconDesktopWidth} src={sponsor14} />
                  <Image className={iconDesktopWidth} src={sponsor3} />
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
