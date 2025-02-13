import React, { useState, useEffect } from "react";
import "./Header.scss";
import Logo from "../../assets/logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="top-bar">
        <p>Chào mừng quý khách đến với cà phê ABC</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="main-header">
        <img src={Logo} alt="Khách hàng" className="logo" />
        <div className="text-content">
          <h3>CHUYÊN CUNG CẤP SỈ</h3>
          <h2>CAFE RANG XAY NGUYÊN CHẤT 100%</h2>
          <h3>SẢNG KHOÁI TINH THẦN CÙNG ABC COFFEE</h3>
        </div>
        <div className="contact">
          <i className="fas fa-phone-alt"></i>
          <span className="phone-number">SDT: 123456789</span>
        </div>
      </div>
      <nav className={`nav-bar ${isScrolled ? "sticky" : ""} ${menuOpen ? "active" : ""}`}>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul>
          <li><a href="#">GIỚI THIỆU</a></li>
          <li><a href="#">CỬA HÀNG</a></li>
          <li><a href="#">DỊCH VỤ NHÀ HÀNG - KHÁCH SẠN</a></li>
          <li><a href="#">TIN TỨC</a></li>
          <li><a href="#">LIÊN HỆ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
