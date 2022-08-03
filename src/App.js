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
import Ragister from './pages/Login/Ragister/Ragister';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
      <Route path='/addInventory' element={<AddInventory></AddInventory>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
     <Route path='/login' element= {<Login></Login>}></Route>
     <Route path='/register' element={<Ragister></Ragister>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>

    </div>
  );
}

export default App;
