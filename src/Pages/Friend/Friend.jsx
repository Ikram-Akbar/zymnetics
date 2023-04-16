import React from "react";

const Friend = ({ friend }) => {
  const { name, username, email } = friend;
  return (
    <div>
      <h4>name : {name} </h4>
    </div>
  );
};

export default Friend;
