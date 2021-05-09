import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginInline: "auto",
    margin: "10px"
  },
  media: {
    height: 140,
  },
});


export default function CampusTour() {
  const classes = useStyles();

  return (
    <div>
        <h1 class="header">Campus Tour</h1>
        <div id="tourLink">
          <p>Looking for a Campus Tour? <a href="http://www.northernc.on.ca/book-tours/">Press Here!</a></p>
        </div>
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="http://www.northernc.on.ca/wp-content/uploads/2015/03/Timmins_1.jpg"
        title="Room One"
      />
      <CardContent id="typo1">
        Exterior of the Northern College in Timmins
      </CardContent>
    </Card>
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="http://www.northernc.on.ca/wp-content/uploads/2015/03/timmins13.jpg"
        title="Room Two"
      />
      <CardContent id="typo1">
        Interior of the Northern college in Timmins!
      </CardContent>
    </Card>
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="http://www.northernc.on.ca/wp-content/uploads/2015/03/Timmins_5.jpg"
        title="Room Two"
      />
      <CardContent id="typo1">
        More Interior of the Northern college in Timmins!
      </CardContent>
    </Card>
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="http://www.northernc.on.ca/wp-content/uploads/2015/03/Timmins_2.jpg"
        title="Room Two"
      />
      <CardContent id="typo1">
        More Exterior of the Northern college in Timmins!
      </CardContent>
    </Card>
    </div>
  );
}