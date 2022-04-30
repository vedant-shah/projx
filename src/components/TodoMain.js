import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

function TodoMain() {
  //! Hardcoding tasks for now, change once api made.
  const [tasks, setTasks] = useState([
    {
      user: "",
      text: "Finish this page",
      deadline: new Date("03/01/2022"),
      complete: false,
      priority: "high",
      project: "Gravity",
      // ! Set priority based on date while creating task
    },
    {
      text: "Finish Pierian UI/UX",
      deadline: new Date("04/08/2022"),
      complete: false,
      priority: "med",
    },
    {
      text: "Finish Internship",
      deadline: new Date("03/05/2022"),
      complete: false,
      priority: "low",
    },
    {
      text: "Anaadyanta",
      deadline: new Date("05/09/2022"),
      complete: false,
      priority: "med",
    },
    {
      text: "Random task",
      deadline: new Date("05/03/2022"),
      complete: false,
      priority: "high",
    },
  ]);
  return (
    <>
      <p className="text-danger">High Priority ( Deadline within 3 days )</p>
      {tasks.map((element, i) => {
        if (element.priority === "high") {
          const days = Math.floor(
            (element.deadline.getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24)
          );
          return (
            <p
              key={element.text}
              className={element.complete ? "strike" : ""}
              style={{
                borderLeft: "2px solid red",
                color: days < 0 ? "#d9534f" : "whitesmoke",
              }}>
              <Checkbox
                size="small"
                onClick={
                  () => {
                    setTasks(
                      tasks.map((tasks, j) =>
                        i === j
                          ? { ...tasks, complete: !element.complete }
                          : tasks
                      )
                    );
                    setTimeout(() => {
                      setTasks((prev) =>
                        prev.filter(({ complete }) => complete !== true)
                      );
                    }, 3000);
                  }
                  // ToDo : Use fetch to update db on popping
                }
                color="success"
                checked={element.complete}
              />
              {element.text}
              <span
                style={{ fontWeight: "lighter" }}
                className="badge rounded-pill bg-danger mx-3">
                {days >= 0
                  ? days + " days"
                  : "Overdue " + Math.abs(days) + " days ago"}
              </span>
            </p>
          );
        }
      })}
      <p className="text-warning">
        Moderate Priority ( Deadline within this week )
      </p>
      {tasks.map((element, i) => {
        if (element.priority === "med") {
          const days = Math.floor(
            (element.deadline.getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24)
          );
          return (
            <p
              key={element.text}
              className={element.complete ? "strike" : ""}
              style={{
                borderLeft: "2px solid red",
                color: days < 0 ? "#d9534f" : "whitesmoke",
              }}>
              <Checkbox
                size="small"
                onClick={
                  () => {
                    setTasks(
                      tasks.map((tasks, j) =>
                        i === j
                          ? { ...tasks, complete: !element.complete }
                          : tasks
                      )
                    );
                    setTimeout(() => {
                      setTasks((prev) =>
                        prev.filter(({ complete }) => complete !== true)
                      );
                    }, 3000);
                  }
                  // ToDo : Use fetch to update db on popping
                }
                color="success"
                checked={element.complete}
              />
              {element.text}
              <span
                style={{ fontWeight: "lighter" }}
                className={`badge rounded-pill bg-${
                  days < 0 ? "danger" : "warning"
                } mx-3`}>
                {days >= 0
                  ? days + " days"
                  : "Overdue " + Math.abs(days) + " days ago"}
              </span>
            </p>
          );
        }
      })}
      <p className="text-success">Low Priority ( Deadline beyond this week )</p>
      {tasks.map((element, i) => {
        if (element.priority === "low") {
          const days = Math.floor(
            (element.deadline.getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24)
          );
          return (
            <p
              key={element.text}
              className={element.complete ? "strike" : ""}
              style={{
                borderLeft: "2px solid red",
                color: days < 0 ? "#d9534f" : "whitesmoke",
              }}>
              <Checkbox
                size="small"
                onClick={
                  () => {
                    setTasks(
                      tasks.map((tasks, j) =>
                        i === j
                          ? { ...tasks, complete: !element.complete }
                          : tasks
                      )
                    );
                    setTimeout(() => {
                      setTasks((prev) =>
                        prev.filter(({ complete }) => complete !== true)
                      );
                    }, 3000);
                  }
                  // ToDo : Use fetch to update db on popping
                }
                color="success"
                checked={element.complete}
              />
              {element.text}
              <span
                style={{ fontWeight: "lighter" }}
                className={`badge rounded-pill bg-${
                  days < 0 ? "danger" : "success"
                } mx-3`}>
                {days >= 0
                  ? days + " days"
                  : "Overdue " + Math.abs(days) + " days ago"}
              </span>
            </p>
          );
        }
      })}
    </>
  );
}

export default TodoMain;
