import React from "react";
import "./Footer.scss";
import Logo from "../../assets/logo.jpg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo và thông tin công ty */}
        <div className="footer-section">
         <img src={Logo} alt="Khách hàng" className="logo" no-repeat center />
          <p>CÔNG TY TNHH SX TM DV CÀ PHÊ TRUNG HÒA.</p>
          <p>Địa Chỉ : 82A Nguyễn Trãi, Quảng Phú, H. Cư M'gar, ĐắkLắk, Việt Nam.</p>
          <p>Hotline: 123456789</p>
          <p>Tel: 123456789</p>
          <p>email : abc@gmail.com</p>
          <p>Website:www.abc.com</p>
        </div>
        
        {/* Liên kết nhanh */}
        <div className="footer-section">
          <h4>LIÊN KẾT NHANH</h4>
          <ul>
            <li><a href="#">TRUYỀN THÔNG</a></li>
            <li><a href="#">CHÍNH SÁCH BẢO MẬT</a></li>
            <li><a href="#">THÔNG TIN LIÊN HỆ</a></li>
          </ul>
        </div>
        
        {/* Mạng xã hội */}
        <div className="footer-section">
          <h4>SOCIAL MEDIA</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">Tiktok</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
