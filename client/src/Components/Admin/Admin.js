import React from 'react';
import { Form } from "react-bootstrap";
import AdminStyle from "./Admin.module.css";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'; // SUPER-RESPONSIVE-TABLE library src: https://www.npmjs.com/package/react-super-responsive-table
import './responsiveTable.css';
import { Input } from '@mui/material';
import { Button } from 'react-bootstrap';

import useMediaQuery from "services/useMediaQuery";

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

    let adminIsLoggedIn = false;


    return (
        <main className={mainContainer}>
            {!adminIsLoggedIn ? <section>
                Login View
            </section> :
                <section>
                    <div className={header}>
                        <div className={headerEmpty}></div>
                        <h1 className={headerTitle}>Welcome, Brandis</h1>
                        <Button className={buttonLogout}>Log Out</Button>
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
                        <Button className={buttonSearch} type="submit">Search</Button>
                    </Form>
                    <Button className={buttonExport}>Export this List</Button>
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
                                <Td>Lorem Ipsum</Td>
                                <Td>123456789</Td>
                                <Td>$1234.56</Td>
                                <Td>John</Td>
                                <Td>Doe</Td>
                                <Td>Doctor</Td>
                                <Td>John's Clinic</Td>
                                <Td>johndoe@example.com</Td>
                                <Td>123-456-7890</Td>
                            </Tr>
                            <Tr>
                                <Td>Lorem Ipsum</Td>
                                <Td>123456789</Td>
                                <Td>$1234.56</Td>
                                <Td>John</Td>
                                <Td>Doe</Td>
                                <Td>Doctor</Td>
                                <Td>John's Clinic</Td>
                                <Td>johndoe@example.com</Td>
                                <Td>123-456-7890</Td>
                            </Tr>
                            <Tr>
                                <Td>Lorem Ipsum</Td>
                                <Td>123456789</Td>
                                <Td>$1234.56</Td>
                                <Td>John</Td>
                                <Td>Doe</Td>
                                <Td>Doctor</Td>
                                <Td>John's Clinic</Td>
                                <Td>johndoe@example.com</Td>
                                <Td>123-456-7890</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </section>}
        </main>
    );
};

export default Admin;