import React from "react";
import {
  PaymentForm,
  CreditCard,
  Ach,
  ApplePay,
} from "react-square-web-payments-sdk";

const MyPaymentForm = () => {
  return (
    <PaymentForm
      applicationId="sandbox-sq0idb-TJ977YZPIwv8gvpBuvbnzA"
      locationId="L80KFT030HD0V"
      cardTokenizeResponseReceived={async (token, buyer) => {
        const response = await fetch("http://localhost:5000/api/pay", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sourceId: token.token,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          alert(JSON.stringify(data, null, 2));
        } else {
          console.error("Server response:", await response.text());
        }
      }}
    >
      <CreditCard />
      <p></p>
      <Ach accountHolderName="John Doe" />
      <p></p>
      {/* <ApplePay /> */}
    </PaymentForm>
  );
};

export default MyPaymentForm;
