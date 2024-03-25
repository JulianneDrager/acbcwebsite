import React, { Component } from "react";
import { Table } from "react-bootstrap";

const Admin = () => {
  const Search = () => {
    return <input type="search" placeholder="Search..." />;
  };

  const Results = ({ results }) => {
    return (
      <Table style={{ backgroundColor: "white" }} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{result}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <>
      <div>
        <h1 style={{ color: "white" }}>Welcome Brandis</h1>
        <hr />
        <Search />
        <hr />
        <Results results={["Result 1", "Result 2", "Result 3"]} />
      </div>
    </>
  );
};

export default Admin;
