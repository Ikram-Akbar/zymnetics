import React from 'react';
import './FriendDetaills.css'
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    const {id, name, phone, email } = friend;
    return (
        <div className='friend-container'>
            <h1>Friend Details based on ID no -{id} </h1>
            <p>Name : {name} </p>
            <p>Phone : {phone} </p>
            <p>email : {email} </p>
        </div>
    );
};

export default FriendDetails;