import React from "react";
import { Link } from "react-router-dom";
import { Image, Row } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import linkedIn from "assets/images/linkedIn.png";
import { useMediaQuery } from "@mui/material";

const FooterTitle = () => {
  const linkStyleFooter = ContactStyle.linkStyleFooter;
  const hrSelector = { margin: ".5rem 0" };
  const contactWrapper = ContactStyle.contactWrapper;
  const iconFooter = ContactStyle.iconFooter;
  const contactWrapperBottomFooter = ContactStyle.contactWrapperBottomFooter;
  const addressTextFooter = ContactStyle.addressTextFooter;
  const hoursTextFooter = ContactStyle.hoursTextFooter;
  const socialSectionFooter = ContactStyle.socialSectionFooter;
  const contactWrapperDesktopFooter = ContactStyle.contactWrapperDesktopFooter;
  const brTag = ContactStyle.brTag;

  return (
    <>
      <Row>
        <div className={contactWrapperDesktopFooter}>
          <div className={contactWrapper} style={{ color: "black" }}>
            <div className={addressTextFooter}>
              ADDRESS <br />
              6009 W. Parker Rd, <br />
              Suite 149-248 <br /> Plano, TX 75093
            </div>
            <div className={hoursTextFooter}>
              HOURS <br /> Mon - Fri <br />
              9:00 AM – 5:00 PM
            </div>
            <div className={socialSectionFooter}>
              FOLLOW US <br />
              <Image src={linkedIn} className={iconFooter} alt="Linked In" />
            </div>
          </div>
          <div
            className={contactWrapperBottomFooter}
            style={{ color: "black" }}
          >
            <br className={brTag} />
            CONTACT: <br />
            EM:{" "}
            <a
              className={linkStyleFooter}
              href="mailto:acbc@accesscoordinatorbootcamp.com"
            >
              {" "}
              acbc@accesscoordinatorbootcamp.com
            </a>
            <br />
            PH:{" "}
            <Link className={linkStyleFooter} to="tel:4693733563">
              469-373-3563
            </Link>{" "}
            OR:{" "}
            <Link className={linkStyleFooter} to="4693733741">
              469-373-3741
            </Link>
            <hr style={hrSelector} />
            <Link to={"services"} style={{ color: "black" }}>
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link to={"privacy"} style={{ color: "black" }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </Row>
    </>
  );
};
export default FooterTitle;
