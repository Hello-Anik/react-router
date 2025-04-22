import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const userData = useLoaderData();
    console.log(userData);
    const {website, name} = userData;
    return (
        <div>
            <h3>User Details here</h3>
            <h2>Name : {name}</h2>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;