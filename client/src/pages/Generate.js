import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import InputField from "./InputField";
import TextField from "./TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Generate = () => {
  const classes = useStyles();

  const [text, setText] = useState(false);
  const [number, setNumber] = useState(false);
  const [date, setDate] = useState(false);
  const [textArea, setTextArea] = useState(false);
  console.log(text);
  return (
    <Container style={{ marginTop: "50px" }} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputField
            text={text}
            number={number}
            date={date}
            textArea={textArea}
          ></InputField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            setText={setText}
            setNumber={setNumber}
            setDate={setDate}
            setTextArea={setTextArea}
          ></TextField>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Generate;
