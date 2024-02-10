import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useData } from "../hooks/useData";

export const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();
  const { data, deletePost } = useData();
  const blogpost = data.find((post) => post.slug === slug);

  const canDelete =
    auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const returnBlog = () => {
    navigate("/blog", { replace: true });
  };

  const handleEdit = (slug) => {
    navigate(`/blog/${slug}/edit`);
  }

  const handleDelete = (slug) => {
    deletePost(slug);
    navigate('/blog');
  }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete && <button onClick={() => handleDelete(blogpost.slug)}>Eliminar blogpost</button>}

      {auth.user?.isEditor && <button onClick={() => handleEdit(blogpost.slug)}>Editar blogpost</button>}
    </>
  );
};
