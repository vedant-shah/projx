import React from "react";
import ProjectCard from "../components/ProjectCard";
import Button from "@mui/material/Button";
import * as BiIcons from "react-icons/bi";
import Grid from "@mui/material/Grid";
import TodoMain from "../components/TodoMain";

function Projects() {
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
  // TODO: Array hardcoded for now, get from api.
  const projArray = [
    {
      name: "Gravity",
      subject: "em",
      deadline: new Date(),
      description: "oshofchsfhsckjscjksjdchs",
    },
    {
      name: "Bridges",
      subject: "eme",
      deadline: new Date("12/08/2022"),
      description: "oshohsckjscskdjbfkjjksjdchs",
    },
    {
      name: "Circles",
      subject: "m4",
      deadline: new Date("06/15/2022"),
      description: "fhscaejffhaofkjscjksjdchs",
    },
    {
      name: "Probability",
      subject: "m2",
      deadline: new Date("05/04/2022"),
      description: "fafhkhzvchhlafhvsj,fhks",
    },
    {
      name: "Euler",
      subject: "physics",
      deadline: new Date("10/28/2022"),
      description: "ahfkahkhfk",
    },
  ];

  const getRandomColor = () => {
    let letters = "ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
  };
  const sortedArray = sort(projArray);
  return (
    <>
      <div
        className="container-fluid px-5 bg-dark pb-4"
        style={{ minHeight: "85vh" }}>
        <div
          className=" bg-dark mb-4 d-flex justify-content-between align-items-center"
          id="projecttitlewrapper">
          <p
            className="display-4 text-light"
            style={{ fontFamily: "Montserrat" }}>
            Welcome!
          </p>
          <Button
            style={{
              height: "40px",
              borderRadius: "30px",
              backgroundColor: "rgb(101 158 255)",
            }}
            id="addproject"
            variant="contained"
            startIcon={<BiIcons.BiPlus />}>
            New Project
          </Button>
        </div>
        <hr style={{ color: "grey" }} />

        <h2 className="text-light montserrat mb-5">My Pending Tasks:</h2>

        <TodoMain sortedArray={sortedArray} />

        <hr style={{ color: "grey", marginTop: "3rem" }} />

        <h2 className="text-light montserrat">Ongoing Projects:</h2>

        <Grid container sx={{ marginTop: "1.75rem" }} spacing={2}>
          {sortedArray.map((element) => {
            const color = getRandomColor();
            element.color = color;
            return (
              // ! change key value after making api
              <Grid item xs={12} md={4} sm={6} lg={3} key={element.name}>
                <ProjectCard element={element} color={color} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default Projects;
