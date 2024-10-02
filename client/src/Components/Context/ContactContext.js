import axios from "axios";
import React, { createContext, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a new context
const ContactContext = createContext();

// Custom hook to access the context
export const useContactContext = () => useContext(ContactContext);

// ContactContextProvider component
export const ContactContextProvider = ({ children }) => {
  const refForm = useRef();

  // Define the formData state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDropDown, setEventDropDown] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [position, setPosition] = useState("");
  const [practice, setPractice] = useState("");
  const [practiceAddress, setPracticeAddress] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("type"); // ["general", "sponsor", "subscribe"]
  const [shirtSize, setShirtSize] = useState(""); // ["S", "M", "L", "XL", "XXL"
  const [individualDown, setIndividualDown] = useState("");

  // console.log("type", type);
  // trying try/catch
  const navigate = useNavigate();

  const sendEmailHandler = async (e) => {
    e.preventDefault();

    // prepare to send data
    const data = {
      firstName,
      lastName,
      email,
      phone,
      eventDropDown,
      individualDown,
      address,
      address2,
      practiceAddress,
      specialty,
      position,
      practice,
      company,
      message,
      type,
      shirtSize,
    };

    // Log the data object
    console.log("data object inside sendEmailHandler: ", data);

    try {
      const response = await fetch(
        "https://acbcwebsite.onrender.com/send-email",
        // "http://localhost:10000/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("res", data);
      // alert("email has been sent!");
    } catch (error) {
      console.log("Error while sending the email", data, error);
    }

    // finally {
    //   navigate(`/thankyou/${firstName}`);
    // }
  };

  //post the above data to the register
  const RegisterHandler = (e) => {
    e.preventDefault();
    // axios request
    axios({
      method: "POST",
      url: "https://acbcwebsite.onrender.com/api/create",
      //  url: "http://localhost:10000/api/create",
      headers: { "Content-Type": "application/json" },
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        eventDropDown: eventDropDown,
        individualDown: individualDown,
        practice: practice,
        specialty: specialty,
        practiceAddress: practiceAddress,
        shirtSize: shirtSize,
      },
    }).then(function (response) {
      if (type === "register") {
        alert("Registrant added!");
        navigate(`/thankyou/${firstName}`);
      }
      //   if (
      //     type === "register" &&
      //     eventDropDown === "2024 Grand Rapids, Michigan Round Up"
      //   ) {
      //     navigate(`/thankyou/${firstName}`);
      //   }

      //   console.log("res", response.data);
    });
  };

  return (
    <ContactContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phone,
        eventDropDown,
        setEventDropDown,
        setPhone,
        address,
        setAddress,
        address2,
        setAddress2,
        practiceAddress,
        setPracticeAddress,
        specialty,
        setSpecialty,
        position,
        setPosition,
        practice,
        setPractice,
        company,
        setCompany,
        message,
        setMessage,
        individualDown,
        setIndividualDown,
        type,
        setType,
        shirtSize,
        setShirtSize,
        sendEmailHandler,
        RegisterHandler,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
