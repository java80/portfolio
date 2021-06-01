import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles.js";

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div id="Specialization" className={classes.mainContainer}>
      <Grid container spacing={3} className={classes.mainContainer}>
        <Grid item xs={12} style={{ padding: "0px" }}>


          <Grid container spacing={3} className={classes.specialization}>
            <Grid item xs={12} md={10} lg={8} style={{ padding: "0px" }}>
            <h1>
               <span className={classes.my}> My Solution Tools</span>
            </h1>
            </Grid>
          </Grid>


          <Grid container spacing={3} className={classes.mainContainer}>

            <Grid item xs={6} lg={3} style={{ padding: "0px" }}>
              <h2 className={classes.headings}>Languages</h2>
              <span>C++</span><br/>
              <span>C#</span><br/>
              <span>JavaScript</span><br/>
              <span>Ruby</span>
            </Grid>
            <Grid item xs={6} lg={3} style={{ padding: "0px" }}>
            <h2 className={classes.headings}>OS</h2>
            <span>Linux</span><br/>
              <span>Ubuntu</span><br/>
              <span>Windows</span><br/>
              <span>Mac</span>
            </Grid>
            <Grid item xs={6} lg={3} style={{ padding: "0px" }}>
            <h2 className={classes.headings}>Frameworks</h2>
            <span>Ruby on Rails</span><br/>
              <span>Express JS</span><br/>
              <span>React JS</span><br/>
              
            </Grid>
            <Grid item xs={6} lg={3} style={{ padding: "0px" }}>
            <h2 className={classes.headings}>Tools/SDKs</h2>
            <span>Git</span><br/>
              <span>MongoDB</span><br/>
              <span>PostGreSQL</span><br/>
              <span>Unity3D</span>
              <span>XCode/Android Studio</span>

            </Grid>
            <a href="https://docs.google.com/document/d/1voxeid5y03Vp2qtAIhJvU1W81BbXgPCgaW_4Y9-qSbI/edit" target="_blank" className={classes.my}><h3>
                Download Resume 
            </h3>
            </a>
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
}
