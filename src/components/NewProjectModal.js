import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FcFlashOn } from "react-icons/fc";
import { GiMaterialsScience } from "react-icons/gi";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import DatePicker from "react-date-picker";
import { Controller, useForm } from "react-hook-form";

function NewProjectModal(props) {
  const [owner, setOwner] = useState("user_name");
  const [value, onChange] = useState(new Date());
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (values) => {
    console.log("| values", values);
  };
  return (
    <>
      <div className="modal-dialog bg-dark" style={{ borderRadius: "60px" }}>
        <div
          className="modal-content bg-dark text-light"
          style={{ borderRadius: "15px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header d-flex align-items-center">
              <FcFlashOn style={{ fontSize: "2rem" }} />
              <TextField
                name="name"
                label="Project Name"
                variant="standard"
                required
                {...register("name", { required: true })}
                sx={{
                  borderBottom: "2px solid #C0c0c0",
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
              <div className="d-flex align-items-end mb-3">
                <AiOutlineCalendar
                  className="mx-2"
                  style={{ fontSize: "1.5rem" }}
                />
                <span className="me-2">Deadline* </span>
                {/* <Controller
                  control={control}
                  name="deadline"
                  render={({ field }) => ( */}
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
                <RiAdminFill className="mx-2" style={{ fontSize: "1.5rem" }} />
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
              </div>
              <div className="d-flex align-items-end my-3">
                <AiFillGithub className="mx-2" style={{ fontSize: "1.5rem" }} />
                <TextField
                  name="link"
                  size="small"
                  fullWidth
                  label="Link (Optional)"
                  {...register("link")}
                  variant="standard"
                  sx={{
                    borderBottom: "1.5px solid #707070",
                    input: {
                      color: "whitesmoke",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#616161" },
                  }}
                />
              </div>
              <div className="d-flex align-items-end my-3">
                <AiFillInfoCircle
                  className="mx-2"
                  style={{ fontSize: "1.5rem" }}
                />
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
                <GiMaterialsScience
                  className="mx-2"
                  style={{ fontSize: "1.5rem" }}
                />
                <TextField
                  name="subject"
                  size="small"
                  {...register("subject", { required: true })}
                  label="Subject"
                  required
                  variant="standard"
                  sx={{
                    borderBottom: "1.5px solid #707070",
                    input: {
                      color: "whitesmoke",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#616161" },
                  }}
                />
              </div>
              <div className="d-flex align-items-center my-4">
                <FaUserFriends
                  className="mx-2"
                  style={{ fontSize: "1.5rem" }}
                />
                <span>Team Members can be Added from the project page!</span>
              </div>
            </div>
            <button type="submit" className="create">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewProjectModal;
