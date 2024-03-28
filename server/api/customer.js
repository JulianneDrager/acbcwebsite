require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const { Client, Environment } = require("square");

// access token
const squareClient = new Client({
  environment: Environment.Sandbox,
  accessToken:
    // "EAAAlzLmagOIlzdzcT1uw7MDkkuL02e2bxHbLHDnu-V7B2w5etx5RxdwSjZ2zF5f",
    // "EAAAlwA6A91QoTghE43RKpckU5YuNsw6bjsUyP2hbbvDFOcSwxE26cV4XWMd74D1",
    "EAAAlhhWyNDnz-vovQ_bTmqjBbG9QIG8evKHf66_xskBj0b22TGiOPSP6S4KorHo",
});

async function createCustomer(
  firstName,
  lastName,
  email,
  phone,
  address,
  address2,
  specialty,
  position,
  company,
  tShirtSize
) {
  const requestBody = {
    idempotencyKey: uuidv4(), // Generate a unique idempotency key
    givenName: firstName,
    familyName: lastName,
    emailAddress: email,
    phoneNumber: phone,
    address: {
      addressLine1: address,
      addressLine2: address2,
    },
    note: `Specialty:${specialty},
     Position:${position},
     Company:${company},
     tShirtSize:${tShirtSize}`,
    // Add other customer fields as needed
  };

  const { result, ...httpResponse } =
    await squareClient.customersApi.createCustomer(requestBody);
  if (httpResponse.statusCode === 200) {
    console.log("Customer created successfully:", result.customer);
    return result.customer;
  } else {
    console.error("Failed to create customer:", httpResponse);
    throw new Error(`Failed to create customer: ${httpResponse.errors}`);
  }
}

async function run() {
  // Define the variables
  let firstName = "Joy";
  let lastName = "Hoppkins";
  let email = "Joyr.doe@example.com";
  let phone = "+14155552671"; // Change this to a valid phone number in E.164 format
  let address = "9 Polly Lane";
  let address2 = "";
  let specialty = "Dr";
  let position = "Lead Dr";
  let company = "Healthcare LLC";
  let tShirtSize = "M";
  try {
    const customer = await createCustomer(
      firstName,
      lastName,
      email,
      phone,
      address,
      address2,
      specialty,
      position,
      company,
      tShirtSize
    );
    console.log("Created customer:", customer);
  } catch (error) {
    console.error("Failed to create customer:", error);
  }
}
run();
// createCustomer();
