import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import AdminStyle from "./Admin.module.css";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'; // SUPER-RESPONSIVE-TABLE library src: https://www.npmjs.com/package/react-super-responsive-table
import './responsiveTable.css';
import { Input } from '@mui/material';
import { Button } from 'react-bootstrap';

import useMediaQuery from "services/useMediaQuery";

import RegistrantsList from './RegistrantsList';


const Admin = () => {

    const matchedDesktop = useMediaQuery("(min-width: 728px)");
    const matchedDesktopLarge = useMediaQuery("(min-width: 1024px)");

    const mainContainer = AdminStyle.mainContainer;
    const header = AdminStyle.header;
    const headerEmpty = AdminStyle.headerEmpty;
    const headerTitle = AdminStyle.headerTitle;
    const buttonLogout = AdminStyle.buttonLogout;
    const formSearch = AdminStyle.formSearch;
    const formSearchBar = AdminStyle.formSearchBar;
    const buttonSearch = AdminStyle.buttonSearch;
    const buttonExport = AdminStyle.buttonExport;
    const table = AdminStyle.table;

    const [adminIsLoggedIn, setAdminIsLoggedIn] = useState(false);
    console.log(adminIsLoggedIn);



    return (
        <main className={mainContainer}>
            {!adminIsLoggedIn ? <section>
                <Form>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={() => { setAdminIsLoggedIn(true) }}>
                        Login
                    </Button>
                </Form>
            </section> :
                <section>
                    
                    <div className={header}>
                        <div className={headerEmpty}></div>
                        <h1 className={headerTitle}>Welcome, Brandis</h1>
                        <Button className={buttonLogout} type="submit" onClick={() => { setAdminIsLoggedIn(false) }}>Log Out</Button>
                    </div>
                
                    <Form
                        id="formSearch"
                        // ref={refForm}
                        onSubmit={() => { }}
                        // validated={validated}
                        className={formSearch}
                        autoComplete="on"
                    >
                        <Input className={formSearchBar} placeholder="Search" inputProps={{ 'aria-label': 'description' }} />
                        <Button className={buttonSearch}>Search</Button>
                    </Form>

                    <Button className={buttonExport} >Export this List</Button>

                    <Table className={table}>
                        <Thead>
                            <Tr>
                                <Th>Event</Th>
                                <Th>Ticket</Th>
                                <Th>Amount Paid</Th>
                                <Th>First Name</Th>
                                <Th>Last Name</Th>
                                <Th>Title</Th>
                                <Th>Practice</Th>
                                <Th>Email</Th>
                                <Th>Phone #</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Ipsum</Td>
                                <Td>123456789</Td>
                                <Td>$1234.56</Td>
                                <Td>John</Td>
                                <Td>Doe</Td>
                                <Td>Doctor</Td>
                                <Td>John's Clinic</Td>
                                <Td>johndoe@example.com</Td>
                                <Td>123-456-7890</Td>
                            </Tr>
                            <RegistrantsList />
                        </Tbody>
                    </Table>
                </section>}
        </main>
    );
};

export default Admin;