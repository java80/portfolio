import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles.js";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


export default function ButtonAppBar() {
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
  const classes = useStyles();


  const [state, setState] = React.useState({

    left: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      
    >
      <List >
        
         <a href='#Specialization' style={{color:"black",  textDecoration:"none" }}>  <ListItemText   primary='Solution Tools' /></a>
         <Divider/>
          <a href='#RecentProjects' style={{color:"black",  textDecoration:"none" }}> <ListItemText   primary='Recent Projects' /></a>
          
          <Divider/><a href='#Studies' style={{color:"black", textDecoration:"none" }}> <ListItemText    primary='Education' /></a>
          
          <Divider/> <a href='#Tools' style={{color:"black",  textDecoration:"none" }}><ListItemText    primary='Tools' /></a>
            
           
         
      </List> 
    </div>
  );

  return (
    <div>
      <AppBar style={{color:"White",backgroundColor:"#212529"}} position="fixed" className={classes.header}>
        <Toolbar>


    <div>
     
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>  
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon style={{color:"White"}}/>
          </IconButton>
          </Button>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
      
    </div>


          <Typography variant="h6" className={classes.title}>
            <div className={classes.headerDiv}>
              <span>Logo</span>
              <b style={{ color: "#f9004D" }}>Contact</b><a href="mailto:ikeekedede@gmail.com" style={{ paddingLeft: "10px", color: "#f9004D" }}>@ikeekedede.com</a>
              
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
