import React from "react";
import { Link, Outlet } from "react-router-dom";

export const blogdata = [];

blogdata.push({
  title: "¿Que es React?",
  slug: "que-es-react",
  content: "React es el mejor Framework de JavaScript, que lindo React",
  author: "odagora",
});

blogdata.push({
  title: "¿Que es Vue?",
  slug: "que-es-vue",
  content: "Vue es el mejor Framework de JavaScript, que lindo Vue",
  author: "daniel",
});

blogdata.push({
  title: "¿Que es Angular?",
  slug: "que-es-angular",
  content: "Angular esta bien, que lindo React XD",
  author: "daniel-c",
});

blogdata.push({
  title: "¿Que es Svelte?",
  slug: "que-es-svelte",
  content: "Svelte es el mejor Framework de JavaScript, que lindo Svelte",
  author: "daniel-c",
});

export const BlogPage = () => {
  return (
    <>
      <h1>Blog</h1>
      <Outlet />
      <ul>
        {blogdata.map((post) => (
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
