// import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import AdminCard from "./AdminMainCard";
import { Button } from "react-bootstrap";
import axios from "axios";
import AdminStyle from "./Admin.module.css";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import Add from "./Add";

const Admin = () => {
  const extractStyle = AdminStyle.extractStyle;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(false);

  // logout user
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log("TOKEN", token);
    if (!token) {
      navigate("/login");
    }
  }, []); // Empty array means this effect runs once on mount and never again

  const emailList = data.map((item, index) => (
    <div key={index}>
      <div>{item.email}</div>
    </div>
  ));

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  //filter data to extract the emails based on the search term
  const filtered = data.filter((res) => {
    return res.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Map over the filtered array to extract the emails
  // Each email is an object with a single property: email
  const returnedEmails = filtered.map((res) => ({
    "Guest Name": res.firstName + " " + res.lastName,
    "Email Address": res.email,
    "Ticket Type": res.eventDropDown,
    "Phone Number": res.phone,
    "Specialty ": res.specialty,
    "Practice ": res.practice,
    "Practice Address": res.practiceAddress,
    "Shirt Size": res.shirtSize,
  }));

  const extractEmails = () => {
    axios
      //   .get("http://localhost:10000/api/extract-emails/")
      .get("https://acbcwebsite.onrender.com/api/extract-emails/")
      .then((res) => {
        // setData(res.data.xls); // Set data to res.data.xls
        console.log(res);

        // Add a header row to the returnedEmails array
        const emailsWithHeader = [
          // {
          //   "Headers Row: ":
          //     "Access Coordinator Boot Camp Registrant Information ",
          // },
          ...returnedEmails,
        ];

        const ws = XLSX.utils.json_to_sheet(emailsWithHeader); // Use res.data.xls here
        // Set the width of the columns
        ws["!cols"] = [
          { wch: 20 }, // "Guest Name" column
          { wch: 38 }, // "Email" column
          { wch: 35 }, // "Event" column
          { wch: 20 }, // "Phone" column
          { wch: 20 }, // "Specialty" column
          { wch: 40 }, // "Practice" column
          { wch: 48 }, // "Practice Address" column
          { wch: 20 }, // "Shirt Size" column
          // Add more objects for more columns
        ];
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Registrant Emails");
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        });
        FileSaver.saveAs(data, "emails.xlsx");
      })
      .catch((err) => console.error(err));
  };

  console.log("EMAIL", returnedEmails);

  return (
    <>
      <h1 style={{ color: "white", padding: "1rem 0 1rem .5rem" }}>
        Welcome Brandis
      </h1>
      <Button style={{ background: "white", color: "black" }} onClick={logout}>
        LOG OUT
      </Button>

      <Search
        filteredCustomers={filteredCustomers}
        setFilteredCustomers={setFilteredCustomers}
        data={data}
        setData={setData}
      />

      <Add />

      <div style={{ float: "right", width: "100%" }}>
        <Button onClick={extractEmails} className={extractStyle}>
          EXTRACT EMAILS
        </Button>
        {clicked ? (
          <div>
            <h1>Emails</h1>
            {emailList}
          </div>
        ) : null}
      </div>

      <AdminCard
        data={data}
        setData={setData}
        filteredCustomers={filteredCustomers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </>
  );
};

export default Admin;
