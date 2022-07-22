import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Form.scss";

function Shoes() {
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  const [productMessage, setProductMessage] = useState("");
  const [sizeMessage, setSizetMessage] = useState("");
  const [priceMessage, setPriceMessage] = useState("");
  const [shoes, setShoesTable] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("shoes"))) {
      setShoesTable(JSON.parse(localStorage.getItem("shoes")));
    }
  }, []);
  const loginHandler = (e) => {
    e.preventDefault();

    if (validation) {
      const data = { product, size, price };
      console.log(data);
      shoes.push(data);
      localStorage.setItem("shoes", JSON.stringify(shoes));

      const newData = [...shoes, data];
      setShoesTable(newData);
      navigate("/shoestable");
    }
  };
  // setProduct("");
  // setPrice("");
  // setSize("");

  const handleOnChange1 = (e) => {
    setProduct(e.target.value);
  };
  const handleOnChange2 = (e) => {
    setSize(e.target.value);
  };

  const handleOnChange3 = (e) => {
    setPrice(e.target.value);
  };

  const validation = () => {
    if (product === "" || size === "" || price === "") {
      alert("filed is empty");
    }
    const productValidation = () => {
      if (product.length < 2 || product.length > 9) {
        setProductMessage("It should be a valid product Name !");
        console.log("Invalid Product");
        return false;
      } else {
        return true;
      }
    };

    const sizeValidation = () => {
      if (size < 35 || size > 44) {
        setSizetMessage("it should be a valid size ");
        console.log("Invalid size");
        return false;
      } else {
        return true;
      }
    };
    const priceValidation = () => {
      if (price < 50 || price > 300) {
        setPriceMessage("it should be  a valid price ");
        console.log("Invalid price");
        return false;
      } else {
        return true;
      }
    };

    productValidation();
    sizeValidation();
    priceValidation();
  };

  return (
    <div className="contact-container">
      <h2 style={{ color: "blue", textAlign: "center" }}>Products' Form</h2>
      <form onSubmit={loginHandler}>
        <table>
          <thead>
            <tr>
              <td>
                <label>Product:</label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Brand"
                  value={product}
                  onChange={handleOnChange1}
                />
                <p> {productMessage}</p>
              </td>
            </tr>

            <tr>
              <td>
                <label>Size:</label>
              </td>
              <td>
                <input
                  type="number"
                  placeholder="35-44 EU"
                  value={size}
                  onChange={handleOnChange2}
                />
                <p> {sizeMessage}</p>
              </td>
            </tr>

            <tr>
              <td>
                <label>Price:</label>
              </td>
              <td>
                <input
                  type="number"
                  placeholder="50-300 Price$"
                  value={price}
                  onChange={handleOnChange3}
                />
                <p> {priceMessage}</p>
              </td>
            </tr>
          </thead>
        </table>

        <button onClick={validation}>Check</button>
      </form>
      <button className="home" onClick={() => navigate(-1)}>
        Home
      </button>
    </div>
  );
}

export default Shoes;
