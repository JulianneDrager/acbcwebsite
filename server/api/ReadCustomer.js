require("dotenv").config();
// console.log(accessToken);

const { Client, Environment } = require("square");

const squareClient = new Client({
  environment: Environment.Sandbox,
  accessToken:
    "EAAAlzLmagOIlzdzcT1uw7MDkkuL02e2bxHbLHDnu-V7B2w5etx5RxdwSjZ2zF5f",
});

// async function fetchCustomer(customerId) {
//   try {
//     const {
//       result: { customer },
//     } = await squareClient.customersApi.retrieveCustomer(customerId);
//     console.log(customer);
//   } catch (error) {
//     console.error("Error fetching customer:", error);
//   }
// }

// Call the function with a valid customer ID
// fetchCustomer('NRPH7PJ338819PYZP0QE05YXP0');

async function listCustomers() {
  try {
    const {
      result: { customers },
    } = await squareClient.customersApi.listCustomers();
    console.log(customers);
  } catch (error) {
    console.error("Error listing customers:", error);
  }
}

module.exports = { listCustomers };
