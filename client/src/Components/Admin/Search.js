import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = ({
  listCustomers,
  searchTerm,
  setSearchTerm,
  setFilteredCustomers,
  extractCompany,
}) => {
  const [company, setCompany] = useState(false);
  const [name, setName] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = () => {
    // Perform the search when the button is clicked
    const newFilteredCustomers = listCustomers.filter((customer) => {
      if (company) {
        // Filter by company name
        const companyName = extractCompany(customer.note);
        return (
          companyName &&
          companyName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        // Filter by given name
        return customer.givenName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
    });
    setFilteredCustomers(newFilteredCustomers);
  };

  return (
    <>
      <div style={{ padding: "2rem" }}>
        {name && (
          <div>
            <input
              type="search"
              placeholder="Search By Name"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button onClick={handleButtonClick}>SEARCH</button>
          </div>
        )}
        {company && (
          <div>
            <input
              type="search"
              placeholder="Search By Company"
              value={searchTerm}
              onChange={handleSearch}
              style={{ backgroundColor: "lightgrey" }}
            />
            <button onClick={handleButtonClick}>SEARCH</button>
          </div>
        )}

        <Link
          style={{ fontSize: "smaller", textDecoration: "none" }}
          onClick={() => {
            setCompany(false);
            setName(true);
          }}
        >
          SEARCH BY NAME
        </Link>
        <br />
        <Link
          style={{ fontSize: "smaller", textDecoration: "none" }}
          onClick={() => {
            setName(false);
            setCompany(true);
          }}
        >
          SEARCH BY COMPANY
        </Link>
        <br />
      </div>
    </>
  );
};

export default Search;
