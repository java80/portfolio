
import React, { Component } from 'react';
//import "./Education.css";
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
  classes,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  InboxIcon,
} from "@material-ui/core";
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

class Education extends Component {
  render() {
      
    return (
      <Card>
        <CardContent>
              
            <ListItem >
            <img className="ga-image" src={process.env.PUBLIC_URL + '/img/Ga-icon.jpeg'} alt="Ga logo" width ="75px" />
        <ListItemText>
        <Typography  >
        <CardActionArea href="https://generalassemb.ly/">
        <CardContent>
            <Typography variant = "h6">General Assembly</Typography>
        </CardContent>
       </CardActionArea>
            </Typography>
        </ListItemText>
    
              </ListItem>
              <ListItem >
              <img className="st-peters-image" src={process.env.PUBLIC_URL + '/img/SaintPeter.jpeg'} alt="Saint Peter's logo" width ="75px" />
        <ListItemText>
        <Typography  >
        <CardActionArea href="https://www.saintpeters.edu/">
        <CardContent>
            <Typography variant = "h6">Saint Peter's University</Typography>
        </CardContent>
       </CardActionArea>
            </Typography>
        </ListItemText>
    
      </ListItem>
      
          </CardContent>
        </Card>
    );

    } 
  
 };
 
 export default Education;