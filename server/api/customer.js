require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const { Client, Environment } = require("square");

// access token
const squareClient = new Client({
  environment: Environment.Sandbox,
  accessToken:
    "EAAAlzLmagOIlzdzcT1uw7MDkkuL02e2bxHbLHDnu-V7B2w5etx5RxdwSjZ2zF5f",
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
  message
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
     Message:${message}`,
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
  let firstName = "Chris";
  let lastName = "Drager";
  let email = "Cdrager.doe@example.com";
  let phone = "+15485516481"; // Change this to a valid phone number in E.164 format
  let address = "123 Main St";
  let address2 = "Apt 4B";
  let specialty = "Dr";
  let position = "Pharmacist";
  let company = "ABC Pharmacy";
  let message = "This is a test message.";
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
      message
    );
    console.log("Created customer:", customer);
  } catch (error) {
    console.error("Failed to create customer:", error);
  }
}
run();
