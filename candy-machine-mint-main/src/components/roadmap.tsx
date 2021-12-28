import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SurferDood from "../images/91.png";
import CyberDood from "../images/2182.png";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));

function Chill() {
  // Import result is the URL of your image
  return <img src={CyberDood} alt="Dood Chills" />;
}

export default function BasicGrid() {
  return (
      <Grid container spacing={0} style={{ height: "auto", display: "flex", backgroundColor: "#212121", padding: "40px"}}>
        <Grid item xs={ 12 } md= {6} lg= {10}>
          <Item elevation={0} style={{backgroundColor: "#212121", color: "#ffffff", minHeight:"20px", padding: "40px"}}>
            <h1 style={{ display: "flex", marginBottom: "0px", justifyContent: "left", textAlign: "left", fontStyle:"italic", fontSize: "24px"}}>
              ROADMAP AND </h1>
              <h1 style={{ display: "flex", marginTop: "0px", justifyContent: "left", textAlign: "left", fontStyle:"italic", fontSize: "24px"}}>
              OPERATION GIVING DAY</h1>
            <h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

            We want to make a real impact on the physical world with our digital art. 
                


</ h2>    

<h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

The Original Good Dood Collection and Operation Giving Day are just the beginning of our journey.
    


</ h2>    

<a href=" https://trello.com/goodgoodgivingclub" target="blank" style={{ color: "#a8cfe5", display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px" }}>

View our roadmap 
    


</ a>   

          </Item>
        </Grid>


  
        
      </Grid>
  );
}
