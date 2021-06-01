import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Bootstrap from "./images/bootstrap.jpg";
import Css from "./images/css.jpg";
import Materialui from "./images/materialui.png";
import express from "./images/express.png";
import Jquery from "./images/Jquery.png";
import mongodb from "./images/mongodb.jpg";
import postgre from "./images/postgre.png";
import react from "./images/react.png";
import ruby from "./images/Ruby.png";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div id='Tools' className={classes.root}>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={4} xs={4}>
              <div>
                <img
                  src={Css}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "100%",
                  }}
                ></img>
              </div>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={4}>
              <div>
                <img
                  src={Bootstrap}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "100%",
                  }}
                ></img>
              </div>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={4}>
              <div>
                <img
                  src={Materialui}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "100%",
                  }}
                ></img>
              </div>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={4}>
              <div>
                <img
                  src={express}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "100%",
                  }}
                ></img>
              </div>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={4}>
              <div>
                <img
                  src={Jquery}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "100%",
                  }}
                ></img>
              </div>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={4}>
              <div>
                <img
                  src={mongodb}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "100%",
                  }}
                ></img>
              </div>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={4}>
              <div>
                <img
                  src={postgre}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "100%",
                  }}
                ></img>
              </div>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={4}>
              <div>
                <img
                  src={react}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "100%",
                  }}
                ></img>
              </div>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={4}>
              <div>
                <img
                  src={ruby}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "100%",
                  }}
                ></img>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
