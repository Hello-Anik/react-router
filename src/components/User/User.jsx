import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {

    const [showInfo, setShowInfo] = useState(false)

    const location = useLocation();
    console.log(location)
    const {name, phone, email, id} = user;
    const userStyle = {
        border : '2px solid green',
        borderRadius : '20px',
        padding : '10px',
        margin : '10px'
        
    }
    const [visitHome, setVisitHome] = useState(false);
    if(visitHome){
        return <Navigate to={'/'}></Navigate>
    }

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email : {email}</p>
            <p><small>Phone : {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={()=>setShowInfo(!showInfo)}>{showInfo? "Hide":"Show"} info</button>
            {
                showInfo &&  <Suspense fallback={<span>Loading....</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={()=>setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;