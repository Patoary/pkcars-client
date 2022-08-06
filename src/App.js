import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/Shared/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddInventory from './pages/AddInventory/AddInventory';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import EachInventory from './pages/EachInventory/EachInventory';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/inventory/:id' 
      element={
        <RequireAuth>
          <EachInventory/>
        </RequireAuth>
      }
      ></Route>
      <Route path='/manageInventory' element={
      <RequireAuth>
      <ManageInventory/>
      </RequireAuth>
      }></Route>
      <Route path='/addInventory' element={
        <RequireAuth>
      <AddInventory/>
      </RequireAuth>
      }></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
     <Route path='/login' element= {<Login/>}></Route>
     <Route path='/register' element={<Register/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
