import { Box, Typography, Grid, TextField, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
          <Item>
            <TextField
              id="outlined-basic"
              label="Please enter a number"
              variant="outlined"
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ height: "calc(100% - 16px)" }}>
            <Button
              variant="contained"
              fullWidth
              color="success"
              sx={{ height: "100%" }}
            >
              Add Number
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
