import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Context from './context/Context.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Properties from './pages/Properties.jsx';
import Agent from './pages/Agent.jsx';
import Event from './pages/Event.jsx';
import Contact from './pages/Contact.jsx';
import Blogs from './pages/Blogs.jsx';
import Testimonial from './pages/Testimonial.jsx';
import Services from './pages/Services.jsx';
import Details from './pages/Details.jsx';
import DetailBlog from './pages/DetailBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children : [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/properties',
        element: <Properties></Properties>
      },
      {
        path: '/properties/:id',
        element: <Details></Details>
      },
      {
        path: '/agent',
        element: <Agent></Agent>
      },
      {
        path: '/events',
        element: <Event></Event>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/blogs/:id',
        element: <DetailBlog/>
      },
      {
        path: '/testimonials',
        element: <Testimonial></Testimonial>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>,
)
