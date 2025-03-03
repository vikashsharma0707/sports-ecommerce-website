import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cricket from "./pages/Cricket";
import Football from "./pages/Football";
import Racket from "./pages/Racket";
import Swimming from "./pages/Swimming";
import Fitness from "./pages/Fitness";
import Othersports from "./pages/Othersports";
import Topbrand from "./pages/Topbrand";
import Admindashboard from "./Admin/Admindashboard";
import Display from "./Admin/Display";
import Insert from "./Admin/Insert";
import Search from "./Admin/Search";
import Update from "./Admin/Update";
import Logout from "./Admin/Logout";
import Carddata from "./pages/Carddata";
import ProductDetail from "./pages/ProductDetail";
import ProductModel from "./pages/ProductModel";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import SearchData from "./pages/SearchData";
import ShopProduct from "./pages/ShopProduct";
import Dashboard from "./Admin/Dashboard";
import Checkout from "./pages/Checkout";
import OrderDisplay from "./Admin/OrderDisplay";







const App=()=>{

 
  return(
    <>
   
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="cricket" element={<Cricket/>}/>
      <Route path="football" element={<Football/>}/>
      <Route path="racket" element={<Racket/>}/>
      <Route path="swimming" element={<Swimming/>}/>
      <Route path="fitness" element={<Fitness/>}/>
      <Route path="othersports" element={<Othersports/>}/>
      <Route path="topbrands" element={<Topbrand/>}/>
      <Route path="carddata" element={<Carddata/>}/>
      <Route path="productdetail/:proid" element={<ProductDetail/>}/>
      <Route path="productModel" element={<ProductModel/>}/>
      <Route path="mens" element={<Mens/>}/>
      <Route path="womens" element={<Womens/>}/>
      <Route path="kids" element={<Kids/>}/>
      <Route path="searchdata" element={<SearchData/>}/>
      <Route path="shopproduct" element={<ShopProduct/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      
      

      </Route>
    </Routes>

    <Routes>
      <Route   path="admindashboard"  element={<Admindashboard/>}>
       <Route index element={<Dashboard/>}/>
       <Route path="dashboard" element={<Dashboard/>}/>
       <Route path="display" element={<Display/>}/>
       <Route path="insert" element={<Insert/>}/>
       <Route path="search" element={<Search/>}/>
       <Route path="update" element={<Update/>}/>
       <Route path="dashboard" element={<Dashboard/>}/>
       <Route path="orderdisplay" element={<OrderDisplay/>}/>
       <Route path="logout" element={<Logout/>}/>
       
       

      
      
      </Route>
       
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;