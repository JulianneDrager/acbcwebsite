import { Tr, Td } from 'react-super-responsive-table'; // SUPER-RESPONSIVE-TABLE library src: https://www.npmjs.com/package/react-super-responsive-table
import registrantsData from './dbRegistrants';

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
    const registrantsRows = registrantsData.map((data) => {
        return <RegistrantRow key={data.id} {...data} />;
    });
    return registrantsRows;
};

export default RegistrantsList;