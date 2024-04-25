import './App.css';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
 import Product from './Pages/Product';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
 import kid_banner from './Components/Assets/banner_kids.png'
import Login from './Pages/Login';
import Signin from './Pages/Signin';
import Footer from './Components/Footer/Footer'
import ShopCategory from './Pages/ShopCategory';
import Admin from './Pages/Admin'
 import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes> 
        <Route path='/' element={<Shop/>}></Route>
         <Route path='/men' element={<ShopCategory banner={men_banner} category="Men"/>}></Route>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="Women"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="Kid"/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productID' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path="/admin/*" element={<Admin />} />
      
       </Routes>
      <Footer></Footer>

 </BrowserRouter>
       
       
    </div>
  );
}

export default App;
