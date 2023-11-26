import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminApp from './AdminApp';
import ClientApp from './ClientApp';
import GuestApp from './GuestApp';
import { useNavigate } from 'react-router-dom';
import { logout, getCurrentUser } from './store/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import Public from './pages/public/Public';
import Home from './pages/public/Home/Home';
import Homepage from './Components/Homepage/Homepage';
import { useEffect } from 'react';
import UserApi from './api/UserApi';
import Dashboard from './Components/ManagementPage/Dashboard/Dashboard';
import ManageBrand from './pages/admin/ManageBrand';
import ManageProduct from './pages/admin/ManageProduct';
import ManageCategory from './pages/admin/ManageCategory';
import CreateProduct from './pages/admin/CreateProduct';
import DetailProduct from './pages/public/DetailProduct';

function App() {
  const { isLoggedIn, userCurrent } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkAccess = async () => {
    try {
      const res = await UserApi.getCurrentUser();
      dispatch(getCurrentUser(res));
    } catch (err) {
      navigate('/');
      dispatch(logout());
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('persist:auth'))?.isLoggedIn === 'true') {
      checkAccess();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Public></Public>}>
          <Route path="" element={<Homepage></Homepage>}></Route>
          <Route path="detailProduct/:id"></Route>
        </Route>
        <Route path="/admin/*" element={<Dashboard />}>
          <Route index element={<ManageBrand />} />
          <Route path="createProduct" element={<CreateProduct></CreateProduct>}></Route>
          <Route path="manageproduct" element={<ManageProduct></ManageProduct>}></Route>
          <Route path="managecategory" element={<ManageCategory></ManageCategory>}></Route>
        </Route>
        <Route path="/guest/*" element={<GuestApp />} />
      </Routes>
    </>
  );
}

export default App;
