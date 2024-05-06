import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import getContacts from '../utilits/getContacts';
function PostCard() {
  const [ posts, setPosts ] = useState([]);

  const fetchPosts = async () => {
    const postsfromDB = await getContacts();
    setPosts([...posts, ...postsfromDB]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='posts'>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Link to={`${post.id}`} className='post' key={post.id}>
            <div className='post-title'>Инфо о пользователе</div>
            <div className='post-text'>
              <h3>{post.content}</h3>
            </div>
            <div className='post-date'>Поле комментариев</div>
          </Link>
        ))
      ) : (
        <p>Постов нет</p>
      )}
    </div>
  );
}

export default PostCard;

  