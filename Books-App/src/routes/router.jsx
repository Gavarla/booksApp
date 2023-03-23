import { createBrowserRouter } from "react-router-dom";
import Details from "../pages/Details";
import ListBooks from "../pages/ListBooks"
import AddBook from "../pages/AddBook";
import App from "../App"
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ListBooks />
      },
      {
        path: '/list',
        element: <ListBooks />
      },
      {
        path: '/add',
        element: <AddBook />
      },
      {
        path: '/books/:id',
        element: <Details />
      }
    ]
  },
  
])

