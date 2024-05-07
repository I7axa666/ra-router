import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { PostsProvider } from './components/PostsContext';

function App() {
  const navigate = useNavigate();

  return (
    <PostsProvider>
      <div className='create-post'>
        <button onClick={() => navigate('/posts/new')} className='createBtn'>Создать пост</button>
      </div>
      <Outlet />
    </PostsProvider>
  );
}

export default App;
