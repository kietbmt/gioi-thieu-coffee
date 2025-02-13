import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>CÔNG TY CÀ PHÊ ABC</h4>
          <p>Địa chỉ: TP BMT</p>
          <p>Điện thoại: 0999000000</p>
          <p>Website: ABC.com</p>
          <p>Fanpage: fb.com</p>
        </div>
        <div className="footer-section">
          <h4>BÀI VIẾT MỚI</h4>
          <ul>
            <li>Ăn hạt dinh dưỡng có tốt ko</li>
            <li>Tác dụng kinh người của những loại hạt</li>
            <li>Quả óc chó có thực sự có ích</li>
            <li>Quả óc chó – THỰC PHẨM CỰC TỐT CHO BÀ BẦU VÀ TRẺ NHỎ</li>
            <li>Chào tất cả mọi người!</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>FANPAGE FACEBOOK</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
