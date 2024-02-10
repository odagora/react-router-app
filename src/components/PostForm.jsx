import { React, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import { useData } from "../hooks/useData";

export const PostForm = () => {
  const { user } = useAuth();
  const { slug } = useParams();
  const { data, createPost, editPost } = useData();
  const navigate = useNavigate();

  const initialFormData = slug ? postToEdit(slug) : {
    title: '',
    slug: '',
    content: '',
    author: user.username
  }

  const [ formData, setFormData ] = useState(initialFormData);

  function postToEdit(slug) {
    return data.find(post => post.slug === slug);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (slug) {
      editPost(formData)
    } else {
      createPost(formData);
    }

    navigate('/blog');
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    const generateSlug = () => {
      const regex = /\p{L}+/gu;
      const matches = formData.title.toLowerCase().match(regex);

      if (matches) {
        return matches.join('-');
      }
      return '';
    };

    const newSlug = generateSlug();

    if (newSlug) {
      setFormData({
        ...formData,
        slug: newSlug
      });
    }
  }, [slug, formData.title]);


  return (
    <>
      {slug
        ? <h2>Edit post</h2>
        : <h2>Create a new post</h2>
      }
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input name='title' type="text" id='title'placeholder='Title' value={formData.title} onChange={handleChange} required/>
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" cols="30" rows="10" placeholder='Post Content' value={formData.content} onChange={handleChange} required/>
        <input type="submit" value={slug ? 'Save Changes' : 'Create Post'} />
      </form>
    </>
  )
}
