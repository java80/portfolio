import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles.js";
import ProfileImage from "./linkedin.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Grid container spacing={4} className={classes.mainContainer}>
        <Grid item xs={12} style={{ padding: "0px" }}>
          <Grid container className={classes.introContainer}>
            <Grid item sm={12} md={6} lg={4}>
              <div>
                <img src={ProfileImage} alt="" className={classes.image} />
              </div>
            </Grid>
            <Grid item sm={12} md={6} lg={8} className={classes.intro}>
              <div>
                <span className={classes.welcomeText}></span>
                <h1 className={classes.name}>Hi, I'm Ikechukwu Ekedede</h1>

                <h1 className={classes.profession}>Software Engineer</h1>
                <h2 className={classes.location}>New York, New York</h2>
                <div> <a href="https://github.com/java80" target="_blank" rel="noopener noreferrer" >
                  {" "}
                  <GitHubIcon
                    style={{ fontSize: "-webkit-xxx-large", color: "black" }}
                  />
                </a> <a
                  href="https://www.linkedin.com/in/ikechukwu-ekedede-20b12b209/"
                    target="_blank"
                    rel="noopener noreferrer" 
                >
                
                  <LinkedInIcon
                    style={{ fontSize: "-webkit-xxx-large", color: "black" }}
                  />
                </a></div>
              </div>
            </Grid>
          

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
