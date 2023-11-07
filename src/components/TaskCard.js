import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
function TaskCard(props) {
  const [status, setStatus] = useState(props.status);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Card
          sx={{
            backgroundColor: "#171717",
            borderRadius: 4,
            cursor: "pointer",
            boxShadow:
              "0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%), 0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%), 0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%)",
          }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              color={props.color}
              className="mb-3">
              {props.element.name}
            </Typography>
            <Typography variant="body2" color="#bdc1c6">
              {props.element.description}
              <br />
            </Typography>
          </CardContent>
          <CardActions className="d-flex mb-3 mx-2">
            {/* <Typography sx={{ fontSize: 10 }} color="#bdc1c6" gutterBottom> */}
            <Chip
              style={{
                backgroundColor: props.color,
                fontSize: "10px",
                color: "black",
              }}
              size="small"
              icon={
                <BsFillCalendarCheckFill size={12} style={{ color: "black" }} />
              }
              label={props.element.deadline.toString().substring(0, 15)}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              style={{ borderRadius: "50px" }}
              size="small"
              value={status}
              label="Status"
              onChange={(e) => {
                setStatus(e.target.value);
              }}>
              <MenuItem value={"todo"}>To-Do</MenuItem>
              <MenuItem value={"inprogress"}>In Progress</MenuItem>
              <MenuItem value={"completed"}>Completed</MenuItem>
            </Select>
            {/* </Typography> */}
          </CardActions>
        </Card>
      </ThemeProvider>
    </>
  );
}

export default TaskCard;
