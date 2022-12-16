import { Box, Typography, Grid, TextField, Button } from "@mui/material";

import GridItem from "../components/GridItem";

const Home = () => {
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
              label="Please enter a number"
              variant="outlined"
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
