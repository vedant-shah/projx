import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth, db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import Alert from "@mui/material/Alert";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Copyright(props) {
  return (
    <Typography variant="body2" color="whitesmoke" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" to="/">
        ProjX
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function SignUp() {
  const nav = useNavigate();
  const projectsRef = collection(db, "projects");
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get("email"),
        password: data.get("password"),
      });
      await createUserWithEmailAndPassword(
        auth,
        data.get("email"),
        data.get("password")
      );
      await addDoc(projectsRef, {
        email: data.get("email"),
        projects: [],
        tasks: [],
      });
      nav("/signin");
    } catch (e) {
      setFailureMessage(e.toString().substring(30));
      setShowFailure(true);
      setTimeout(() => {
        setShowFailure(false);
      }, 3000);
    }
  };
  const [showFailure, setShowFailure] = useState(false);
  const [failureMessage, setFailureMessage] = useState(false);
  return (
    <div
      component="main"
      style={{
        backgroundColor: "#1c1c1c",
        height: "90vh",
        width: "100vw!important",
        padding: "3% ",
      }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {showFailure && (
            <Alert
              severity="error"
              style={{
                marginTop: "1%",
              }}>
              {failureMessage}
            </Alert>
          )}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </ThemeProvider>
    </div>
  );
}
