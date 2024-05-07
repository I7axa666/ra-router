import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditPost from './components/EditPost.jsx'
import PostCard from './components/PostCard.jsx'
import CreatePost from './components/CreatePost.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: <PostCard /> 
      },
      { 
        path: "/posts/:id", 
        element: <EditPost /> 
      },
      { 
        path: "/posts/new", 
        element: <CreatePost /> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
