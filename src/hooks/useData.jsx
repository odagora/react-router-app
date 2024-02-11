import { useState } from "react"

const initialData = [
  {
    id: 1,
    title: "¿Que es React?",
    slug: "que-es-react",
    content: "React es el mejor Framework de JavaScript, que lindo React",
    author: "odagora",
  },
  {
    id: 2,
    title: "¿Que es Vue?",
    slug: "que-es-vue",
    content: "Vue es el mejor Framework de JavaScript, que lindo Vue",
    author: "daniel",
  },
  {
    id: 3,
    title: "¿Que es Angular?",
    slug: "que-es-angular",
    content: "Angular esta bien, que lindo React XD",
    author: "daniel-c",
  },
  {
    id: 4,
    title: "¿Que es Svelte?",
    slug: "que-es-svelte",
    content: "Svelte es el mejor Framework de JavaScript, que lindo Svelte",
    author: "daniel-c",
  },
  {
    id: 5,
    title: "¿Que es Astro?",
    slug: "que-es-astro",
    content: "Astro es el mejor Framework de JavaScript, que lindo Astro",
    author: "daniel-c",
  }
];

export function useData() {
  const [data, setData] = useState(initialData);

  const createPost = (post) => {
    setData([...data, post]);
  }

  const editPost = (post) => {
    const postIndex = data.findIndex(ele => ele.id === post.id);
    if (postIndex >= 0) {
      const newData = [...data]
      newData[postIndex] = post;
      setData([...newData]);
    }
  }

  const deletePost = (slug) => {
    const updatedData = data.filter(post => post.slug !== slug);
    setData(updatedData);
  }

  return {
    data,
    createPost,
    editPost,
    deletePost
  }
}
