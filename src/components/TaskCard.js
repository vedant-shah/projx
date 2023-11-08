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
import dayjs from "dayjs";
import { db } from "../firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
function TaskCard(props) {
  const [status, setStatus] = useState(props.status);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  var localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Card
          sx={{
            backgroundColor:
              status === "completed"
                ? "rgba(0,255,0,0.1)"
                : status === "todo"
                ? "rgba(0,0,255,0.1)"
                : "rgba(255,167,0,0.3)",
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
              style={{ fontWeight: "bold" }}
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
                fontWeight: "bold",
              }}
              size="small"
              icon={
                <BsFillCalendarCheckFill size={12} style={{ color: "black" }} />
              }
              label={dayjs(props.element.deadline.toDate()).format("ll")}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              style={{ borderRadius: "50px" }}
              size="small"
              value={status}
              label="Status"
              onChange={async (e) => {
                setStatus(e.target.value);
                props.userData.tasks.forEach((task) => {
                  if (
                    task.name === props.element.name &&
                    task.description === props.element.description &&
                    task.project === props.element.project &&
                    task.status === props.element.status
                  ) {
                    task.status = e.target.value;
                  }
                  // console.log("props.element:", props.element);
                  // console.log("task:", task);
                });
                console.log(props.userData);
                const userDoc = doc(db, "projects", props.userData.id);
                await updateDoc(userDoc, props.userData);
                props.setUserData(props.userData);
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
