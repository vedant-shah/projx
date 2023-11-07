import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

function TodoMain(props) {
  //! Hardcoding tasks for now, change once api made.
  const [tasks, setTasks] = useState([
    {
      user: "",
      title: "Finish this page",
      desc: "",
      deadline: new Date("03/01/2022"),
      status: "high",
      project: "Gravity",
      // ! Set priority based on date while creating task
    },
    {
      text: "Finish Pierian UI/UX",
      deadline: new Date("04/08/2022"),
      complete: false,
      priority: "med",
      project: "Probability",
    },
    {
      text: "Finish Internship",
      deadline: new Date("06/12/2022"),
      complete: false,
      priority: "low",
      project: "Circles",
    },
    {
      text: "Anaadyanta",
      deadline: new Date("05/09/2022"),
      complete: false,
      priority: "med",
      project: "Euler",
    },
    {
      text: "Random task",
      deadline: new Date("05/03/2022"),
      complete: false,
      priority: "high",
      project: "Bridges",
    },
  ]);
  const getColor = (e) => {
    let color = "";
    props.sortedArray.forEach((element) => {
      if (e.project === element.name) {
        color = element.color;
        return element.color;
      }
    });
    return color;
  };
  return (
    <>
      <h5 className="text-danger my-4">High Priority</h5>
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
                borderLeft: `5px solid ${getColor(element)}`,
                color: days < 0 ? "#EE4B2B" : "whitesmoke",
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
      <h5 className="text-warning my-4">Moderate Priority</h5>
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
                borderLeft: `5px solid ${getColor(element)}`,
                color: days < 0 ? "#EE4B2B" : "whitesmoke",
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
      <h5 className="text-success my-4">Low Priority</h5>
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
                borderLeft: `5px solid ${getColor(element)}`,
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
                  // todo : remove color fields before updating delete(object_name[key_name]);
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
