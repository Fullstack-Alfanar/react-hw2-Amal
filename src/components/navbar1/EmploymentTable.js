import "../styles/EmployersTable.scss";
import React from "react";

function EmploymentTable( data ) {
  return (
    <div>
      <h1>Employers' Table</h1>
      <table>
        <thead>
          <tr>
            <td>
              <label>First Name</label>
            </td>
            <td>
              <label>Last Name</label>
            </td>
            <td>
              <label>Title</label>
            </td>
            <td>
              <label>Country</label>
            </td>
            <td>
              <label>City</label>
            </td>
            <td>
              <label>BirthDate</label>
            </td>
            <td>
              <label>Image</label>
            </td>
          </tr>
        </thead>
        <tbody>
          {/* {data.Tabledata.map(element => {
            console.log(element)

            return(
               <tr>
              <td>{element.first}</td>
              <td>{element.last}</td>
              <td>{element.title}</td>
              <td>{element.country}</td>
              <td>{element.city}</td>
              <td>{element.birthDate}</td>
              <td>{element.image}</td>
            </tr>
            
            )
           
          })} */}
        </tbody>
      </table>
    </div>
  );
}

export default EmploymentTable;
