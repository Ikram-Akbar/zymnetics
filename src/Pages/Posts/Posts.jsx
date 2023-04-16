import React from "react";
import Post from "../Post/Post";
import { useLoaderData } from "react-router-dom";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1>The Number of Post {posts.length} </h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
