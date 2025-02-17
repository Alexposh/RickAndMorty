import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListGroup from './Pages/ListGroup';
import ErrorPage from './Pages/ErrorPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ListGroup />, // contains the list of items that were collected with GraphQL
      
    },
    {
      path: '/error',
      element: <ErrorPage />, // contains the error page if the user tries to access a non existing page and/or the contents cannot be loaded. Mostly used for debugging
    }
  ]);

  return (
    <>
      <h1>Technical Test for Frontend Developer</h1>
      {/* Contains the destinations entered by the user by using the router, might not be used that much, can provide options if the app gets bigger */}
      <RouterProvider router={router} />  

    </>
  )
}

export default App
