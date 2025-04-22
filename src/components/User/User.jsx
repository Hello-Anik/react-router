import React from 'react';

const User = ({user}) => {
    const {name, phone, email} = user;
    const userStyle = {
        border : '2px solid green',
        borderRadius : '20px',
        padding : '10px',
        margin : '10px'

    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email : {email}</p>
            <p><small>Phone : {phone}</small></p>
        </div>
    );
};

export default User;