import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';
const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json());
const router = createBrowserRouter([
  {
    path : '/',
    Component : Root,
    children : [
      {index : true, Component: Home},
      {path : 'Mobiles' , Component : Mobiles},
      {path : "Laptops" , Component : Laptops},
      {
        path: 'users', Component : Users,
        loader : () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path : 'users2', 
        element : 
        <Suspense fallback={<span>Loading....</span>}>
          <Users2  usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path : 'users/:userId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        
        Component : UserDetails
      },
      {
        path : '/posts', Component : Posts,
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path : '/posts/:postId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component : PostDetail
      }
     
    ]
  },
  {
    path : '*',
    element : <h3>Not Found : 404 Status</h3>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
