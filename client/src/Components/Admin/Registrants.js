import React, { useEffect, useState } from 'react';
import { Tr, Td } from 'react-super-responsive-table';
// import registrantsData from './dbRegistrants'; // change this source for live DB
import fetchRegistrants from 'services/fetchRegistrants';

const RegistrantRow = (props) => {
    return (
        <Tr>
            <Td>{props.eventName}</Td>
            <Td>{props.ticketNumber}</Td>
            <Td>{props.paidAmount}</Td>
            <Td>{props.firstName}</Td>
            <Td>{props.lastName}</Td>
            <Td>{props.title}</Td>
            <Td>{props.practice}</Td>
            <Td>{props.email}</Td>
            <Td>{props.phone}</Td>
        </Tr>
    );
};

const RegistrantsList = () => {
    const [registrantsData, setRegistrantsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRegistrants();
                setRegistrantsData(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    const registrantsRows = registrantsData.map((data) => {
        return <RegistrantRow key={data.id} {...data} />;
    });

    return registrantsRows;
};

export default RegistrantsList;