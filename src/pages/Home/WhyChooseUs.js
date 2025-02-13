import React from "react";
import "./WhyChooseUs.scss";
const WhyChooseUs = () => {
    return (
      <section className="why-choose-us">
        <div className="full-width-container">
          <div className="content full-width">
            <img src={'https://posapp.vn/wp-content/uploads/2019/07/cac-loai-cafe-nguyen-lieu.jpg'} alt="Cà phê nguyên chất" className="coffee-image" />
            <div className="text-content">
              <h2>VÌ SAO BẠN NÊN CHỌN CHÚNG TÔI</h2>
              <p>Những lý do mà quý khách hàng hài lòng với dịch vụ mà chúng tôi mang lại</p>
              <ul>
                <li><strong>CÀ PHÊ NGUYÊN CHẤT 100%</strong> – RANG XAY THEO CÔNG THỨC GIA TRUYỀN</li>
                <li><strong>BỘT CÀ PHÊ CÓ MÙI THƠM DỊU DÀNG, QUYẾN RŨ.</strong></li>
                <li><strong>BỘT CÀ PHÊ NGUYÊN CHẤT KHI RÓT NƯỚC SÔI VÀO PHIN THÌ BỘT CÀ PHÊ NỞ BUNG.</strong></li>
                <li><strong>MÀU NƯỚC CÀ PHÊ NÂU NHẠT, KHÔNG SÁNH ĐẶC.</strong></li>
                <li><strong>MÙI VỊ KHI UỐNG:</strong> ĐẮNG DỊU, CHUA THANH, SÂU LẮNG, TỰ NHIÊN, CẢM GIÁC MIỆNG VÀ LƯỠI SẠCH.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default WhyChooseUs