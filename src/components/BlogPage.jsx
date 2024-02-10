import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useData } from "../hooks/useData";
import { useAuth } from '../hooks/useAuth';

export const BlogPage = () => {
  const { user } = useAuth();
  const { data } = useData();
  const navigate = useNavigate();

  const createPost = () => {
    navigate("/blog/create");
  }

  return (
    <>
      <h1>Blog</h1>
      {user && <button onClick={createPost}>Crear un nuevo post</button>}
      <Outlet />
      <ul>
        {data.map((post) => (
          <BlogLink key={post.title} post={post} />
        ))}
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
