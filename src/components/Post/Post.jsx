import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    console.log(post);
    const {body, title, id} = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }
    return (
<div style={{border : '2px solid red', margin : '4px'}}>
            
            <h3>{id} : {title}</h3>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>
            <button>Post Details</button>
            </Link>
            <button onClick={handleNavigate}>Detail of : {id}</button>
        </div>
    );
};

export default Post;