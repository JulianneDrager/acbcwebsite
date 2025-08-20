import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Heading,
} from "@react-email/components";
import * as React from "react";

export const RegisterEmailIndResponse = ({
  firstNameInd,
  lastNameInd,
  emailInd,
  phoneInd,
  eventDropDownInd,
  specialtyInd,
  practiceInd,
  practiceAddressInd,
  companyInd,
  shirtSizeInd,
}) => (
  <Html>
    <Heading style={acbcHeading}>{eventDropDownInd}</Heading>
    <Preview>
      You have a new {eventDropDownInd} ACBC Registrant Response
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Text style={paragraph2}>
            REGISTRATION CONFIRMATION:
            <Hr style={hr} />
            Details: March 6th, 2026 7:00 PM – March 6th, 2026 at 5:30 PM
            Location: The Westin Dallas Park Central, <br />
            12720 Merit Drive Dallas, TX 75251, USA
          </Text>
          <br />
          <Container style={messageContainer}>
            <Text style={paragraph}>
              First Name: {firstNameInd} <br />
              Last Name: {lastNameInd}
            </Text>
            <Text style={paragraph2}>Email: {emailInd}</Text>
            <Text style={paragraph2}>
              Phone: {phoneInd ? phoneInd : "No phone number was provided"}
            </Text>
            <Text style={paragraph2}>
              Address:{" "}
              {practiceAddressInd
                ? practiceAddressInd
                : "No address was provided"}
            </Text>
            <Text style={paragraph2}>
              Specialty:
              {specialtyInd
                ? specialtyInd
                : "No specialty field was number provided"}
            </Text>
            <Text style={paragraph2}>
              Practice:{" "}
              {practiceInd ? practiceInd : "No practice field was provided"}
            </Text>
            <Text style={paragraph2}>
              Company Name:{" "}
              {companyInd ? companyInd : "No company name was provided"}
            </Text>
            <Text style={paragraph2}>
              Shirt Size:{" "}
              {shirtSizeInd ? shirtSizeInd : "No shirt size was provided"}
            </Text>{" "}
            <hr />
            <Link
              style={button}
              href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1755535778983&key=GRP&app=resvlinkand"
            >
              CLICK HERE TO RESERVE YOUR ROOM
            </Link>
          </Container>

          <Text style={paragraph}>— Access Bootcamp Website</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Data was taken from your Access Bootcamp Website, Subscribe contact
            form.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default RegisterEmailIndResponse;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const acbcHeading = {
  color: "black",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  margin: "0",
};

const messageContainer = {
  backgroundColor: "#e4e2e2",
  border: "1px solid #eee",
  borderRadius: "5px",
  margin: "0 auto",
  padding: "4px",
  height: "20px",
  fontStyle: "italic",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
};

const paragraph2 = {
  color: "#525f7f",
  margin: "0",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "80%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
