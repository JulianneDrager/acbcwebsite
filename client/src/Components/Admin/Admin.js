import React from 'react';
import AdminStyle from "./Admin.module.css";

const Admin = () => {

    const mainContainer = AdminStyle.mainContainer;

    return (
        <main className={mainContainer}>
            <h1>Welcome to the Admin page!</h1>
            {/* Add your content here */}
        </main>
    );
};

export default Admin;