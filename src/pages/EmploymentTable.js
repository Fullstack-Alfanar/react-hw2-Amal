import React ,{useState,useEffect} from "react";
import "../styles/EmployersTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
function EmploymentTable(  ) {
    const navigate = useNavigate();

    const [employers, setEmployerTable] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("employers")) {
            setEmployerTable(JSON.parse(localStorage.getItem("employers")));
        }
    }, []);

  return (
    <div>
      <h1>Employers' Form</h1>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Country</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Birthdate</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employers.map((employer,i) => (
            <TableRow key={i}>
              <TableCell align="center">{employer.first}</TableCell>
              <TableCell align="center">{employer.last}</TableCell>
              <TableCell align="center">{employer.title}</TableCell>
              <TableCell align="center">{employer.country}</TableCell>
              <TableCell align="center">{employer.city}</TableCell>
              <TableCell align="center">{employer.birthDate}</TableCell>
              <TableCell align="center">
                <img src={employer.image1} style={{ height: "70px" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button
        style={{
          color: "white",
          textAzlign: "center",
          backgroundColor: "blue",
          border: "none",
          padding: "0.8em 0.5em",
        }}
        onClick={() => navigate(-1)}
      >
        Shoes' Form
      </button>
    </div>
  );
}

export default EmploymentTable;
