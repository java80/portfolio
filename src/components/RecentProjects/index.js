import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles.js";

export default function CenteredGrid() {
  const classes = useStyles();

 
  return (
    <div id='RecentProjects' className={classes.mainContainer}>
      <Grid container spacing={3} className={classes.mainContainer}>
        <Grid item xs={12} style={{ padding: "0px" }}>
          <Grid container spacing={3} className={classes.specialization}>
            <Grid item xs={12} lg={6} style={{ padding: "0px" }}>
              <h1>
                <span className={classes.my}> Recent</span> Projects
              </h1>
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.mainContainer}>
            <Grid item xs={4} style={{ padding: "0px" }}>
                <a hover href="https://sad-einstein-72a4bc.netlify.app/" target="_blank" className={classes.heading}><h2 >Course Management</h2></a>
                <p>An E-Learning Platform</p>
                <h2>Tools Used</h2>
                <span>Ruby On Rails</span><br/>
                <span>React JS</span><br/>
                <span>PostGreSQL</span><br/>
                <span>Heroku</span><br/>
               <a href="https://github.com/java80/coursemanagement"><button className={classes.github}>Github</button></a>


            </Grid>
            <Grid item xs={4} style={{ padding: "0px" }}>
            <a href="https://gracious-hodgkin-2b0838.netlify.app/Landing" target="_blank" className={classes.heading}> <h2>Dev-it-forward</h2></a>
            <p>Creating an app for subject matter experts to connect to potential students for tutoring.</p>
                <h2>Tools Used</h2>
                <span>Node/Express JS</span><br/>
                <span>React JS</span><br/>
                <span>MongoDB</span><br/>
                <span>Heroku</span><br/>
                <span>Netlify</span><br/>
               <a href="https://github.com/foremanlb/Dev-It-Forward"><button className={classes.github}>Github</button></a>


            </Grid>
            <Grid item xs={4} style={{ padding: "0px" }}>
            <a href="https://shop-v1.netlify.app/" target="_blank" className={classes.heading}><h2>Ecommerce</h2></a>
            <p>React ecommerce</p>
                <h2>Tools Used</h2>
                <span>Airtable REST API</span><br/>
                <span>React JS</span><br/>

                <a href="https://github.com/java80/coursemanagement"><button className={classes.github}>Github</button></a>

            </Grid>
            <Grid item xs={12}>
           <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEBX8XXUwGnpAAAAXnBbyvYS0yzr7kIMQXS-yyy1bbGUH1Pm4EmzevCX7xlNBU8K1cZ32j15RMxyCi1uyyYYSwuBd7V8TyFN8B-yEHWYK6Kwbuu53tjSGkcQqbpeg4KR2wMWt0=&originalReferer=https://ikeekedede.netlify.app/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fikechukwu-ekedede-20b12b209%2F"><button className={classes.github}>More on LinkedIn</button></a>
          </Grid>

          </Grid>
          
        </Grid>
      </Grid>
    </div>
  );
}
