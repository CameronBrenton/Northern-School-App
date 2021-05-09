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

export default function International(){
    const classes = useStyles();
    return(
        <main>
            <h1 class="header">International</h1>

        
          <p class="info">
              Northern collage welcomes international students from all over the world, there is some entry requirements to get admission in northern collage. There are number of programs for students to make their future bright in any field.

              How To Apply:
          </p>
       

          <Card className={classes.root}>
              <CardContent>
                  <p id="typo1">1. Go to Ontario Colleges (OCAS) - International<a href="https://authenticate.ocas.ca/auth/Account/Login?ReturnUrl=%2Fauth%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dintl.applicant.implicit.prod%26redirect_uri%3Dhttps%253A%252F%252Finternational.ontariocolleges.ca%252Foidc%252Fauthorized.html%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520email%2520intl_api.applicant%26state%3D265f21209e854c77b33eb1325f824e3b%26nonce%3D5660855776f448bb98364b7180ace4dc%26ui_locales%3Den-CA%26acr_values%3Ddomain%253Ainternational.ontariocolleges.ca%2520redirectUri%253Ahttps%253A%252F%252Finternational.ontariocolleges.ca%252Fapplicant%253Freferring_college%253DNORT%2520timestamp%253A1619099538"> (Here)</a>. A non-refundable application fee of $100 will apply</p>


              </CardContent>

          </Card>
          <Card className={classes.root}>
              <CardContent>
                  <p id="typo1">2. Submit the following documents with your OCAS application:
- Official transcripts for any education completed (or in-progress) while in Canada.
- Submit an official copy of your valid passport and study permit.
- Proof of English Proficiency- IELTS (Academic) with an overall score of 6- with no individual band lower than a 6.0</p>


              </CardContent>



          </Card>

          <Card className={classes.root}>
              <CardContent>

                  <p id="typo1">Note: Documents submitted to OCAS for education completed outside of Canada must be notarized, and translated into English.</p>
              </CardContent>



          </Card>

          <p class="info">Want more information about international students and Northern College? <a href="https://www.northernc.on.ca/international/"> Press Here!</a></p>
            
        
        </main>
    
    
        );
   
   
    

};