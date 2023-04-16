import React from "react";
import "./PostDetails.css";
import { NavLink, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { userId, id, title, body } = post;
  return (
    <div className="post-container">
      <h1>Post ID : {id} </h1>
      <h6>user Id : {userId} </h6>
      <h4>{title} </h4>
          <h5> {body} </h5>
          <NavLink to={`/friend/${id}`}>find the author</NavLink>
    </div>
  );
};

export default PostDetails;
