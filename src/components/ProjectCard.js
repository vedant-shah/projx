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
          backgroundColor: "#171717",
          borderRadius: 4,
          cursor: "pointer",
          boxShadow: "0px 3px 5px 0px",
        }}>
        <CardContent>
          <Typography variant="h5" component="div" color={props.color}>
            {props.element.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} className="text-muted" color="#f4f186">
            {props.element.subject}
          </Typography>
          <Typography variant="body2" color="#bdc1c6">
            {props.element.description}
            <br />
          </Typography>
        </CardContent>
        <CardActions className="d-flex mb-3 mx-2">
          {/* <Typography sx={{ fontSize: 10 }} color="#bdc1c6" gutterBottom> */}
          <Chip
            style={{ backgroundColor: props.color, fontSize: "10px" }}
            size="small"
            icon={<BsFillCalendarCheckFill size={12} />}
            label={props.element.deadline.toString().substring(0, 15)}
          />
          {/* </Typography> */}
        </CardActions>
      </Card>
    </>
  );
}

export default ProjectCard;
