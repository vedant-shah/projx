import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RiAdminFill } from "react-icons/ri";
import DatePicker from "react-date-picker";
import { Controller, useForm } from "react-hook-form";
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

function NewProjectModal(props) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const { register, handleSubmit, control } = useForm();
  const projectsRef = collection(db, "projects");
  const onSubmit = async (values) => {
    try {
      console.log("| values", values);
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
      const userData = filteredData[0];
      userData.projects.push(values);
      const userDoc = doc(db, "projects", userData.id);
      await updateDoc(userDoc, userData);
      props.setOpen(false);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <>
      <div className="modal-dialog bg-dark" style={{ borderRadius: "60px" }}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <div
            className="modal-content bg-dark text-light"
            style={{ borderRadius: "15px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-header d-flex align-items-center">
                {/* <FcFlashOn style={{ fontSize: "2rem" }} /> */}
                <TextField
                  name="name"
                  label="New Collection Name"
                  variant="outlined"
                  required
                  {...register("name", { required: true })}
                  sx={{
                    input: {
                      color: "whitesmoke",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#616161" },
                  }}
                />
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  onClick={() => props.setOpen(false)}
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* <div className="d-flex align-items-end mb-3">
                  <AiOutlineCalendar
                    className="mx-2"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <span className="me-2">Deadline* </span>
                  
                  <DatePicker
                    onChange={(date) => onChange(date)}
                    value={value}
                    format="dd-MM-y"
                    clearIcon={<AiOutlineClose />}
                    calendarIcon={<AiOutlineCalendar />}
                    required
                    monthPlaceholder="mm"
                    dayPlaceholder="dd"
                    yearPlaceholder="yyyy"
                    style={{ color: "whitesmoke" }}
                    minDate={new Date()}
                  />
                  <TextField
                    name="deadline"
                    value={new Date(value)}
                    {...register("deadline")}
                    sx={{ display: "none" }}
                  />
                </div>
                <div className="d-flex align-items-end my-3">
                  <RiAdminFill
                    className="mx-2"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <TextField
                    name="owner"
                    size="small"
                    label="Owner"
                    focused
                    value={owner}
                    {...register("owner")}
                    variant="standard"
                    inputProps={{
                      readOnly: true,
                    }}
                    sx={{
                      borderBottom: "1.5px solid #707070",
                      input: {
                        // eslint-disable-next-line
                        WebkitTextFillColor: "#707070!important",
                        color: "#707070!important",
                      },
                    }}
                    //   inputProps={{ style: { color: "whitesmoke!important" } }}
                    InputLabelProps={{
                      style: { color: "#616161" },
                      // shrink: true,
                    }}
                  />
                </div> */}

                <div className="d-flex align-items-end my-3">
                  <TextField
                    name="description"
                    size="small"
                    {...register("description")}
                    fullWidth
                    multiline
                    maxRows={4}
                    label="Description"
                    variant="standard"
                    sx={{
                      borderBottom: "1.5px solid #707070",
                      textarea: {
                        color: "whitesmoke",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#616161" },
                    }}
                  />
                </div>
              </div>
              <button type="submit" className="create">
                Create
              </button>
            </form>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default NewProjectModal;
