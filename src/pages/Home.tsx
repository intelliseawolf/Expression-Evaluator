import { Box, Typography, Grid, TextField, Button } from "@mui/material";

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
          <TextField
            id="outlined-basic"
            label="Please enter a number"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            color="success"
            sx={{ height: "100%" }}
          >
            Add Number
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
