import React from "react";
import "./Home.scss";
import WhyChooseUs from "./WhyChooseUs";
import ProductList from "./ProductList";
import CustomerReview from "./CustomerReview";
import ConsultationForm from "./ConsultationForm";
import HotLine from "./HotLine";
const Home = () => {
  return (
    <div className="home">
      {/* Banner */}
      <section className="banner">
        <div className="banner-content">
          <h1>CÀ PHÊ ABC – CÀ PHÊ NGUYÊN CHẤT 100%</h1>
          <p>Sử dụng công thức gia truyền cho ra loại cà phê với hương vị tuyệt hảo</p>
          <p>
            Cà phê ABC được thành lập năm 2015 – Sử dụng công thức rang xay và chế
            biến gia truyền – Mang đến cho người tiêu dùng một loại cà phê với hương vị
            và chất lượng tuyệt hảo.
          </p>
          <button className="cta-button">ĐĂNG KÝ TƯ VẤN</button>
        </div>
      </section>
      <WhyChooseUs />
      <ProductList />
      <div className="review-form-container">
        <CustomerReview />
        <ConsultationForm />
      </div>
      <HotLine />
    </div>
  );
};
 export default Home;
