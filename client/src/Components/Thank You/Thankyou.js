import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ThankyouStyle from "./Thankyou.module.css";
import Wrapper from "./Wrapper";

const ThankyouGeneral = () => {
  const { name, firstnameprop } = useParams();
  //   console.log(name);
  const cardWrapper = ThankyouStyle.cardWrapper;
  const innerCardWrapper = ThankyouStyle.innerCardWrapper;
  const cardBody = ThankyouStyle.cardBody;

  return (
    <>
      <Wrapper className="contactBody"></Wrapper>

      <Wrapper className={cardWrapper}>
        <Wrapper className={innerCardWrapper}>
          <Wrapper className={cardBody}>
            <h1>
              Hello{" "}
              <b>
                {name}
                {firstnameprop}
              </b>
            </h1>
            <h2>
              Thank you for contacting BioMazze. We will get back to you
              shortly!
              <br />
            </h2>

            <Button
              style={{
                marginTop: "1rem",
                background: "none",
                border: "none",
                color: "black",
              }}
              href="/"
            >
              Back to Website
            </Button>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};
export default ThankyouGeneral;
