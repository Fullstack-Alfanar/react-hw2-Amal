import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Form.scss";
import EmploymentTable from "./EmploymentTable";

function Employers() {
  const navigate = useNavigate();
  const initialValues = {
    first: "",
    last: "",
    title: "",
    country: "",
    city: "",
    birthDate: "",
    Image: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [firstErr, setFirstErr] = useState(false);
  const [lastErr, setLastErr] = useState(false);
  const [titleErr, setTitleErr] = useState(false);
  const [countryErr, setCountryErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [image, setImage] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const useHandler = (e) => {
    let item = e.target.value;
    if (item.length < 2 || item.length > 30) {
      setFirstErr(true);
      setLastErr(true);
      setCityErr(true);
    } else {
      setFirstErr(false);
      setLastErr(false);
      setCityErr(false);
    }
  };

  const useHandler2 = (e) => {
    let item2 = e.target.value;
    if (item2.length < 2 || item2.length > 30) {
      setTitleErr(true);
    } else {
      setTitleErr(false);
    }
  };

  const useHandler3 = (e) => {
    let item3 = e.target.value;
    if (item3.length < 3 || item3.length > 30) {
      setCountryErr(true);
    } else {
      setCountryErr(false);
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    <EmploymentTable Tabeldata={formValues} />;
  };

  return (
    <div className="contact-container">
      <h2 style={{ color: "blue", textAlign: "center" }}>Employers' Form</h2>
      <form onSubmit={loginHandler}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            onChange={useHandler}
          ></input>
          {firstErr ? <p>Invalid Name</p> : null}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            placeholder=" Last Name"
            onChange={useHandler}
          ></input>
          {lastErr ? <p>Invalid Family Name</p> : null}
        </div>
        <div>
          <label>Title</label>
          <input type="text" placeholder="Title" onChange={useHandler2}></input>
          {titleErr ? <p>Invalid Title</p> : null}
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            placeholder="Country"
            onChange={useHandler3}
          ></input>
          {countryErr ? <p>Invalid Country</p> : null}
        </div>
        <div>
          <label>City</label>
          <input type="text" placeholder="City" onChange={useHandler}></input>
          {cityErr ? <p>Invalid City</p> : null}
        </div>
        <div>
          <label>Birhdate</label>
          <input
            type="date"
            placeholder="BirthDate"
            onChange={(e) => {
              setBirthDate(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Image</label>
          <input
            type="text"
            placeholder="Enter The link of an image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          ></input>
        </div>
        <button onClick={() => navigate("/employers")}>ADD</button>
      </form>
    </div>
  );
}

export default Employers;
