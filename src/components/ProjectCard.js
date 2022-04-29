import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProjectCard(props) {
  return (
    <>
      <Card sx={{ backgroundColor: "#171717", borderRadius: 4 }} className="">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="#bdc1c6" gutterBottom>
            {props.element.deadline.toString().substring(0, 15)}
          </Typography>
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
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProjectCard;
