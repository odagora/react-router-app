import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";

export const BlogPost = () => {
  const auth = useAuth();
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data, deletePost } = useOutletContext();
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
