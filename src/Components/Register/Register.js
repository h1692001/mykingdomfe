import React from 'react';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';
import './Register.scss';
import { useState } from 'react';

export default function Register() {
  return (
    <div>
      <Header />
      <div className="Register_Container">
        <div className="Register">
          <h3 className="Register_Title">ĐĂNG KÝ TÀI KHOẢN CỦA BẠN</h3>
          <div className="MemberName">
            <div className="MemberName_Title">Họ tên thành viên</div>
            <input type="text" placeholder="Nhập họ tên" className="Input" />
          </div>
          <div className="Birthday">
            <div className="MemberName_Title">Ngày sinh</div>
            <input type="text" placeholder="Nhập ngày sinh" className="Input" />
          </div>
          <div className="PhoneNumber">
            <div className="MemberName_Title">Số điện thoại</div>
            <input type="text" placeholder="Nhập số điện thoại" className="Input" />
          </div>
          <div className="Gender">
            <div className="MemberName_Title">Giới tính</div>
            <input type="text" placeholder="Nhập giới tính" className="Input" />
          </div>
          <div className="Email">
            <div className="MemberName_Title">Địa chỉ email</div>
            <input type="text" placeholder="Nhập email" className="Input" />
          </div>
          <div className="Password">
            <div className="MemberName_Title">Mật khẩu</div>
            <input type="text" placeholder="Nhập mật khẩu" className="Input" />
          </div>
          <div className="EnterThePassword">
            <div className="MemberName_Title">Nhập lại mật khẩu</div>
            <input type="text" placeholder="Xác nhận mật khẩu" className="Input" />
          </div>
          <button className="action submit btn btn-primary">ĐĂNG KÝ</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
