// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Search from "./Search";
import axios from "axios";

// Jacob, I added an Admin folder, and I have a simple component with search and grid result, you can either use this and design or create an AdminUI component for Cole design, I am just using this component to test Col backend functionality.

const Admin = () => {
  const [listCustomers, setListCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log("listCustomers", listCustomers);

  // function to extract company name from the note field
  const extractCompany = (str) => {
    if (!str) {
      return "";
    }
    const keyword = "Company:";
    if (str.includes(keyword)) {
      return str.split(keyword)[1].split(",")[0].trim();
    } else if (!str) {
      return;
    }
  };

  // function to extract specialty from the note field
  const keywordSpecialty = "Specialty:";
  const extractSpecialty = (str) => {
    if (str.includes(keywordSpecialty)) {
      return str.split(keywordSpecialty)[1].split(",")[0].trim();
    } else if (!str) {
      return;
    }
  };

  // function to extract specialty from the note field
  const keywordtShirtSize = "tShirtSize:";
  const extracttShirtSize = (str) => {
    if (str.includes(keywordtShirtSize)) {
      return str.split(keywordtShirtSize)[1].split(",")[0].trim();
    } else if (!str) {
      return;
    }
  };

  const company = extractCompany("Company");
  const specialty = extractSpecialty("Specialty");
  const tShirtSize = extracttShirtSize("tShirtSize");

  // function to filter customers by name
  const filtered = listCustomers.filter((res) => {
    const companyName = extractCompany(res.note);
    return (
      res.givenName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (companyName &&
        companyName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  //http request to get all customers via /api/customer route
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://acbcwebsite.onrender.com/api/customer"
        // "http://localhost:10000/api/customer"
      );
      setListCustomers(response.data);
    };
    fetchData();
    console.log("listCustomers", listCustomers);
  }, []);

  // function to format phone number
  const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ("" + phoneNumberString).replace(/\+/g, "");
    return cleaned;
  };

  //   styles
  const title = {
    backgroundColor: "white",
    color: "grey",
    margin: "0",
    textTransform: "uppercase",
    padding: "10px 0",
  };

  const Results = ({ results }) => {
    return (
      <>
        {/* DESKTOP UI version */}
        {/* <div style={{ backgroundColor: "white" }} striped bordered hover>
          <Row style={title}>
            <Col xs={5} sm={6} md={3}>#</Col>
            <Col xs={5} sm={6} md={3}>Name</Col>
            <Col xs={5} sm={6} md={3}>Email</Col>
            <Col xs={5} sm={6} md={3}>Phone#</Col>
          </Row>

          {listCustomers.map((result, index) => (
            <Row key={index}>
              <Col xs={5} sm={6} md={3}>{index + 1}</Col>
              <Col xs={5} sm={6} md={3}>{result.givenName}</Col>
              <Col xs={5} sm={6} md={3}>{result.emailAddress}</Col>
              <Col xs={5} sm={6} md={3}>{result.phoneNumber}</Col>
            </Row>
          ))}
        </div> */}

        {/* Mobile UI version */}
        <div style={{ backgroundColor: "white" }} striped bordered hover>
          {filtered.map((result, index) => (
            <Row key={index}>
              <hr />
              <aside style={{ padding: "1rem" }}>
                <span style={{ textDecoration: "underline" }}>
                  General Details
                </span>
                <div style={{ display: "flex" }}>
                  <Col xs={5}>Name</Col>
                  <Col xs={5}>{result.givenName}</Col>
                </div>
                <div style={{ display: "flex" }}>
                  <Col xs={5}>Email</Col>
                  <Col xs={5}>{result.emailAddress}</Col>
                </div>
                <div style={{ display: "flex" }}>
                  <Col xs={5}>Phone#</Col>
                  <Col xs={5}>{formatPhoneNumber(result.phoneNumber)}</Col>{" "}
                </div>
                <div style={{ display: "flex" }}>
                  <Col xs={5}>Shirt Size</Col>
                  <Col xs={5}>
                    {result.note && extracttShirtSize(result.note)}
                  </Col>
                </div>
              </aside>
              <aside style={{ padding: "0 1rem" }}>
                <span style={{ textDecoration: "underline" }}>
                  Practice Details
                </span>
                <div style={{ display: "flex" }}>
                  <Col xs={5}>Specialty</Col>
                  <Col xs={5}>
                    {result.note && extractSpecialty(result.note)}
                  </Col>
                </div>
                <div style={{ display: "flex" }}>
                  <Col xs={5}>Name</Col>
                  <Col xs={5}>{result.note && extractCompany(result.note)}</Col>
                </div>
                <div style={{ display: "flex" }}>
                  <Col xs={5}>Address</Col>
                  <Col xs={5}>{result.address.addressLine1}</Col>
                </div>

                <div style={{ display: "flex" }}>
                  <Col xs={5}>Address_2</Col>
                  <Col xs={5}>{result.address.addressLine2}</Col>
                </div>
              </aside>
            </Row>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <h1 style={{ color: "white" }}>Welcome Brandis</h1>
        <hr />
        <Search
          listCustomers={listCustomers}
          filteredCustomers={filteredCustomers}
          setFilteredCustomers={setFilteredCustomers}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          extractCompany={extractCompany}
        />
        <hr />
        <h4 style={title}>Registrant Information</h4>
        {/* <Results results={["Result 1", "Result 2", "Result 3"]} /> */}
        <Results results={filteredCustomers} />
      </div>
    </>
  );
};

export default Admin;
