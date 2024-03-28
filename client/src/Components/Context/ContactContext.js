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
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); // ["general", "sponsor", "subscribe"]

  // trying try/catch
  //   const navigate = useNavigate();

  const sendEmailHandler = async (e) => {
    e.preventDefault();

    // prepare to send data
    const data = {
      firstName,
      lastName,
      email,
      phone,
      address,
      address2,
      specialty,
      position,
      company,
      message,
      type,
    };

    try {
      const response = await fetch(
        "https://acbcwebsite.onrender.com/send-email",
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

      console.log("res", response);
      alert("email has been sent!");
    } catch (error) {
      console.log("Error while sending the email", error);
    } finally {
      // navigate(`/thankyou/${refForm.current.name.value}`);
    }
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
        setPhone,
        address,
        setAddress,
        address2,
        setAddress2,
        specialty,
        setSpecialty,
        position,
        setPosition,
        company,
        setCompany,
        message,
        setMessage,
        type,
        setType,
        sendEmailHandler,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
