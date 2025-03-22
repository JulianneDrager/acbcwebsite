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

export const RegisterEmailInd = ({
  firstNameInd,
  lastNameInd,
  emailInd,
  phoneInd,
  eventDropDown,
  specialtyInd,
  practiceInd,
  practiceAddressInd,
  companyInd,
  shirtSizeInd,
}) => (
  <Html>
    <Heading style={acbcHeading}>{eventDropDown} Registrant</Heading>
    <Preview>You have a new {eventDropDown} registrant</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Hr style={hr} />
          <Text style={paragraph2}>Their Register Information:</Text>
          <Container style={messageContainer}>
            <Text style={paragraph2}>Event: {eventDropDown}</Text>
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
              Position:{" "}
              {practiceInd ? practiceInd : "No practice field was provided"}
            </Text>
            <Text style={paragraph2}>
              Company Name:{" "}
              {companyInd ? companyInd : "No company name was provided"}
            </Text>
            <Hr style={hr} />
            <Text style={paragraph2}>
              Shirt Size:{" "}
              {shirtSizeInd ? shirtSizeInd : "No shirt size was provided"}
            </Text>
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

export default RegisterEmailInd;

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
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
