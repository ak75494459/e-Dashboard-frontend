import './App.css';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import { BrowserRouter } from 'react-router-dom';
import { Route , Routes } from 'react-router-dom';
import PrivateCom from './components/PrivateCom';
import Login from './components/Login';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Update from './components/Update';
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route element={<PrivateCom/>}>
    <Route path='/' element={<ProductList/>} />
    <Route path='addproduct' element={<Product/>} />
    <Route path='updateproduct/:id' element={<Update/>} />
    <Route path='logout' element={"path is LOGOUT"} />
    <Route path='profile' element={"add profile components"} />
    </Route>
    <Route path='signup' element={<SignUp/>} />
    <Route path='login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
