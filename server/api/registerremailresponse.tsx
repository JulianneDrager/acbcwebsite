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

export const RegisterEmail = ({
  firstName,
  lastName,
  email,
  phone,
  eventDropDown,
  specialty,
  practice,
  practiceAddress,
  company,
  shirtSize,
}) => (
  <Html>
    <Heading style={acbcHeading}>
      {eventDropDown} ACBC Registrant Responce
    </Heading>
    <Preview>You have a new {eventDropDown} ACBC Registrant Responce</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Hr style={hr} />
          <Text style={paragraph2}>
            Thank you for registering for the 2024 Grand Rapids ACBC Round Up:
            <br />
            July 26, 2024 at 7:00 PM – July 28, 2024 at 12:00 PM Grand Rapids,
            Amway Grand Plaza Hotel, 187 Monroe Ave NW, Grand Rapids, MI 49503,
            USA Below please find your confirmation:
          </Text>
          <Container style={messageContainer}>
            <Text style={paragraph2}>Event: {eventDropDown}</Text>
            <Text style={paragraph}>
              Registrant Inforamtion: First Name: {firstName} <br />
              Last Name: {lastName}
            </Text>
            <Text style={paragraph2}>Email: {email}</Text>
            <Text style={paragraph2}>
              Phone: {phone ? phone : "No phone number was provided"}
            </Text>
            <Text style={paragraph2}>
              Address:{" "}
              {practiceAddress ? practiceAddress : "No address was provided"}
            </Text>
            <Text style={paragraph2}>
              Specialty:
              {specialty ? specialty : "No specialty field was number provided"}
            </Text>
            <Text style={paragraph2}>
              Position: {practice ? practice : "No practice field was provided"}
            </Text>
            <Text style={paragraph2}>
              Company Name: {company ? company : "No company name was provided"}
            </Text>
            <Hr style={hr} />
            <Text style={paragraph2}>
              Shirt Size: {shirtSize ? shirtSize : "No shirt size was provided"}
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

export default RegisterEmail;

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
