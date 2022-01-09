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
      <Grid container spacing={2} style={{ height: "auto", display: "flex", backgroundColor: "#384885", padding: "40px"}}>
        <Grid item xs={ 12 } md= {6}>
          <Item elevation={0} style={{backgroundColor: "#24305e", color: "#ffffff", minHeight:"250px", padding: "40px"}}>
            <h1 style={{ display: "flex", justifyContent: "left", textAlign: "left", fontStyle:"italic", fontSize: "24px"}}>
              OUR GIVING MODEL </h1>
            <h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

            Each Good Dood is unique and programmatically generated with over 
            10,000 gifts, including Raybans, Melin Hats, Super73 E-Bikes,
            Cyberquads, Legos, Watches, Inspiration4 Space Puppies, and more. All Good Doods are givers, but some give more than others.
                
                


              </ h2>

              <h2 style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>

              Good Doods are stored as SPL tokens on the Solana blockchain (low gas) and hosted on 
              IPFS. Purchasing a Good Dood costs 25 SOL.


</ h2>    

<a href=" https://trello.com/goodgoodgivingclub" target="blank" style={{ color: "#a8cfe5", display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px" }}>

Read our whitepaper
    


</ a>    
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg= {3}>
          <Item elevation={0}  style={{backgroundColor: "#384885"}}>

          <img src={CyberDood} alt="Logo"
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              height: "auto",
          }}
          />

          </Item>
        </Grid>

        <Grid item xs={12} md={6} lg= {3}>
          <Item elevation={0}  style={{backgroundColor: "#384885"}}>

          <img src={SurferDood} alt="Logo"
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              height: "auto",
          }}
          />

          </Item>
        </Grid>

        
      </Grid>
  );
}
