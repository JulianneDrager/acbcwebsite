import React from "react";
import Navigation from "../Nav/Nav";
import Header from "../Header/Header";
import About from "../About/About";
import Events from "Components/Events/Events";
import Contact from "Components/Contact/Contact";
import { useContactContext } from "Components/Context/ContactContext";
import Footer from "Components/Footer/Footer";
import Partners from "Components/Partners/Partners";
// import Footer from "Components/Footer/Footer";

const Screen = () => {
  const { sendEmailHandler } = useContactContext();
  return (
    <>
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          position: "relative",
          zIndex: "1",
          backgroundColor: "white",
        }}
      >
        <Navigation />
        <Header />
        <About />
        <Events />
        <Contact sendEmailHandler={sendEmailHandler} />
        <Partners />
        <div style={{ textAlign: "center" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Screen;
