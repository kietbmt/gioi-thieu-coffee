import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>VỀ CHÚNG TÔI</h4>
          <h4>CÔNG TY CỔ PHẦN DOANH NHÂN ĐẮK LẮK</h4>
          <p>(Đặc biệt 100% cà phê nguyên chất)</p>
          <p>Sản xuất tại Công ty Cổ phần bột cà phê Doanh Nhân ĐẮK LẮK</p>
          <p>Là một trong những doanh nghiệp có thị trường rộng lớn hiện nay, chúng tôi ngày càng nâng cao chất lượng phục vụ để đem đến cho khách hàng một tách cà phê đúng nghĩa, không chỉ đơn giản để uống mà là còn để "hưởng thụ". 
          Hãy liên hệ ngay với chúng tôi để có được sản phẩm tốt nhất, chất lượng nhất.</p>
          <p>CÔNG TY CỔ PHẦN DOANH NHÂN ĐẮK LẮK</p>
          <p> Địa chỉ: 170 Hùng Vương, thị trấn Quảng Phú, huyện Cư M’gar, tỉnh Đăk Lăk</p>
          <p>Giấy chứng nhận Đăng ký Kinh doanh số 6001759513 
          do Sở Kế Hoạch và Đầu Tư Tỉnh Đăk Lăk cấp ngày 09/08/2021.</p>
        </div>
        <div className="footer-section">
          <h4>HỖ TRỢ KHÁCH HÀNG</h4>
          <ul>
            <li>Phương thức thanh toán</li>
            <li>Hướng dẫn cách thức mua hàng</li>
            <li>Chính sách đổi trả sản phẩm</li>
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
