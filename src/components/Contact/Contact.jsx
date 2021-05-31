
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from '@material-ui/icons/Person';
//import "./Contact.css";
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
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  InboxIcon,
} from "@material-ui/core";
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { Height } from '@material-ui/icons';

function Contact(props) {
  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
    },
    media: {
      height: 200,
    },
  });
  const classes = useStyles();
  return (
    <div>
  <Card>
        <CardContent>
              
        <ListItem >
        <img className="location-image" src={process.env.PUBLIC_URL + '/img/location.png'} alt="location logo" width = "75px" />
        <ListItemText>
        <Typography  >
        
        <CardContent>
            <Typography variant = "h6">New York, New York</Typography>
        </CardContent>
       
            </Typography>
        </ListItemText>
          </ListItem>
          <ListItem >
              <img className="email-image" src={process.env.PUBLIC_URL + '/img/email.png'} alt="Email logo" width = "75px" />
        <ListItemText>
        <Typography  >
        <CardActionArea href="mailto: ikeekedede@gmail.com">
        <CardContent>
             <Typography color ="primary" variant = "h6">ikeekedede@gmail.com</Typography>
        </CardContent>
       </CardActionArea>
            </Typography>
        </ListItemText>
    
          </ListItem>
          <ListItem >
          <img className="download-resume-image" src={process.env.PUBLIC_URL + '/img/resume.png'} alt="resume download" width ="75px" />
        <ListItemText>
        <Typography  >
        <CardActionArea href="https://docs.google.com/document/d/1voxeid5y03Vp2qtAIhJvU1W81BbXgPCgaW_4Y9-qSbI/edit?usp=sharing">
        <CardContent>
             <Typography color ="primary" variant = "h6">Download Resume</Typography>
        </CardContent>
       </CardActionArea>
            </Typography>
        </ListItemText>
    
          </ListItem>
          
          <ListItem >
          <img className="download-resume-image" src={process.env.PUBLIC_URL + '/img/resume.png'} alt="resume download" width ="75px" />
        <ListItemText>
        <Typography  >
        <CardActionArea href="https://docs.google.com/forms/d/e/1FAIpQLSdZhqsGB9sshTgh72kwhKUpZQALsyDhKqFzrZzxzdAdE3JKlQ/viewform?usp=sf_link">
        <CardContent>
             <Typography color ="primary" variant = "h6">Contact Us</Typography>
        </CardContent>
       </CardActionArea>
            </Typography>
        </ListItemText>
    
      </ListItem>
      
          </CardContent>
        </Card>




        {/* <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardMedia
                className={classes.media} 
              >
                <img className="location-image" src={process.env.PUBLIC_URL + '/img/location.png'} alt="location logo" width="75px" />
                <Typography  variant = "h5"  color ="primary"className={classes.content}>
            New York,New York
            </Typography>
            </CardMedia>
              </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardMedia
                className={classes.media}
              >
                <img className="location-image" src={process.env.PUBLIC_URL + '/img/location.png'} alt="location logo" width="75px" />
                <Typography  variant = "h5"  color ="primary"className={classes.content}>
            New York,New York
            </Typography>
            </CardMedia>
              </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardMedia
                className={classes.media}
              >
                <img className="location-image" src={process.env.PUBLIC_URL + '/img/location.png'} alt="location logo" width="75px" />
                <Typography  variant = "h5"  color ="primary"className={classes.content}>
            New York,New York
            </Typography>
            </CardMedia>
              </Card>
            </Grid>
         
        </Grid> */}
      
      
    </div>
  );
}

export default Contact;

// const styles = theme => ({
//   card: {
//     width:500
    
    
//   },
//   contact: {
   
//   },
//   content: {
//    // marginTop: theme.spacing(1)
   
//   }
// });

// const Contact = withStyles(styles)(({ classes }) => (
//   <Card className={classes.card} >
    
//     <CardContent >
//       <list>
//       <ListItem >
//       <img className="location-image" src={process.env.PUBLIC_URL + '/img/location.png'} alt="location logo" width = "75px" />
//         <ListItemText>
//         <Typography  variant = "h5"  color ="primary"className={classes.content}>
//             New York,New York
//             </Typography>
//         </ListItemText>
    
//       </ListItem>
//       <ListItem >
//         <img className="email-image" src={process.env.PUBLIC_URL + '/img/email.png'} alt="Email logo" width = "75px" />
//         <ListItemText>
//         <Typography  color ="primary" className={classes.content}>
//         <CardActionArea href="mailto: ikeekedede@gmail.com">
//         <CardContent>
//             <Typography color ="primary" variant = "h6">ikeekedede@gmail.com</Typography>
//         </CardContent>
//        </CardActionArea>
//             </Typography>
//         </ListItemText>
    
//       </ListItem>
//       <ListItem >
//       <img className="download-resume-image" src={process.env.PUBLIC_URL + '/img/resume.png'} alt="resume download" width ="75px" />
//       <ListItemText>
//         <Typography  color ="primary" className={classes.content}>
//         <CardActionArea href="https://docs.google.com/document/d/1voxeid5y03Vp2qtAIhJvU1W81BbXgPCgaW_4Y9-qSbI/edit?usp=sharing">
//         <CardContent>
//             <Typography  color ="primary" variant = "h6">Resume</Typography>
//         </CardContent>
//        </CardActionArea>
//             </Typography>
//         </ListItemText>
    
//       </ListItem>
//       <ListItem >
//       <img className="download-resume-image" src={process.env.PUBLIC_URL + '/img/contact.png'} alt="resume download" width ="75"/>
//         <ListItemText>
//         <Typography color ="primary" className={classes.content}>
//         <CardActionArea href="https://google.com">
//         <CardContent>
//             <Typography variant = "h6">Contact Us</Typography>
//         </CardContent>
//        </CardActionArea>
//             </Typography>
//         </ListItemText>
    
//       </ListItem>
// {/* <CardActionArea href="https://google.com">
//         <CardContent>
//             <Typography>Click me!</Typography>
//         </CardContent>
//     </CardActionArea> */}
//         </list>
//       </CardContent>
    
//   </Card>
// ));

// export default Contact;

// class Contact extends Component {
//   render() {
      
//     return (
//       <Card>
//         <div >
//           <div className = "contact-image">
//           <img className="location-image" src={process.env.PUBLIC_URL + '/img/location.png'} alt="location logo" width = "100px" />
//           </div>
//           <div>
//           <h2>  New York, New York</h2>
//           </div>
//           <div>
//           <img className="email-image" src={process.env.PUBLIC_URL + '/img/email.png'} alt="Email logo" width = "100px" />
//           </div>
//           <div>
//           <p>  <a href = "mailto: ikeekedede@gmail.com">ikeekedede@gmail.com</a></p>
//           </div>
//           <div>
//           <img className="download-resume-image" src={process.env.PUBLIC_URL + '/img/resume.png'} alt="resume download" />
//           </div>
//           <div>
//           <p>  <a href = "https://docs.google.com/document/d/1voxeid5y03Vp2qtAIhJvU1W81BbXgPCgaW_4Y9-qSbI/edit?usp=sharing">Download Resume</a></p>
//           </div>
//           <div>
//           <img className="download-resume-image" src={process.env.PUBLIC_URL + '/img/contact.png'} alt="resume download" />
//           </div>
//           <div>
//           <p>  <a href = "mailto: ikeekedede@gmail.com">Contact</a></p>
//           </div>
//         </div>
//         </Card>
        
//     );

//     } 
  
//  };
 
//  export default Contact;
