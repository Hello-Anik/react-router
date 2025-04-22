import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise);
    const {name, id, username, email} = user;
    return (
        <div>
            <h2>Name : {name}</h2>
            <h3>User Name : {username}</h3>
            <p>Email : {email}</p>
        </div>
    );
};

export default UserDetails2;