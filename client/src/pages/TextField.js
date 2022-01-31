import { Button } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";

const TextField = (props) => {
  const { setText, setNumber, setDate, setTextArea } = props;

  return (
    <div>
      <h2>Text Field</h2>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Button
              onClick={() => setText(true)}
              variant="contained"
              color="primary"
              size="small"
            >
              Text
            </Button>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Button
              onClick={() => setNumber(true)}
              variant="contained"
              color="primary"
              size="small"
            >
              Number
            </Button>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Button
              onClick={() => setDate(true)}
              variant="contained"
              color="primary"
              size="small"
            >
              Date
            </Button>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Button
              onClick={() => setTextArea(true)}
              variant="contained"
              color="primary"
              size="small"
            >
              Text Area
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TextField;
