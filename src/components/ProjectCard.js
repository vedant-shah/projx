import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { BsFillCalendarCheckFill } from "react-icons/bs";
function ProjectCard(props) {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#000000",
          borderRadius: 4,
          cursor: "pointer",
          boxShadow:
            "0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%), 0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%), 0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%)",
        }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            color={props.color}
            style={{ fontWeight: "bold" }}
            className="mb-3">
            {props.element.name}
          </Typography>
          <Typography variant="body2" color="#bdc1c6">
            {props.element.description}
            <br />
          </Typography>
        </CardContent>
        <CardActions className="d-flex mb-3 mx-2">
          {/* <Typography sx={{ fontSize: 10 }} color="#bdc1c6" gutterBottom> */}
          {/* <Chip
            style={{ backgroundColor: props.color, fontSize: "10px" }}
            size="small"
            icon={<BsFillCalendarCheckFill size={12} />}
            label={props.element.deadline.toString().substring(0, 15)}
          /> */}
          {/* </Typography> */}
        </CardActions>
      </Card>
    </>
  );
}

export default ProjectCard;
