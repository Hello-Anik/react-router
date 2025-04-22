import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';


const PostDetail = () => {
    const PostDetail = useLoaderData();
    console.log(PostDetail);
    const navigate = useNavigate();
const handleGo = () => {
    navigate('/posts')
}
    return (
        <div>
            <h2>{PostDetail.title}</h2>
            <p>{PostDetail.body}</p>
            <button onClick={handleGo}>Go Back</button>
        </div>
    );
};

export default PostDetail;