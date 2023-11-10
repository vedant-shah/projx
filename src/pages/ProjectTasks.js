import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewTaskModal from "../components/NewTaskModal";
import Modal from "@mui/material/Modal";
import * as BiIcons from "react-icons/bi";
import Grid from "@mui/material/Grid";
import TaskCard from "../components/TaskCard";
import { IoFilter } from "react-icons/io5";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
function ProjectTasks() {
  let { slug } = useParams();
  const getRandomColor = () => {
    let letters = "ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
  };
  const sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].deadline < arr[min].deadline) min = j;
      }
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
    return arr;
  };
  const projectsRef = collection(db, "projects");
  const [filter, setFilter] = useState("All");
  const [userData, setUserData] = useState({});
  const [openTask, setOpenTask] = useState(false);
  const [quickTasks, setQuickTasks] = useState([]);
  const [duplicateQuickTasks, setDuplicateQuickTasks] = useState([]);
  const [sortBy, setSortBy] = useState("Sort By: Date");
  useEffect(() => {
    getUserData();
  }, []);
  useEffect(() => {
    if (duplicateQuickTasks) {
      let temp = duplicateQuickTasks;
      if (filter === "To-Do") {
        temp = temp.filter((e) => e.status === "todo");
        setQuickTasks(temp);
      }
      if (filter === "All") {
        temp = temp.filter((e) => e.project !== "");
        setQuickTasks(temp);
      }
      if (filter === "In-Progress") {
        temp = temp.filter((e) => e.status === "inprogress");
        setQuickTasks(temp);
      }
      if (filter === "Completed") {
        temp = temp.filter((e) => e.status === "completed");
        setQuickTasks(temp);
      }
    }
  }, [userData, filter]);

  const getUserData = async () => {
    const q = query(
      projectsRef,
      where(
        "email",
        "==",
        JSON.parse(localStorage.getItem("signedinuser")).email
      )
    );
    const data = await getDocs(q);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    let temp = filteredData[0].tasks;
    let temp1 = [];
    temp.forEach((task) => {
      if (task.project === slug) temp1.push(task);
    });
    // temp1.filter((task) => task.project.length !== 0);
    temp1 = sort(temp1);
    setQuickTasks(temp1);
    setDuplicateQuickTasks(temp1);
  };
  return (
    <div
      className="p-5"
      style={{ minHeight: "90vh", backgroundColor: "#1c1c1c" }}>
      <div
        className="  d-flex justify-content-between align-items-center"
        id="projecttitlewrapper">
        <p className="display-4 text-light lgf" style={{}}>
          {slug}
        </p>
        <button
          className="button"
          onClick={() => {
            setOpenTask(!openTask);
          }}>
          <span className="button-content d-flex align-items-center">
            <BiIcons.BiPlus style={{ fontSize: "1.5rem" }} />
            New Task
          </span>
        </button>
      </div>
      <Modal
        open={openTask}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div>
          <NewTaskModal setOpenTask={setOpenTask} project={slug} />
        </div>
      </Modal>
      <hr style={{ color: "grey" }} />
      <div className="d-flex justify-content-between w-100 filter-sort">
        <div className="d-flex align-items-center my-2">
          <IoFilter
            className="mx-2"
            onClick={() => {
              if (filter === "All") setFilter("To-Do");
              if (filter === "To-Do") setFilter("In-Progress");
              if (filter === "In-Progress") setFilter("Completed");
              if (filter === "Completed") setFilter("All");
            }}
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
          />
          <h3
            className="lgf m-0"
            style={{
              cursor: "pointer",
              userSelect: "none",
              fontSize: "2.5rem",
            }}>
            {filter}
          </h3>
        </div>
        <h3
          className="lgf my-2"
          style={{
            cursor: "pointer",
            userSelect: "none",
            fontSize: "2.5rem",
          }}
          onClick={() => {
            if (sortBy === "Sort By: Date") {
              setSortBy("Sort By: Status");
              let temp = quickTasks;
              temp.sort((a, b) => {
                const order = { inprogress: 1, todo: 2, completed: 3 };
                return order[a.status] - order[b.status];
              });
              setQuickTasks(temp);
            }
            if (sortBy === "Sort By: Status") {
              setSortBy("Sort By: Date");
              let temp = quickTasks;
              temp = sort(temp);
              setQuickTasks(temp);
            }
          }}>
          {sortBy}
        </h3>
      </div>
      <Grid container sx={{ marginTop: "1.75rem" }} spacing={4}>
        {quickTasks.map((element) => {
          const color = getRandomColor();
          return (
            <Grid item xs={12} md={4} sm={6} lg={4} key={element.name}>
              <TaskCard
                element={element}
                userData={userData}
                setUserData={setUserData}
                quickTasks={quickTasks}
                setQuickTasks={setQuickTasks}
                color={color}
                sortBy={sortBy}
                status={element.status}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ProjectTasks;
