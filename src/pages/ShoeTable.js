import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/ShoesTable.scss";

function ShoesTable() {
  const navigate = useNavigate();
  const [shoes, setShoesTable] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("shoes"))) {
      setShoesTable(JSON.parse(localStorage.getItem("shoes")));
    }
  }, []);

  return (
    <div>
      <div>
        <h1>Shoes' Table</h1>
        <table>
          <thead>
            <tr>
              <td>
                <label>Brand</label>
              </td>
              <td>
                <label>size</label>
              </td>
              <td>
                <label>Price</label>
              </td>
            </tr>
          </thead>
          <tbody>
            {shoes.map((shoe,i) => (
              <tr key={i}>
                <td>{shoe.product}</td>
                <td>{shoe.size}</td>
                <td>{shoe.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        style={{
          color: "white",
          textAzlign: "center",
          backgroundColor: "blue",
          border: "none",
          padding: "0.8em 0.5em",
          cursor:"pointer",
        }}
        onClick={() => navigate(-1)}
      >
        Shoes' Form
      </button>
    </div>
  );
}

export default ShoesTable;
