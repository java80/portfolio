import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aboutme from "./components/Aboutme/Aboutme";
//import "./App.css";
import Projects from "./components/Projects/Projects";
import RecentProject from "./components/RecentProject.jsx/RecentProject";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import { getNews } from "./api";
import Newsfeed from "./Newsfeed/Newsfeed";
import HomeIcon from '@material-ui/icons/Home';
import {
  Typography, AppBar, Card, CardActions, CardContent, CardMedia, Grid,
  CssBaseline, Toolbar, Container
} from '@material-ui/core';

import Button from '@material-ui/core/Button';
function App() {
  getNews();

  const headings = {
    language: "Languages",
    os: "OS",
    framework: "Frameworks",
    tools: "Tools/SDKs",
  };
  const listOfProjects = {
    title: "Project ",
    description: "Description",
    tools: "Tools",
    livesite: "LiveSite",
    github: "Github",
  };
  return (
    <div className="App">
     
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon />
          <Typography variant="h6">
           Home
          </Typography>
          
        </Toolbar>
        {/* <Header /> */}
      </AppBar>
      <main>
        <div>
        <Header/>
          <Container >
            <Typography variant ="h2" align ="center" color = "textPrimary" gutterBottom >
               <br></br>
            </Typography>
            <Grid container spacing={2} align = "center" >
              <Grid item xs = {12} sm ={6} padding ={20} >
              <Aboutme headings={headings}  />
              </Grid>
              
              <Grid item xs={12} sm={6} >
              
             <Contact/>
              </Grid>
              <Grid item xs = {12} sm ={6} >
              <RecentProject/>
              </Grid>
              <Grid item xs = {12} sm ={6} >
                <Education />
                <br></br>
                <br></br>
                <Contact/>
              </Grid>
              <Grid item xs = {12} sm ={6} >
              <Projects listOfProjects={listOfProjects}/>
              </Grid>
              <Grid item xs = {12} sm ={6}  >
              <Skills/>
              </Grid>
            </Grid>
           
          </Container>

        </div>

       </main>











      {/* <div className="main-container">
        <div id="grid">
          <div>
            <Aboutme headings={headings} />
          </div>
          <div>
            <Contact />
          </div>
          <div>
            <RecentProject />
          </div>

          <div>
            <Education />
            <Newsfeed />
          </div>
          <div>
            <Projects listOfProjects={listOfProjects} />
          </div>
          <div>
            <Skills />
          </div>
        </div>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
