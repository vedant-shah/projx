import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { FaTrash } from "react-icons/fa";
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
function TaskCard({
  element,
  userData,
  setUserData,
  color,
  status,
  sortBy,
  setQuickTasks,
  quickTasks,
}) {
  const [status1, setStatus1] = useState(status);
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
              status1 === "completed"
                ? "rgba(0,255,0,0.1)"
                : status1 === "todo"
                ? "rgba(0,0,255,0.1)"
                : "rgba(255,167,0,0.3)",
            borderRadius: 4,
            cursor: "pointer",
            boxShadow:
              "0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%), 0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%), 0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%)",
          }}>
          <CardContent>
            <div className="d-flex align-items-center justify-content-between">
              <Typography
                variant="h5"
                component="div"
                color={color}
                style={{ fontWeight: "bold" }}
                className="mb-3">
                {element.name}
              </Typography>
              <FaTrash
                onClick={async () => {
                  let temp = userData;
                  console.log(temp);
                  temp.tasks = temp.tasks.filter(
                    (task) => !isEqual(task, element)
                  );
                  // 'isEqual' function to compare objects
                  function isEqual(obj1, obj2) {
                    return JSON.stringify(obj1) === JSON.stringify(obj2);
                  }
                  console.log(temp);
                  const userDoc = doc(db, "projects", temp.id);
                  await updateDoc(userDoc, temp);
                  window.location.reload();
                }}
                className="mb-4"
                style={{ color: color }}
              />
            </div>
            <Typography variant="body2" color="#bdc1c6">
              {element.description}
              <br />
            </Typography>
          </CardContent>
          <CardActions className="d-flex mb-3 mx-2">
            {/* <Typography sx={{ fontSize: 10 }} color="#bdc1c6" gutterBottom> */}
            <Chip
              style={{
                backgroundColor: color,
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
              }}
              size="small"
              icon={
                <BsFillCalendarCheckFill size={12} style={{ color: "black" }} />
              }
              label={dayjs(element.deadline?.toDate()).format("ll")}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              style={{ borderRadius: "50px" }}
              size="small"
              value={status1}
              label="Status"
              onChange={async (e) => {
                setStatus1(e.target.value);
                const temp = userData;
                temp.tasks.forEach((task) => {
                  if (
                    task.name === element.name &&
                    task.description === element.description &&
                    task.project === element.project &&
                    task.status === element.status
                  ) {
                    task.status = e.target.value;
                  }
                  // console.log("element:", element);
                  // console.log("task:", task);
                });
                const userDoc = doc(db, "projects", userData.id);
                await updateDoc(userDoc, temp);
                let temp1 = temp.tasks;
                if (sortBy === "Sort By: Status") {
                  temp1.sort((a, b) => {
                    const order = { inprogress: 1, todo: 2, completed: 3 };
                    return order[a.status] - order[b.status];
                  });
                  setQuickTasks(temp1);
                }
                window.location.reload();
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
