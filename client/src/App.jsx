
import { productsData } from '../api/api'
import './App.css'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Product from './pages/Product/Product'
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
function App() {

  const Layout = () => {
    return (
      <div >
        <Header />
        <ScrollRestoration/>
        <Outlet />
        <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader:productsData
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path:'/login',
          element:<Login/>
        }
      ],
    },
  ]);

  return (
    <>
      <div className='app-container '>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
