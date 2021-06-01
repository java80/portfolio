import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles.js";
import GA from './images/GA.jpeg';
import SaintPeter from './images/SaintPeter.jpeg';


export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div id='Studies' className={classes.mainContainer}>
      <Grid container spacing={3} className={classes.mainContainer}>
        <Grid item xs={12} style={{ padding: "0px" }}>


          <Grid container spacing={3} className={classes.specialization}>
            <Grid item xs={12} md={10} lg={8} style={{ padding: "0px" }}>
            <h1>
               <span className={classes.my}> Education</span> 
            </h1>
            </Grid>
          </Grid>


          <Grid container spacing={3} className={classes.mainContainer}>

            <Grid item xs={6} lg={6} style={{ padding: "0px" }}>
              
             <img
                  src={GA}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "100%",
                  }}
                  alt="ga logo"></img>
                <h2 className={classes.headings}>General Assembly</h2>
            </Grid>
            <Grid item xs={6} lg={6} style={{ padding: "0px" }}>
             <img
                  src={SaintPeter}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "100%",
                }}
                alt="CSS"
                ></img>
            <h2 className={classes.headings}>Saint Peter's University</h2>
            
            </Grid>
      
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
}
