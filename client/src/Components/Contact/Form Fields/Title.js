import React from "react";
import { Link } from "react-router-dom";
import { Image, Row } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import linkedIn from "assets/images/linkedIn.png";
import { useMediaQuery } from "@mui/material";

const Title = () => {
  const contactTitle = ContactStyle.contactTitle;
  const matchsm = useMediaQuery("(min-width: 728px)");
  const spanText = ContactStyle.spanText;
  const linkStyle = ContactStyle.linkStyle;
  const hrSelector = { margin: ".5rem 0" };
  const contactWrapper = ContactStyle.contactWrapper;
  const icon = ContactStyle.icon;
  const contactWrapperBottom = ContactStyle.contactWrapperBottom;
  const addressText = ContactStyle.addressText;
  const hoursText = ContactStyle.hoursText;
  const socialSection = ContactStyle.socialSection;
  const contactWrapperDesktop = ContactStyle.contactWrapperDesktop;
  const brTag = ContactStyle.brTag;

  return (
    <>
      <Row>
        <p className={contactTitle}>
          CONTACT <span className={spanText}>US </span>
          {/* {!matchsm && <br />} */}
        </p>
        <div className={contactWrapperDesktop}>
          <div className={contactWrapper}>
            <div className={addressText}>
              ADDRESS <br />
              6009 W. Parker Rd, Suite 149-248 <br /> Plano, TX 75093
            </div>
            <div className={hoursText}>
              HOURS <br /> Mon - Fri <br />
              9:00 AM – 5:00 PM
            </div>
            <div className={socialSection}>
              FOLLOW US <br />
              <Image src={linkedIn} className={icon} alt="Linked In" />
            </div>
          </div>
          <div className={contactWrapperBottom}>
            <br className={brTag} />
            CONTACT: <br />
            EM:
            <a
              className={linkStyle}
              href="mailto:acbc@accesscoordinatorbootcamp.com"
            >
              {" "}
              acbc@accesscoordinatorbootcamp.com
            </a>
            <br />
            PH:{" "}
            <Link className={linkStyle} to="tel:4693733563">
              469-373-3563
            </Link>{" "}
            OR:{" "}
            <Link className={linkStyle} to="4693733741">
              469-373-3741
            </Link>
          </div>
        </div>
        <hr style={hrSelector} />
      </Row>
    </>
  );
};
export default Title;
