import React from 'react';
//import "./Skills.css";
import { makeStyles } from "@material-ui/core/styles";
import Alltech from "./ToolsIUse.json";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CardActionArea,
  Grid,
  CssBaseline,
  Toolbar,
  Button,
  Container,
  Classes,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  InboxIcon,
} from "@material-ui/core";
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 50,
    
  },
});
 const  Skills = (props) => {
  
  const currentTech = Alltech
  const classes = useStyles();
  
  
  //  const renderTech = currentTech.map((alltech) => (
    
  //   ))
  
   return (
    
     <div>
       <Grid container spacing={2}>
          {currentTech.map((alltech) => (
            <Grid item xs={12} sm={4} key={alltech.id}>
              <Card className={classes.card}>
                <CardMedia 
                  className={classes.media}
                  image={alltech.img_url}
                />

                <CardContent>
                  <Typography color="primary" variant="h5">
                    {alltech.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
       </div>
    
      
        
        
       
  );
}



export default Skills;