import React from "react";
import"./CustomerReview.scss"
import customerImage from "../../assets/J97.jpg";
const CustomerReview = () => {
    return (
      <section className="customer-review">
        <div className="review-container">
          <div className="customer-info">
          <img src={customerImage} alt="Khách hàng" className="customer-avatar" no-repeat center />
            <h3>Đom Đóm</h3>
            <p>Vị của cà phê ABC – Đậm đà, có một chút vị g của cà phê nguyên chất –
              Một lần sẽ không thể nào quên!</p>
          </div>
        </div>
      </section>
    );
  };
export default CustomerReview;