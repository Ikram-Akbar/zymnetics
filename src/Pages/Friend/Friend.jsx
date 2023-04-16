import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { id, name, username, email } = friend;
  return (
    <div>
      <h4>Name : {name} </h4>
      <p>Email: {email} </p>
      <p>
        <Link to={`/friend/${id}`}>{username}</Link>
      </p>
    </div>
  );
};

export default Friend;
