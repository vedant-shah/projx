import React from "react";
import { Link } from "react-router-dom";
import projectImg from "../images/projects3.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import todoimg from "../images/todo.png";
import Whyus from "../components/Whyus";
import HomeQuote from "../components/HomeQuote";
import TypeWriterEffect from "react-typewriter-effect";

function Home() {
  const container = document.querySelector("#mycont");
  return (
    <>
      <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
        <div
          className="row m-0 mb-3 px-5"
          style={{
            backgroundColor: "black",
            color: "#bdc1c6",
            width: "100vw",
            height: "90vh",
          }}>
          <div className="col my-5 d-flex flex-column" id="homeres">
            <div className="display-1 mb-5 montserrat" id="hometag">
              Organization made easy.
            </div>
            <div
              className="divider mb-5"
              style={{ width: "30%", borderTop: "solid 1.5px #cffffe" }}></div>
            <div className="mt-4" id="mycont" style={{ height: "125px" }}>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Montserrat",
                  fontSize: "1.3rem",
                  marginBottom: "1.25rem",
                }}
                startDelay={100}
                cursorColor="black"
                text="Introducing ProjX, your 1 stop solution to Project Management."
                typeSpeed={30}
                scrollArea={container}
              />

              <div className="">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Montserrat",
                    fontSize: "1.3rem",
                    marginBottom: "1.25rem",
                  }}
                  startDelay={3000}
                  cursorColor="black"
                  text="Create. Collaborate. Catalyze. Complete."
                  typeSpeed={20}
                  scrollArea={container}
                />
              </div>
            </div>
            <Stack spacing={2} direction="row">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white", color: "black" }}>
                  Get Started
                </Button>
              </Link>
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  style={{ borderColor: "#89ffd7", color: "white" }}>
                  Sign In
                </Button>
              </Link>
            </Stack>
          </div>
          <div className="col p-0 text-center d-flex my-3 justify-content-center align-items-center">
            <img style={{ width: "300px" }} src={projectImg} alt="" />
          </div>
        </div>
        <div className="row m-0 px-5 my-3" style={{ width: "100vw" }}>
          <div className="col p-0 text-center">
            <img
              style={{ width: "300px", marginTop: "1.5rem" }}
              src={todoimg}
              alt=""
            />
          </div>
          <div
            className="col my-5 text-end d-flex flex-column align-items-end"
            id="homeres">
            <div
              className="display-6 mb-5 montserrat "
              id="hometag"
              style={{ color: "black" }}>
              Collect & Connect.
            </div>
            <div
              className="divider mb-5"
              style={{ width: "30%", borderTop: "solid 1.5px #89ffd7" }}></div>
            <h5 className="my-4" style={{ color: "black" }}>
              Bring your team's work together, in one shared space. Collect all
              the data, stay ahead of time & get S#!T done.
            </h5>
          </div>
        </div>
        <div id="whyus">
          <Whyus />
        </div>
        <div
          className="row px-3 d-flex"
          id="homeres"
          style={{ height: "20rem", width: "99vw" }}>
          <HomeQuote />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
