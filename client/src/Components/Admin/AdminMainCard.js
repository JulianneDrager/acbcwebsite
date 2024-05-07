import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import AdminStyle from "./Admin.module.css";

const AdminMainCard = ({ data, setData, searchTerm }) => {
  const rowA = AdminStyle.rowA;
  const rowB = AdminStyle.rowB;
  const divStyle = AdminStyle.divStyle;

  useEffect(() => {
    axios
      .get("https://acbcwebsite.onrender.com/api/get")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // const filteredData = data.filter((item) =>
  //   item.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // console.log(
  //   "data",
  //   data.filter((item) => item)
  // );

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <Row>
            <hr style={{ margin: ".5rem" }} />
            <aside>
              <div className={divStyle}>
                <Col className={rowB} xs={3}>
                  <b>Event:</b>
                </Col>
                <Col className={rowB} xs={8}>
                  {item.eventDropDown}
                </Col>
              </div>
              <div className={divStyle}>
                <Col className={rowA} xs={3}>
                  <b>Name:</b>
                </Col>
                <Col className={rowA} xs={8}>
                  {item.firstName} {item.lastName}
                </Col>
              </div>
              <div className={divStyle}>
                <Col className={rowB} xs={3}>
                  <b>Email:</b>
                </Col>
                <Col className={rowB} xs={8}>
                  {item.email}
                </Col>
              </div>
              <div className={divStyle}>
                <Col className={rowA} xs={3}>
                  <b>Phone:</b>
                </Col>
                <Col className={rowA} xs={8}>
                  {item.phone}
                </Col>
              </div>
              <div className={divStyle}>
                <Col className={rowB} xs={3}>
                  <b>Specialty:</b>
                </Col>
                <Col className={rowB} xs={8}>
                  {item.specialty}
                </Col>
              </div>
              <div className={divStyle}>
                <Col className={rowA} xs={3}>
                  <b>Practice:</b>
                </Col>
                <Col className={rowA} xs={8}>
                  {item.practice}
                </Col>
              </div>
              <div className={divStyle}>
                <Col className={rowB} xs={3}>
                  <b>Practice Address:</b>
                </Col>
                <Col className={rowB} xs={8}>
                  {item.practiceAddress}
                </Col>
              </div>
              <div className={divStyle}>
                <Col className={rowA} xs={3}>
                  <b>Shirt Size:</b>
                </Col>
                <Col className={rowA} xs={8}>
                  {item.shirtSize}
                </Col>
              </div>
            </aside>
          </Row>
        </div>
      ))}
    </>
  );
};

export default AdminMainCard;
