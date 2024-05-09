import { Form, useNavigate } from 'react-router-dom'
import postPost from '../utilits/postPost'
import { useState } from 'react';


export default function CreatePost() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    postPost(formJson.content);

    navigate('/');
  }

  const onChange = (e) => {
    const {value} = e.target
    const regexpString = import.meta.env.VITE_REGEXP + '$';
    const regexp = new RegExp(regexpString);
    
    if (regexp.test(value) || value === '') {
      setText(value)
    }
    
  }
  
  return (
    <>
      <Form onSubmit={handler}>
        <input type='text' name='content' value={text} onChange={onChange}></input>
        <button type='submit'>Опубликовать пост</button>
        <span className='cancleBtn' onClick={() => navigate('/')}>X</span>
      </Form>

    </>
  )
}