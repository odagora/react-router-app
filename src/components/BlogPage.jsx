import React from "react";
import { useData } from "../hooks/useData";
import { useAuth } from '../hooks/useAuth';
import { Link, Outlet, useNavigate } from "react-router-dom";

export const BlogPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data, createPost, editPost, deletePost } = useData();

  const createPostHandler = () => {
    navigate("/blog/create");
  }

  return (
    <>
      <h1>Blog</h1>
      {user && <button onClick={createPostHandler}>Crear un nuevo post</button>}
      <Outlet context={{ data, createPost, editPost, deletePost }}/>
      <ul>
        {data ? (
          data.map((post) => (
          <BlogLink key={post.title} post={post} />
        ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
};

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};
