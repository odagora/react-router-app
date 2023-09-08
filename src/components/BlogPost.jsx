import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./BlogPage";

export const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const blogpost = blogdata.find((post) => post.slug === slug);

  const returnBlog = () => {
    navigate("/blog");
  };

  return (
    <>
      <h2>{blogpost.title}</h2>

      <button onClick={returnBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
    </>
  );
};
