import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RiAdminFill } from "react-icons/ri";
import DatePicker from "react-date-picker";
import { Controller, useForm } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function NewTaskModal(props) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [value, onChange] = useState(new Date());
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (values) => {
    values.project = "";
    console.log("| values", values);
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
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{ borderRadius: "50px" }}
                    value={"todo"}
                    size="small"
                    {...register("status")}
                    label="Status">
                    <MenuItem value={"todo"}>To-Do</MenuItem>
                    <MenuItem value={"inprogress"}>In Progress</MenuItem>
                    <MenuItem value={"completed"}>Completed</MenuItem>
                  </Select>
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
