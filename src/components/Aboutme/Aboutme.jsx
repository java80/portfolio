import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tools from "./myToolBox.json";
//import "./Aboutme.css";
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
    width: 500,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    
  },
  media: {
    height: 300,
    width: 500
    
  },
});

export default function Aboutme(props) {
  const classes = useStyles();

  return (
    
       <div>
        {/* <Typography gutterBottom variant="h5"> */}
          {Tools.map((tool) => {
            return (
              <Card key={tool.id} className={classes.card} >
                <List >
                <listitem>
                  <ListItemText>
                    <Typography color="primary" className={classes.content}>
                    <h3> {props.headings.language} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span> <span> {tool.language} </span>
                </h3>
                      </Typography>
                  
                  </ListItemText>
                </listitem>
                <listitem>
                  <ListItemText>
                    <Typography color="primary" className={classes.content}>
                    <h3> {props.headings.os} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span> <span> {tool.os} </span>
                </h3>
                      </Typography>
                  
                  </ListItemText>
                </listitem>

                <listitem>
                  <ListItemText>
                    <Typography color="primary" className={classes.content}>
                    <h3> {props.headings.framework} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span> <span> {tool.framework} </span>
                </h3>
                      </Typography>
                  
                  </ListItemText>
                </listitem>
                <listitem>
                  <ListItemText>
                    <Typography color="primary" className={classes.content}>
                    <h3> {props.headings.tools} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span> <span> {tool.tools} </span>
                </h3>
                      </Typography>
                  
                  </ListItemText>
                </listitem>
                </List>
              </Card>
            );
          })}
       {/* </Typography> */}
    
       </div>
   
  );
}

// class Aboutme extends Component {

//   render() {

//     return (

//        <div className="aboutme-card">

//        <div className="language">
//           {
//           Tools.map(tool => {
//           return (
//                <div key={tool.id}>
//                   <h2> About me</h2>
//                 <h3> {this.props.headings.language} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span> <span> {tool.language} </span>
//                  </h3>
//                <h3> {this.props.headings.os} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span>  <span> {tool.os} </span>
//                  </h3>
//                  <h3> {this.props.headings.framework}<span>&nbsp; &nbsp;&nbsp;&nbsp;</span> <span> {tool.framework}  </span>
//                  </h3>
//                <h3> {this.props.headings.tools} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span> <span> {tool.tools}  </span>
//                  </h3>

//                 </div>
//               )
//            })

//           }

//           </div>
//        </div>
//     );

//     }

//  };

//  export default Aboutme;
