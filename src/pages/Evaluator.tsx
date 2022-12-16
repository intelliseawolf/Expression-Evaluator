import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

import GridItem from "../components/GridItem";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { evaluate } from "../app/modules/evaluatorSlice";

const Evaluator = () => {
  const [operator, setOperator] = useState<string>("+");
  const [operand, setOperand] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const { value } = useAppSelector((state) => state.evaluator);
  const [initValue, setInitValue] = useState<string>(value.toString());
  const dispatch = useAppDispatch();

  function handleChangeOperator(event: SelectChangeEvent<unknown>) {
    if (event.target.value && typeof event.target.value === "string")
      setOperator(event.target.value);
  }

  function handleChangeOperand(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setOperand(event.target.value);
  }

  function addOperation() {
    setInitValue(value.toString());
    dispatch(evaluate({ operand, operator }));
    setShowResult(true);
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
        <Box
          gap={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="button"
            fontWeight={100}
            sx={{
              fontSize: "40px",
              padding: "10px 20px",
              background: "rgb(236, 245, 247)",
            }}
          >
            {initValue}
          </Typography>
          <Typography
            variant="button"
            fontWeight={100}
            sx={{
              fontSize: "40px",
              padding: "10px 20px",
              background: "rgb(236, 245, 247)",
            }}
          >
            {operand}
          </Typography>
          <Typography
            variant="button"
            fontWeight={100}
            sx={{
              fontSize: "40px",
              padding: "10px 20px",
              background: "rgb(236, 245, 247)",
            }}
          >
            {operator}
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <Typography
            variant="button"
            fontWeight={100}
            sx={{
              fontSize: "40px",
              padding: "10px 20px",
            }}
          >
            =
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <Typography
            variant="button"
            fontWeight={100}
            sx={{
              fontSize: "40px",
              padding: "10px 20px",
            }}
          >
            {showResult ? value : ""}
          </Typography>
        </Box>
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
        <Grid item md={4} xs={6}>
          <GridItem>
            <FormControl fullWidth>
              <InputLabel>Operator</InputLabel>
              <Select
                value={operator}
                label="Operator"
                onChange={handleChangeOperator}
                fullWidth
              >
                <MenuItem value="+">+</MenuItem>
                <MenuItem value="-">-</MenuItem>
                <MenuItem value="*">*</MenuItem>
                <MenuItem value="/">/</MenuItem>
              </Select>
            </FormControl>
          </GridItem>
        </Grid>
        <Grid item md={4} xs={6}>
          <GridItem>
            <TextField
              id="outlined-basic"
              label="Operand"
              variant="outlined"
              type="number"
              value={operand}
              onChange={handleChangeOperand}
              fullWidth
            />
          </GridItem>
        </Grid>
        <Grid item md={4} xs={12}>
          <GridItem sx={{ height: "calc(100% - 16px)" }}>
            <Button
              variant="contained"
              fullWidth
              color="success"
              sx={{ height: "100%" }}
              onClick={addOperation}
            >
              Add Operation
            </Button>
          </GridItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Evaluator;
