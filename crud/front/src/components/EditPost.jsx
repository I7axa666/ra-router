import { useParams, useNavigate, Form } from "react-router-dom"
import { useState, useEffect } from 'react';
import { usePosts } from "./PostsContext"
import deletePost from "../utilits/deletePost"
import postPost from "../utilits/postPost"

export default function EditPost() {
  const {id: postId} = useParams()
  const { posts } = usePosts()
  const [text, setText] = useState('')
  
  const post = posts.find(post => Number(post.id) === Number(postId))
  
  useEffect(() => {
    setText(post.content)
  }, [post])
  
  const navigate = useNavigate();
  const handler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    postPost(formJson.content, postId);

    navigate('/');
  }

  const onChange = (e) => {
    const {value} = e.target
    const regexp = /^[a-zA-Z0-9\s.,?!]*$/
    
    if (regexp.test(value) || value === '') {
      setText(value)
    }
  }

  const removePost = async () => {
    await deletePost(postId)
    navigate('/')
  }
  
  
  return (
    <>
      <Form onSubmit={handler}>
        <input type='text' value={text} onChange={onChange} name='content'></input>
        <button type='submit'>Сохранить изменения</button>
        <button type='button' onClick={removePost}>Удалить</button>
        <span className='cancleBtn' onClick={() => navigate('/')}>X</span>
      </Form>

    </>
  )
}