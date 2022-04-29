import React, { useState } from "react";
import projxlogo from "../images/projx-logo.png";
import Checkbox from "@mui/material/Checkbox";
import ScrollTrigger from "react-scroll-trigger";

function Whyus() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const strike = { textDecoration: "line-through" };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const checkitems = () => {
    setTimeout(() => {
      setFirst(true);
    }, 1250);
    setTimeout(() => {
      setSecond(true);
    }, 1500);
    setTimeout(() => {
      setThird(true);
    }, 1750);
    setTimeout(() => {
      setFourth(true);
    }, 2000);
    setTimeout(() => {
      setFifth(true);
    }, 2250);
  };
  return (
    <div
      className="row m-0 mb-3 px-5"
      style={{
        backgroundColor: "black",
        color: "#bdc1c6",
        left: "0",
        right: "0",
      }}
      id="temp">
      <div
        className="col px-4 my-3 d-flex align-items-start flex-column"
        id="homeres1">
        <div className="display-6 my-5 " id="hometag">
          So Why Us?
        </div>
        <div>
          <p>
            <Checkbox
              {...label}
              size="small"
              onClick={() => {
                setFirst(!first);
              }}
              color="success"
              checked={first}
            />
            All Projects in 1 place
          </p>
          <p>
            <Checkbox
              {...label}
              size="small"
              onClick={() => {
                setSecond(!second);
              }}
              color="success"
              checked={second}
            />
            Colaboration
          </p>
          <p>
            <Checkbox
              {...label}
              size="small"
              onClick={() => {
                setThird(!third);
              }}
              color="success"
              checked={third}
            />
            Tasks sorted date wise
          </p>
          <p>
            <Checkbox
              {...label}
              size="small"
              onClick={() => {
                setFourth(!fourth);
              }}
              color="success"
              checked={fourth}
            />
            Task Priority
          </p>
          <ScrollTrigger onEnter={checkitems()}>
            <p>
              <Checkbox
                {...label}
                size="small"
                onClick={() => {
                  setFifth(!fifth);
                }}
                color="success"
                checked={fifth}
              />
              Assign Tasks
            </p>
          </ScrollTrigger>
        </div>
      </div>
      <div className="col text-center d-flex justify-content-center my-4">
        <img style={{ width: "300px" }} src={projxlogo} alt="" />
      </div>
    </div>
  );
}

export default Whyus;
