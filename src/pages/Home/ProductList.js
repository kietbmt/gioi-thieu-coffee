import React from "react";
import "./ProductList.scss";
import arabica from "../../assets/arbica.jpg";
import robusta from "../../assets/robusta.png";
import coffee01 from "../../assets/coffee01.jpg";
import coffee02 from "../../assets/coffee02.jpg";
const ProductList = () => {
    const products = [
      { image: arabica, name: "Cà phê Arabica", price: "150,000 đ" },
      { image: robusta, name: "Cà phê Robusta", price: "250,000 đ" },
      { image: coffee01, name: "Cà phê rang xay 01 [1KG]", price: "350,000 đ" },
      { image: coffee02, name: "Cà phê rang xay 02 [1KG]", price: "250,000 đ" }
    ];
  
    return (
      <section className="product-list">
        <h2>CÁC SẢN PHẨM CỦA CHÚNG TÔI</h2>
        <div className="product-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <span className="price">{product.price}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default ProductList;