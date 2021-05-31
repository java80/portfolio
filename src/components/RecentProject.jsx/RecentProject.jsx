import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
//import "./RecentProject.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  CssBaseline,
  Toolbar,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  InboxIcon,
} from "@material-ui/core";
const useStyles = makeStyles({
  card: {
    maxWidth: 800,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    height: 700
  },
  media: {
    height: 600,
    width: 500
    
  },

});
const  RecentProject= () => {
  const classes = useStyles();
  const slider = (
    <AwesomeSlider
      media={[
        {
          source: 'img/RecentProject.png',
        },
        {
          source: 'img/RecentProject.png',
        },
        {
          source: 'img/RecentProject.png',
        },
      ]}
      />
  );
  


  return (
    <Card className={classes.card} >
       <CardContent>
       <Typography color="primary" variant="h3">
       <h3> Recent Projects</h3>     
        </Typography>
        <Typography color="secondary" variant="h4">
           
          <h4> You Teach App</h4>
          </Typography>
        <Typography color="primary" variant="h5">
        <h6> Elearning Platform</h6> 
        </Typography>
      
       { slider }
      
      
        </CardContent>
      </Card>
  );
};

export default RecentProject;