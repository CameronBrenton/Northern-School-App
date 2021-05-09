import React from 'react';
import './App.css'; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const EventsCurrent = [{
  "EventTitle" : "Mental Health First Aid",
  "Date": "April 29, 2021 - April 30, 2021",
  "Time" : "8:30 a.m. - 4:00 p.m.",
  "Location" : "Northern College 4715 Highway 101 East, South Porcupine, ON"
}
];
const EventsUpcoming =[{
      "EventTitle" : "Introduction to Supervisory Management",
      "Date" : "May 6, 2021 - May 7, 2021",
      "Time" : "8:30 a.m - 4:00 p.m.",
      "Location" : "Northern College 4715 Highway 101 East, South Porcupine, ON"
  },{
      "EventTitle" : "Phlebotomy",
      "Date" : "May 8, 2021 - May 9, 2021",
      "Time" : "9:00 a.m. - 12:00 p.m.",
      "Location" : "Northern College 4715 Highway 101 East, South Porcupine, ON"
  },{
      "EventTitle" : "First Aid & CPR",
      "Date" : "May 8, 2021 - May 9, 2021",
      "Time" : "9:00 p.m. - 4:00 p.m.",
      "Location" : "Northern College 4715 Highway 101 East, South Porcupine, ON"
  }
];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginInline: "auto",
    margin: "10px"
  },
});



export default function Events(){
  const classes = useStyles();
  

  
    let cards = [];  
    for(let i = 0 ; i < EventsCurrent.length; i++){
      let event_object = EventsCurrent[i];
      cards.push(<Card className={classes.root}>
        

        <CardContent>
          <Typography id="typo1">
              {event_object.EventTitle}
          </Typography>
          <Typography id="typo1">
              {event_object.Date}
          </Typography>
          <Typography id="typo1">
              {event_object.Time}
          </Typography>
          <Typography id="typo1">
              {event_object.Location}
          </Typography>
        </CardContent>
      </Card>)
    }
    let cards2 = [];  
    for(let i = 0 ; i < EventsUpcoming.length; i++){
      let event_object2 = EventsUpcoming[i];
      cards2.push(<Card className={classes.root}>
        

        <CardContent>
          <Typography id="typo1">
              {event_object2.EventTitle}
          </Typography>
          <Typography id="typo1">
              {event_object2.Date}
          </Typography>
          <Typography id="typo1">
              {event_object2.Time}
          </Typography>
          <Typography id="typo1">
              {event_object2.Location}
          </Typography>
        </CardContent>
      </Card>)
    }
    return( 
      <main>
        <h1 class="header">Events</h1>
         <p class="titles">Current events</p>
        {cards}
        <p class="titles">Upcoming Events</p>
        {cards2}
        
        
      </main>
    );
 
}