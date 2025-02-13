import React from "react";
import "./ConsultationForm.scss"
  const ConsultationForm = () => {
    return (
      <section className="consultation-form">
        <h2>ĐĂNG KÝ TƯ VẤN</h2>
        <form>
          <input type="text" placeholder="Tên của bạn" required />
          <div className="dob">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <select>
              <option>2000</option>
              <option>2001</option>
              <option>2002</option>
            </select>
          </div>
          <input type="text" placeholder="Số điện thoại" required />
          <textarea placeholder="Bạn cần tư vấn về..." required></textarea>
          <button type="submit">ĐĂNG KÝ TƯ VẤN</button>
        </form>
        <p className="note">*Thông tin của bạn sẽ được bảo mật tuyệt đối</p>
      </section>
    );
  };
export default ConsultationForm;