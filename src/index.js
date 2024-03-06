import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home'
// import About from './Pages/About'
// import Product from './Pages/Product'
// import Contact from './Pages/Contact'
// import ContactUs from './Components/ContactUs';
// import Address from './Components/Address';
import {
  createBrowserRouter, createRoutesFromElements, Route,RouterProvider,} from "react-router-dom";
// import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Card';
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={ <App />}>
//       <Route path='' element={<Home />} />
//       <Route path='product' element={<Product/>}>
//       <Route path=':id' element={<ProductDetail />} />
//       </Route>
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />}>
//         <Route path='contactus' element={<ContactUs/>}/>
//         <Route path='address' element={<Address/>}/>
//          </Route>
//     </Route>
//   )
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App />}>
      <Route path='' element={<Home />} />
      <Route path='cart' element={<Cart/>}>
         </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);