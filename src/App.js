import React from 'react';
import './App.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FormControlLabel from '@material-ui/core/FormControlLabel'; 
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import ContactSupportIcon from '@material-ui/icons/ContactSupportOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import EventIcon from '@material-ui/icons/EventOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideoOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import Events from "./Events";
import Enquires from "./Enquires";
import Information from "./Information";
import { ListItemText } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import CampusTour from './CampusTour';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import International from "./International";
import {Switch as Switch2} from '@material-ui/core/';
  
function App() {

  const dark_theme = createMuiTheme({
    palette: {  
      primary: {
        main: '#e78f23',
      },
      secondary: {
        main: '#463d3d',
      },
      background: {
        default: "#222222",
        drawer:"#e78f23",
      },
      text: {
        primary: "#ffffff",
      },
    }
  })

  const light_theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4892BC',
          
      },
      secondary: {
        main: '#EEF3FF',
      },
      background: {
        default: "#e4f0e2",
        drawer:"#4892BC"
      },
      text: {
        primary: "#000000",
      },
    }
  });


  const [light, setLight] = useState(true);
  
  const [checked, setChecked] = useState(true);

  
  const useStyles = makeStyles((theme) =>{  return ({
    switchTrack: {
      backgroundColor: "#000"
    },
    switchBase: {
      color: "#000",
      "&.Mui-checked": {
        color: "white"
      },
      "&.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "white"
      },
      
    }
  })});

  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = ()=>{
    setDrawerOpen(true)
  }

  const CloseDrawer =()=>{
    setDrawerOpen(false)
  }

  const selectedTheme = light ? light_theme : dark_theme

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
        <Router>
          <main>
            <Drawer id="Drawer" PaperProps={{style:{background: selectedTheme.palette.background.drawer}}} open={drawerOpen} onClose={CloseDrawer}>
              
              <List id="ListID">
              
                <Button onClick={() =>{ setLight(prev => !prev); setChecked(prev => !prev) }}>
                  <ListItem button color="primary" class="themeButton">
                    <FormControlLabel
                      id="formControlLabel"
                      control = {
                        <Switch2
                          color="default"
                          position="start"
                          classes={{
                            track: classes.switchTrack,
                            switchBase: classes.switchBase,
                          }}
                          size="medium"
                          labelPlacement="top"
                          checked={checked}
                        />
                      }
                    />Dark/Light mode
                  </ListItem>
                </Button>
      
                <Button startIcon={<EventIcon />} onClick={CloseDrawer}>
                  <ListItem button class="buttons">
                    <Link to="/Events" style={{color: 'inherit', textDecoration: 'none' }}>
                      <ListItemText>Events</ListItemText>
                    </Link>
                  </ListItem>
                </Button>


            
            
                <Button startIcon={<OndemandVideoIcon />}onClick={CloseDrawer}>
                  <ListItem button class="buttons">
                    <Link to="/CampusTour" style={{color: 'inherit', textDecoration: 'none' }}>
                      <ListItemText>Campus Tour</ListItemText>
                    </Link>
                  </ListItem>
                </Button>

                <Button startIcon={<InfoIcon />}onClick={CloseDrawer}>
                  <ListItem button class="buttons">
                    <Link to="./Information" style={{color: 'inherit', textDecoration: 'none' }}>
                      <ListItemText>Information</ListItemText>
                    </Link>
                  </ListItem>
                </Button> 

                <Button startIcon={<LanguageOutlinedIcon />}onClick={CloseDrawer}>
                  <ListItem button class="buttons">
                    <Link to="./International" style={{color: 'inherit', textDecoration: 'none' }}>
                      <ListItemText>International</ListItemText>
                    </Link>
                  </ListItem>
                </Button>

                <Button startIcon={<ContactSupportIcon />}onClick={CloseDrawer}>
                  <ListItem button class="buttons">
                    <Link to="/Enquires" style={{font: "bold", color: 'inherit', textDecoration: 'none' }}>
                      <ListItemText>Enquires</ListItemText>
                    </Link>
                  </ListItem>
                </Button>

            

                <img id="Northern" alt="NorthernLogo"  src="https://learnonline.ecampusontario.ca/App_Content/Institution/398/Logos/b85b23f0-93ef-4f6e-872c-236c8dd4e6b7.png" width="125px" height="auto"></img>
            




            





              </List>

          

            </Drawer>
        
        
        
            <AppBar id="appBar" color="primary">
              <Toolbar id="ToolB">
                <IconButton id="But1" onClick={openDrawer}> <MenuIcon /> </IconButton>
                <Typography id="Typo"> </Typography>
                <img id="Northern" alt="NorthernLogo"  src="https://learnonline.ecampusontario.ca/App_Content/Institution/398/Logos/b85b23f0-93ef-4f6e-872c-236c8dd4e6b7.png" width="125px" height="auto"></img>
                <IconButton> <AccountCircleIcon /> </IconButton>
              </Toolbar>
            </AppBar>
        
        
            <Switch>
              <Route path="/Events" component={Events}></Route>
              <Route path="/Enquires" component={Enquires}></Route>
              <Route path="/Information" component={Information}></Route>
              <Route path="/CampusTour" component={CampusTour}></Route>
              <Route path="/International" component={International}></Route>
            </Switch>





            
          </main>
      
      

        
        </Router>
    </ThemeProvider>
  );
}



export default App;
