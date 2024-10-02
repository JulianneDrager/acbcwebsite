import React from "react";
import { useNavigate } from "react-router-dom";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";

const MyPaymentForm = () => {
  const navigate = useNavigate();
  const amount = 27.0; // Amount in dollars

  return (
    <>
      <h2>Registration Payment</h2>
      <p>Amount: ${amount.toFixed(2)}</p>
      <PaymentForm
        applicationId="sq0idp-KQ8gyOa1SfCh-mL-wWbngA"
        locationId="L80KFT030HD0V"
        cardTokenizeResponseReceived={async (token, buyer) => {
          try {
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
              // alert(JSON.stringify(data, null, 2));
              navigate("/register"); // Navigate to the register page
            } else {
              console.error("Server response:", await response.text());
              alert("Payment failed. Please try again.");
            }
          } catch (error) {
            console.error("Error processing payment:", error);
            alert("An error occurred. Please try again.");
          }
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <CreditCard />
        </div>
      </PaymentForm>
    </>
  );
};

export default MyPaymentForm;
