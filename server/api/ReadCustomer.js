require("dotenv").config();
// console.log(accessToken);

const { Client, Environment } = require("square");

const squareClient = new Client({
  environment: Environment.Production,
  accessToken:
    // "EAAAlzLmagOIlzdzcT1uw7MDkkuL02e2bxHbLHDnu-V7B2w5etx5RxdwSjZ2zF5f",
    // "EAAAlwA6A91QoTghE43RKpckU5YuNsw6bjsUyP2hbbvDFOcSwxE26cV4XWMd74D1",
    "EAAAlhhWyNDnz-vovQ_bTmqjBbG9QIG8evKHf66_xskBj0b22TGiOPSP6S4KorHo",
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
    console.log("Calling listCustomers API...");
    const response = await squareClient.customersApi.listCustomers();
    console.log("Response from listCustomers API:", response);
    const customers = response.result.customers;
    console.log("customers", customers);
    return customers;
  } catch (error) {
    console.error("Error listing customers:", error);
  }
}
// Call the function immediately
(async () => {
  const customers = await listCustomers();
  console.log("customers from async", customers);
})();

module.exports = { listCustomers };
