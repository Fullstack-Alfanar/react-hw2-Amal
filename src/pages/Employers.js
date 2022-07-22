import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Form.scss";

function Employers() {
  const navigate = useNavigate();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [image1, setImage1] = useState("");

  const [firstMessage, setFirstMessage] = useState("");
  const [lastMessage, setLastMessage] = useState("");
  const [titleMessage, setTitleMessage] = useState("");
  const [countryMessage, setCountryMessage] = useState("");
  const [cityMessage, setCityMessage] = useState("");
  const [employers, setEmployerTable] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("employers"))) {
      setEmployerTable(JSON.parse(localStorage.getItem("employers")));
    }
  }, []);
  const loginHandler = (e) => {
    e.preventDefault();

    if (validation) {
      const data2 = { first, last, title, country, city, birthDate, image1 };
      console.log(data2);
      employers.push(data2);
      localStorage.setItem("employers", JSON.stringify(employers));

      const newData = [employers, data2];
      setEmployerTable(newData);
      navigate("/employers");
    }
  };

  //  setFirst("");
  //  setLast("");
  //  setTitle("");
  //  setCountry("");
  //  setCity("");
  //  setBirthDate("");
  //  setImage1("");
  const handleOnChange1 = (e) => {
    setFirst(e.target.value);
  };
  const handleOnChange2 = (e) => {
    setLast(e.target.value);
  };

  const handleOnChange3 = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChange4 = (e) => {
    setCountry(e.target.value);
  };
  const handleOnChange5 = (e) => {
    setCity(e.target.value);
  };
  const handleOnChange6 = (e) => {
    setBirthDate(e.target.value);
  };
  const handleOnChange7 = (e) => {
    setImage1(e.target.value);
  };

  const validation = () => {
    if (
      first === "" ||
      last === "" ||
      title === "" ||
      country === "" ||
      city === "" ||
      birthDate === "" ||
      image1 === ""
    ) {
      alert("fields cannot be empty");
    }
    const firstValidation = () => {
      if (first.length < 2 || first.length > 30) {
        setFirstMessage("InValid First Name !");
        return false;
      } else if (last.length < 2 || last.length > 30) {
        setLastMessage("InValid Last Name !");
        return false;
      } else if (city.length < 2 || city.length > 30) {
        setCityMessage("InValid City Name !");
        return false;
      } else {
        return true;
      }
    };

    const secondValidation = () => {
      if (title.length < 5 || title.length > 20) {
        setTitleMessage("inValid Title");
        console.log("Invalid Title");
        return false;
      } else {
        return true;
      }
    };
    const thirdValidation = (c) => {
      if (country.length < 3 || country.length > 30) {
        setCountryMessage("InValid Country Name ");
        console.log("Invalid Country Name");
        return false;
      } else {
        return true;
      }
    };
    firstValidation();
    secondValidation();
    thirdValidation();
  };

  return (
    <div className="contact-container">
      <h2 style={{ color: "blue", textAzlign: "center" }}>Employers' Table</h2>
      <form onSubmit={loginHandler}>
        <table>
          <thead>
            <tr>
              <td>
                <label>First Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={first}
                  placeholder="First Name"
                  onChange={handleOnChange1}
                />
                <p> {firstMessage}</p>
              </td>
            </tr>

            <tr>
              <td>
                <label>Last Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={last}
                  onChange={handleOnChange2}
                />{" "}
                <p> {lastMessage}</p>
              </td>
            </tr>

            <tr>
              <td>
                <label>Title:</label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={handleOnChange3}
                />{" "}
                <p> {titleMessage}</p>
              </td>
            </tr>

            <tr>
              <td>
                <label>Country:</label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={handleOnChange4}
                />{" "}
                <p> {countryMessage}</p>
              </td>
            </tr>

            <tr>
              <td>
                <label>City:</label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={handleOnChange5}
                />
                <p> {cityMessage}</p>
              </td>
            </tr>

            <tr>
              <td>
                <label> BirthDate:</label>
              </td>
              <td>
                <input
                  type="date"
                  value={birthDate}
                  onChange={handleOnChange6}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label> Image:</label>
              </td>
              <td>
                <input type="url" value={image1} onChange={handleOnChange7} />
              </td>
            </tr>
          </thead>
        </table>

        <button onClick={validation}>Add</button>
      </form>
      <button className="home" onClick={() => navigate(-1)}>
        Home
      </button>
    </div>
  );
}

export default Employers;
