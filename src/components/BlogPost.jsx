import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./BlogPage";
import { useAuth } from "../hooks/useAuth";

export const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();
  const blogpost = blogdata.find((post) => post.slug === slug);

  const canDelete =
    auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const returnBlog = () => {
    navigate("/blog", { replace: true });
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete && <button>Eliminar blogpost</button>}

      {auth.user?.isEditor && <button>Editar blogpost</button>}
    </>
  );
};
