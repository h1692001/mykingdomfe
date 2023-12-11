import React, { useEffect, useState } from 'react';
import './Header.scss';
import IconPhone from '../../Assets/Images/Icons/icon_phone.png';
import 'font-awesome/css/font-awesome.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/authAction';
import { Dropdown, Space, Col, Divider, Row } from 'antd';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const { isLoggedIn, userCurrent } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 125) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();
  const Register = () => {
    navigate('/guest/register');
  };
  const Login = () => {
    navigate('/guest/login');
  };

  const newProduct = () => {
    navigate('/guest/allProduct');
  };

  return (
    <>
      <div className="Header_One_Container">
        <div className="Header_One">
          <div className="Header_One_Left">
            <img
              src={IconPhone}
              alt=""
              style={{
                height: '18px',
                width: '18px',
                marginTop: '3px',
              }}
            />
            <div className="Header_One_Left_Text">HOTLINE: 19001208</div>
          </div>
          <div className="Header_One_Right">
            <div className="Header_One_Right_Icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="Header_One_Right_Text">Hệ thống 246 cửa hàng mykingdom</div>
          </div>
        </div>
      </div>
      <div className="Header_Two_Container">
        <div className="Header_Two">
          <div
            className="Header_Two_Logo"
            onClick={() => {
              navigate('/');
            }}
          ></div>
          <div className="flex items-center h-[40px] shadow-2xl">
            <input className="h-full  px-[20px] w-[400px] outline-none" placeholder="Tìm kiếm sản phẩm ..."></input>
            <div className="px-[40px] text-[22px] bg-[#f7f9fa] h-full flex items-center text-primary">
              <CiSearch className="" />
            </div>
          </div>
          <div className="Header_Two_Content">
            <div className="Header_Two_Content_Membership">
              <div className="Header_Two_Content_Membership_Icon">
                <i class="fa fa-bookmark-o" aria-hidden="true" style={{ fontSize: '30px', marginTop: '35px' }}></i>
              </div>
              <div className="Header_Two_Content_Membership_Text">KHTT</div>
            </div>
            <div className="Header_Two_Content_Account" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="Header_Two_Content_Account_Icon">
                <i class="fa fa-user-circle-o" aria-hidden="true" style={{ fontSize: '30px', marginTop: '35px' }}></i>
              </div>
              <div className="Header_Two_Content_Account_Text">
                <div className="Account">TÀI KHOẢN</div>
                {isHovered && !isLoggedIn && (
                  <ul className="Header_Two_Content_Account_Options" style={{ zIndex: '20' }}>
                    <li onClick={Register}>Đăng ký tài khoản</li>
                    <li onClick={Login}>Đăng nhập</li>
                  </ul>
                )}

                {isHovered && isLoggedIn && (
                  <ul className="Header_Two_Content_Account_Options" style={{ zIndex: '20' }}>
                    <li
                      className=""
                      onClick={() => {
                        navigate('/profile');
                      }}
                    >
                      Tài khoản
                    </li>
                    {userCurrent?.role === 'ADMIN' && (
                      <li
                        onClick={() => {
                          navigate('/admin');
                        }}
                      >
                        Quản lí
                      </li>
                    )}
                    <li
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      Đăng xuất
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <Link to="/cart" className="Header_Two_Content_Cart relative">
              <div className="absolute w-[20px] h-[20px] flex items-center justify-center text-[13px] rounded-[50%] leading-1 bg-[#d9554a] text-[#fff] top-[25px] left-[6px] inline-block">
                <p style={{ lineHeight: '10px' }}>{cart?.cartProducts && cart?.cartProducts?.length > 0 ? cart?.cartProducts.length : 0}</p>
              </div>
              <div className="Header_Two_Content_Cart_Icon">
                <i class="fa fa-cart-arrow-down" aria-hidden="true" style={{ fontSize: '30px', marginTop: '35px' }}></i>
              </div>
              <div className="Header_Two_Content_Cart_Text">GIỎ HÀNG</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="Main_Menucontent_Container" style={{ top: isFixed ? '0' : '300px', position: isFixed ? 'fixed' : 'static' }}>
        <div className="Main_Menucontent">
          <div className="Product">
            <Link to="/category" style={{ fontWeight: '600', color: 'white' }}>
              SẢN PHẨM
            </Link>
          </div>
          <div className="Promotion">
            <span>KHUYẾN MÃI</span>
          </div>
          <div
            className="Handbook"
            onClick={() => {
              navigate('/post');
            }}
          >
            <span>CẨM NANG</span>
          </div>
        </div>
      </div>
    </>
  );
}
