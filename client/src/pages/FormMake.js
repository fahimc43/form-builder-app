import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const FormMake = () => {
  const { id } = useParams();
  const [formName, setFormName] = useState([]);
  const [inputData, setInputData] = useState({});
  const {name, text, number, textArea} = formName;
  let history = useHistory();

  useEffect(() => {
    const url = `http://localhost:5000/form/${id}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFormName(data));
  }, [id]);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInputData = { ...inputData };
    newInputData[field] = value;
    setInputData(newInputData);
  };

  const handleFormSubmit = (e) => {
    console.log(inputData);
    fetch("http://localhost:5000/name_forms", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the form");
          e.target.reset();
          getDetails()
        }
      });
    e.preventDefault();
  };

     const getDetails = () => {
    history.push({
      pathname: "/create_from",
      // state: post,
    });
  };

  return (
    <div>
      <Container style={{ marginTop: "50px" }}> 
    <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <Paper elevation={3} sx={{
        textTransform: "capitalize",
        padding: "10px",
        backgroundColor: "#E7E9EB",
        marginBottom: "20px",
        width: "600px"
      }}>
      <Typography variant="h6" component="div">{name}</Typography>
      </Paper>
          <form onSubmit={handleFormSubmit}>
            <FormControl style={{ width: "600px", marginBottom: "20px" }}>
              <TextField
                type="text"
                name={text}
                label={text}
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onBlur={handleOnBlur}
              />
              <TextField
                style={{ marginTop: "20px" }}
                type="number"
                name={number}
                label={number}
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onBlur={handleOnBlur}
              />
              <TextField
                style={{ marginTop: "20px" }}
                type="date"
                name="date"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onBlur={handleOnBlur}
              />
              <TextField
                style={{ marginTop: "20px" }}
                type="text"
                name={textArea}
                label={textArea}
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onBlur={handleOnBlur}
              />
            </FormControl>
            <Box sx={{ mt: 1 }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>

            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default FormMake;
