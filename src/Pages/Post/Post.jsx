import React from "react";
import "./Post.css";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate(`/posts/${id}`);
  };
  return (
    <div className="container">
      <small>Order : {id}</small>
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={handleNavigate}>Show Details</button>
    </div>
  );
};

export default Post;
