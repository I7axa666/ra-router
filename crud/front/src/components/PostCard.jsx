import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import getPosts from '../utilits/getPosts';
import { usePosts } from "./PostsContext"

function PostCard() {
  const { posts, setPosts } = usePosts();
  const [localPosts, setPostsLocal] = useState([]);

  const fetchPosts = async () => {
    const postsfromDB = await getPosts();
    setPostsLocal(postsfromDB);
    setPosts(postsfromDB);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // console.log(posts)

  return (
    <div className='posts'>
      {localPosts && localPosts.length > 0 ? (
        localPosts.map((post) => (
          <Link to={`posts/${post.id}`} className='post' key={post.id}>
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
