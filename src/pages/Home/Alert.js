import React from "react";
import { FaShippingFast, FaAward, FaCoffee, FaHeadset } from "react-icons/fa";
import "./Alert.scss";

const Alert = () => {
  return (
    <div className="features-bar">
      <div className="feature-item">
        <FaShippingFast size={40} />
        <div>
          <h4>Giao hàng tận nhà</h4>
          <p>Free ship nội thành</p>
        </div>
      </div>
      <div className="feature-item">
        <FaAward size={40} />
        <div>
          <h4>Uy tín lâu năm</h4>
          <p>Thương hiệu độc quyền</p>
        </div>
      </div>
      <div className="feature-item">
        <FaCoffee size={40} />
        <div>
          <h4>Sản phẩm chất lượng</h4>
          <p>Hương vị tuyệt vời</p>
        </div>
      </div>
      <div className="feature-item">
        <FaHeadset size={40} />
        <div>
          <h4>Tư vấn trực tuyến</h4>
          <p>Tư vấn hỗ trợ khách hàng</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
