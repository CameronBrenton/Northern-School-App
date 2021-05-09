import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

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

export default function Information(){
    const classes = useStyles();
    return(
        <main>
            <h1 class="header">Aditional Information</h1>

          <Card className={classes.root}>
              <CardContent>
                  <h2>
                    Covid-19 Update  
                  </h2>
                  <p id="typo1">
                      The College is now open on a limited basis and is following all protocols for preventing the spread of Covid-19. 
                      Masks are required, sign-in and sign-out processes are in place, and other hygiene protocols, 
                      including handwashing and not touching one’s face, apply. All students and staff are encouraged to remain home when at all possible. 
                      For more information, visit: <a href="http://www.northernc.on.ca/covid-19-coronavirus/"> COVID-19 Updates </a> 
                      and <a href="http://www.northernc.on.ca/message-international/" >Information for International Students</a>
                  </p>
              </CardContent>
          </Card>

          <Card className={classes.root}>
              <CardContent>
                  <h2>
                    Online Housing
                  </h2>
                  <p id="typo1">
                    Residence offers everything you need to make your college experience an enjoyable and safe time. 
                    For information, virtual tour or to submit an application, 
                    visit: <a href="https://northernresidence.ca/" >Haileybury Campus – Residence.</a>
                  </p>
                  <p id="typo1">
                    for information please contact:
                    <br/>705-980-1301 ext 7003 | info@northernresidence.ca
                  </p>

              </CardContent>
          </Card>

          <Card className={classes.root}>
              <CardContent>
                  <h2>
                    Second Career
                  </h2>
                  <p id="typo1">
                    Thinking of returning to school, but not sure how to pay for it? Second Career may be an option for you. 
                    Second Career is a Government of Ontario initiative to help people who are unemployed, or laid off, 
                    update their skills and training to get a better job. If you qualify, you could be eligible for up to 
                    $28,000. These Second Career funds would go towards your tuition, book fees and other costs related to 
                    your chosen program such as First Aid Training. The funds can also go toward your transportation and 
                    living expenses. Have a family to support? Additional funds are also available for child care, disability 
                    accommodations, living away from home, and in some cases, academic upgrading.
                  </p>
                  <p id="typo1">
                    To find out more information about the Second Career program, you can visit the Ministry of Advanced Education and Skills Development website at 
                    <a href="https://www.ontario.ca/page/ministry-colleges-universities" > www.tcu.gov.on.ca.</a>
                  </p>
              </CardContent>
          </Card>
          
          <Card className={classes.root}>
              <CardContent>
                  <h2>
                    Program List
                  </h2>
                  <p id="typo1">
                      Curious what Northern College has to offer? For domestic students:
                      <a href="http://www.northernc.on.ca/a-z-program-list/"> Click here! </a> 
                      Are You an International Student?:
                      <a href="http://www.northernc.on.ca/international-programs/" > Please refer to Programs Available forInternational Students</a>
                  </p>
              </CardContent>
          </Card>
          
        
        </main>
    
    
        );
};