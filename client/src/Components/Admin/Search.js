import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminStyle from "./Admin.module.css";
import { InputGroup, Form, Col, Button } from "react-bootstrap";

const Search = ({ data, setFilteredCustomers, setData }) => {
  const formSearchBar = AdminStyle.formSearchBar;
  const buttonSearch = AdminStyle.buttonSearch;
  const buttonReset = AdminStyle.buttonReset;
  const formSearch = AdminStyle.formSearch;
  const linkStyle = AdminStyle.linkStyle;
  const linkStyle2 = AdminStyle.linkStyle2;

  const [isPractice, setIsPractice] = useState(false);
  const [isEvent, setIsEvent] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //filtering the data by practice
  const handleButtonClick = (customer) => {
    // Perform the search when the button is clicked
    const newFilteredCustomers = data.filter((customer) => {
      if (isPractice) {
        // Filter by company name
        console.log("companyName", customer.practice);
        return customer.practice
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      } else if (isEvent) {
        // Filter by event
        console.log("eventName", customer.eventDropDown);
        return customer.eventDropDown
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      } else if (name) {
        // Filter by given name
        console.log("firstName", customer.firstName);
        return customer.firstName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
    });
    setData(newFilteredCustomers);
  };

  // const testHndle = () => {
  //   const newFilteredCustomers = data.filter((customer) => {
  //     // console.log("companyName", customer.practice);
  //     return customer.practice.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  //   console.log("newFilteredCustomers", newFilteredCustomers);
  //   setData(newFilteredCustomers);
  // };

  const resetSearch = () => {
    window.location.reload();
  };

  return (
    <>
      <div style={{ padding: ".5rem", color: "white" }}>
        <h6 style={{ fontSize: "smaller", fontWeight: "normal" }}>
          Please choose your search criteria below
        </h6>
        {name && (
          <div className={formSearch}>
            <Form.Group as={Col}>
              <InputGroup>
                <Form.Control
                  className={formSearchBar}
                  type="search"
                  placeholder="Search By Name"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </InputGroup>{" "}
            </Form.Group>

            <Button className={buttonSearch} onClick={handleButtonClick}>
              <span class="material-symbols-outlined">search</span>
            </Button>
            <Button className={buttonReset} onClick={resetSearch}>
              Reset
            </Button>
          </div>
        )}
        {isPractice && (
          <div div className={formSearch}>
            <Form.Group as={Col}>
              <InputGroup>
                <Form.Control
                  className={formSearchBar}
                  type="search"
                  placeholder="Search By Practice"
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{ backgroundColor: "lightgrey" }}
                />
              </InputGroup>
            </Form.Group>

            <Button className={buttonSearch} onClick={handleButtonClick}>
              <span class="material-symbols-outlined">search</span>
            </Button>
            <Button className={buttonReset} onClick={resetSearch}>
              Reset
            </Button>
          </div>
        )}
        {isEvent && (
          <div div className={formSearch}>
            <Form.Group as={Col}>
              <InputGroup>
                <Form.Control
                  className={formSearchBar}
                  type="search"
                  placeholder="Search By Event"
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{ backgroundColor: "lightgrey" }}
                />
              </InputGroup>
            </Form.Group>

            <Button className={buttonSearch} onClick={handleButtonClick}>
              <span class="material-symbols-outlined">search</span>
            </Button>
            <Button className={buttonReset} onClick={resetSearch}>
              Reset
            </Button>
          </div>
        )}

        <Link
          className={linkStyle}
          onClick={() => {
            setIsPractice(false);
            setIsEvent(false);
            setName(true);
          }}
        >
          SEARCH BY NAME
        </Link>
        <br />
        <Link
          className={linkStyle2}
          onClick={() => {
            setName(false);
            setIsEvent(false);
            setIsPractice(true);
          }}
        >
          SEARCH BY PRACTICE
        </Link>
        <br />
        <Link
          className={linkStyle2}
          onClick={() => {
            setName(false);
            setIsPractice(false);
            setIsEvent(true);
          }}
        >
          SEARCH BY EVENT
        </Link>
      </div>
    </>
  );
};

export default Search;
