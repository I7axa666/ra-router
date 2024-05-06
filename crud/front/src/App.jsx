
import './App.css';
import PostCard from './components/PostCard';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
 

  return (
    <>
      <div className='create-post'>
        <button className='createBtn'>Создать пост</button>
      </div>
      <Outlet />
    </>
  );
}

export default App;
