import React from "react";
import {
  PaymentForm,
  CreditCard,
  Ach,
  ApplePay,
} from "react-square-web-payments-sdk";

const MyPaymentForm = () => {
  const amount = 1.0; // Amount in dollars
  return (
    <>
      <h2>Registration Payment</h2>
      <p>Amount: ${amount.toFixed(2)}</p>
      <PaymentForm
        applicationId="sq0idp-KQ8gyOa1SfCh-mL-wWbngA"
        locationId="L80KFT030HD0V"
        cardTokenizeResponseReceived={async (token, buyer) => {
          const response = await fetch(
            "https://acbcwebsite.onrender.com/api/pay",
            // "http://localhost:10000/api/pay",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                sourceId: token.token,
              }),
            }
          );

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
    </>
  );
};

export default MyPaymentForm;
