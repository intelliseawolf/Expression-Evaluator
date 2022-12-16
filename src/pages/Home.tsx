import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";

import GridItem from "../components/GridItem";
import { useAppDispatch } from "../app/hooks";
import { setValue } from "../app/modules/evaluatorSlice";

const Home = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function changeInputValue(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setInputValue(e.currentTarget.value);
  }

  function addNumber() {
    if (inputValue) {
      dispatch(setValue(inputValue));
      navigate("/evaluator", { replace: true });
    }
  }

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          variant="h1"
          fontWeight={100}
          textAlign="center"
          color="rgb(80, 227, 194)"
        >
          Expression Evaluator
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "50px",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid item xs={6}>
          <GridItem>
            <TextField
              id="outlined-basic"
              type="number"
              label="Please enter a number"
              variant="outlined"
              value={inputValue}
              onChange={changeInputValue}
              fullWidth
            />
          </GridItem>
        </Grid>
        <Grid item xs={6}>
          <GridItem sx={{ height: "calc(100% - 16px)" }}>
            <Button
              variant="contained"
              fullWidth
              color="success"
              sx={{ height: "100%" }}
              onClick={addNumber}
            >
              Add Number
            </Button>
          </GridItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
