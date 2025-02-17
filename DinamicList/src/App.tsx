import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListGroup from './Pages/ListGroup';
import ErrorPage from './Pages/ErrorPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ListGroup />,
      
    },
    {
      path: '/error',
      element: <ErrorPage />,
    }
  ]);

  return (
    <>
      <h1>Technical Test for Frontend Developer</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
