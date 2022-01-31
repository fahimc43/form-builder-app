import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";

const InputField = (props) => {
  const { text, number, date, textArea } = props;
  const [inputData, setInputData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInputData = { ...inputData };
    newInputData[field] = value;
    setInputData(newInputData);
  };

  const handleFormSubmit = (e) => {
    console.log(inputData);
    fetch("http://localhost:5000/forms", {
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
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Input Field</h2>
      <form onSubmit={handleFormSubmit}>
        <Box>
          <TextField
            name="name"
            label="Form Name"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            onBlur={handleOnBlur}
          />
        </Box>
        {text && (
          <Box sx={{ mt: 2 }}>
            <TextField
              name="text"
              label="Text"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onBlur={handleOnBlur}
            />
          </Box>
        )}
        {number && (
          <Box sx={{ mt: 2 }}>
            <TextField
              name="number"
              label="Number"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onBlur={handleOnBlur}
            />
          </Box>
        )}
        {date && (
          <Box sx={{ mt: 2 }}>
            <TextField
              name="date"
              label="Date"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onBlur={handleOnBlur}
            />
          </Box>
        )}
        {textArea && (
          <Box sx={{ mt: 2 }}>
            <TextField
              name="textArea"
              label="Text Area"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onBlur={handleOnBlur}
            />
          </Box>
        )}
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Generate
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default InputField;
