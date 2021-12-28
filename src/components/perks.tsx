import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SurferDood from "../images/91.png";
import CyberDood from "../images/2182.png";
import HappyDood from "../images/4615.png";
import SkaterDood from "../images/2523.png";
import CarDood from "../images/1935.png";
import SneakerDood from "../images/1614.png";

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
            <h1 style={{ display: "flex", justifyContent: "left", textAlign: "left", fontStyle:"italic", fontSize: "24px"}}>
              MEMBERSHIP PERKS </h1>
            <h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

            When you buy a Good Dood, you’re not simply buying an avatar or a provably-rare piece of art. 
            You are generating cash that directly funds Do Good Projects, like Operation Giving Day. Our roadmap includes 
            a democratized giving model providing the community with choice over which Do Good Projects to pursue.
            Your Good Dood can serve as your digital identity - proving your generosity, and open digital and physical 
            doors in the world of impact.
                


</ h2>    
          </Item>
        </Grid>

        <Grid item xs={ 12 } md= {3} lg= {3}>
          <Item elevation={0} style={{backgroundColor: "#212121", color: "#ffffff", minHeight:"250px", padding: "40px"}}>
       
          <h1 style={{ display: "flex", justifyContent: "left", textAlign: "left", fontStyle:"italic", fontSize: "24px"}}>
              EXCLUSIVE TITLE </h1>

          <img src={HappyDood} alt="Logo"
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              height: "auto",
          }}
          />

<h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

You are one of only 5001 maximum Good Doods in The Original GDGC.


</ h2>  
  
          </Item>
        </Grid>

        <Grid item xs={ 12 } md= {3} lg= {3}>
          <Item elevation={0} style={{backgroundColor: "#212121", color: "#ffffff", minHeight:"250px", padding: "40px"}}>
       
          <h1 style={{ display: "flex", justifyContent: "left", textAlign: "left", fontStyle:"italic", fontSize: "24px"}}>
              HONEST GIVING</h1>

          <img src={SneakerDood} alt="Logo"
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              height: "auto",
          }}
          />

<h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

50% of Mint and 50% of secondary market commissions fund Community Chosen Do Good Projects.


</ h2>  

  
          </Item>
        </Grid>

        <Grid item xs={ 12 } md= {3} lg= {3}>
          <Item elevation={0} style={{backgroundColor: "#212121", color: "#ffffff", minHeight:"250px", padding: "40px"}}>
       
          <h1 style={{ display: "flex", justifyContent: "left", textAlign: "left", fontStyle:"italic", fontSize: "24px"}}>
              COOL GIFTS </h1>

          <img src={CarDood} alt="Logo"
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              height: "auto",
          }}
          />

<h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

Quarterly gifts for Good Doods and 10,000+ gifts for St Jude patients.


</ h2>  

  
          </Item>
        </Grid>

        <Grid item xs={ 12 } md= {3} lg= {3}>
          <Item elevation={0} style={{backgroundColor: "#212121", color: "#ffffff", minHeight:"250px", padding: "40px"}}>
       
          <h1 style={{ display: "flex", justifyContent: "left", textAlign: "left", fontStyle:"italic", fontSize: "24px"}}>
              OWNERSHIP </h1>

          <img src={SkaterDood} alt="Logo"
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              height: "auto",
          }}
          />

<h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

You hold the Dood? You own the commercial usage rights.


</ h2>  

  
          </Item>
        </Grid>
  

  

        
      </Grid>
  );
}
