import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SurferDood from "../images/1976.png";
import CyberDood from "../images/308.png";
import SkaterDood from "../images/2549.png";


const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));

function Chill() {
  // Import result is the URL of your image
  return <img src={CyberDood} alt="Dood Chills" />;
}

export default function BasicGrid() {
  return (
      <Grid container spacing={2} style={{ height: "auto", display: "flex", backgroundColor: "#212121", padding: "40px"}}>
        <Grid item xs={ 12 } md= {6}>
          <Item elevation={0} style={{backgroundColor: "#212121", color: "#ffffff", minHeight:"250px", padding: "40px"}}>
            <h1 style={{ display: "flex", justifyContent: "left", textAlign: "left", fontStyle:"italic", fontSize: "24px"}}>
              OUR TEAM </h1>
            <h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

            GDGC was created by a husband, wife, and puppy combo who were inspired by Inspiration4. We set out to apply our talents,
            learn new skills, and try to make a difference by building something kinda crazy that actually would work.
                
                


              </ h2>

              <h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

              UNCLE ARC: TYPICAL WILD IDEA DOOD. PUNCHES ABOVE BELT.
              </ h2>    

              <h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

             LIBIT: GREAT AT DOING GOOD AT SCALE. BEAT CANCER AT 19. 
            </ h2>      

            <h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

            DAY-Z: LOOKS GOOD ON CAMERA. 
</ h2>    

          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg= {2}>
          <Item elevation={0}  style={{backgroundColor: "#212121"}}>

          <img src={SkaterDood} alt="Logo"
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              height: "auto",
              marginTop: "50px"
          }}
          />

          </Item>
        </Grid>

        <Grid item xs={12} md={6} lg= {2}>
          <Item elevation={0}  style={{backgroundColor: "#212121"}}>

          <img src={CyberDood} alt="Logo"
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              height: "auto",
              marginTop: "50px"
          }}
          />

          </Item>
        </Grid>


        <Grid item xs={12} md={6} lg= {2}>
          <Item elevation={0}  style={{backgroundColor: "#212121"}}>

          <img src={SurferDood} alt="Logo"
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              height: "auto",
              marginTop: "50px"
          }}
          />

          </Item>
        </Grid>

        
      </Grid>
  );
}
