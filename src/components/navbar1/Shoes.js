import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Form.scss";


function Shoes() {
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const [productErr, setProductErr] = useState(false);
  const [size, setSize] = useState("");
  const [sizeErr, setSizeErr] = useState(false);
  const [price, setPrice] = useState("");
  const [priceErr, setPriceErr] = useState(false);

  const data = { product, size, price };

  const useHandler = (e) => {
    let item = e.target.value;
    if (item.length < 2 || item.length > 7) {
      setProductErr(true);
    } else {
      setProductErr(false);
    }
  };

    const useHandler1 = (e) => {
      let item = e.target.value;
      if (item<40) {
        setPriceErr(true);
      } else {
        setPriceErr(false);
      }
    };
  

  const loginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-container">
      <h2 style={{ color: "blue", textAlign: "center" }}>Products' Table</h2>
      <form onSubmit={loginHandler}>
        <div>
          <label>Product Name</label>
          <input type="text" placeholder=" Brand" onChange={useHandler}></input>
        </div>
        <div>
          <label>Size</label>
          <select>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="40">41</option>
          </select>
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            placeholder="Price In $"
            onChange={useHandler1}
          ></input>
          {priceErr ? <p>Invalid </p> : null}
        </div>
        <button onClick={() => navigate("/shoestable")}>ADD</button>
      </form>
    </div>
  );
}

export default Shoes;
