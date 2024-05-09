import { Link } from "react-router-dom";
import { useEffect } from 'react';
import getPosts from '../utilits/getPosts';
import { usePosts } from "./PostsContext"

function PostCard() {
  const { posts, setPosts } = usePosts();

  const fetchPosts = async () => {
    const postsfromDB = await getPosts();
    setPosts(postsfromDB);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='posts'>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
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
