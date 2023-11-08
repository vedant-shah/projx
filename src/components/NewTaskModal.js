import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";

function NewTaskModal(props) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [value, onChange] = useState(new Date());
  const { register, handleSubmit, control } = useForm();
  const projectsRef = collection(db, "projects");
  const onSubmit = async (values) => {
    values.project = props.project;
    values.deadline = value;
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
    userData.tasks.push(values);
    const userDoc = doc(db, "projects", userData.id);
    await updateDoc(userDoc, userData);
    props.setOpenTask(false);
    window.location.reload();
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
                  label="New Task Title"
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
                  onClick={() => props.setOpenTask(false)}
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="d-flex align-items-end mb-3">
                  <AiOutlineCalendar
                    className="mx-2"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <span className="me-2">Deadline* </span>

                  <DatePicker
                    onChange={(date) => onChange(new Date(date))}
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
                <div className="d-flex align-items-end my-3">
                  <TextField
                    select
                    fullWidth
                    label="Status"
                    className="my-3"
                    defaultValue="todo"
                    size="small"
                    style={{ borderRadius: "50px" }}
                    inputProps={register("status", {
                      required: "Please enter currency",
                    })}>
                    <MenuItem value={"todo"}>To-Do</MenuItem>
                    <MenuItem value={"inprogress"}>In Progress</MenuItem>
                    <MenuItem value={"completed"}>Completed</MenuItem>
                  </TextField>
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

export default NewTaskModal;
