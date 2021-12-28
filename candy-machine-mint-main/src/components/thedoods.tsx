import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChillImage from "../images/chilldood.svg";
import Portrait from "../images/portraitdood.png";
import Surfer from "../images/2016.png";
import Cyber from "../images/cyberdood.png";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  justifyContent: 'center',
  width: 400,
  height: 400,

}));

function Chill() {
  // Import result is the URL of your image
  return <img src={ChillImage} alt="Dood Chills" />;
}

export default function BasicGrid() {
  return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ height: "auto", backgroundColor: "#212121", padding: "40px", justifyContent: "space-between", }}>
        <Grid item xs={ 12 } sm={3} md= {4}>
          <Item elevation={0} style={{backgroundColor: "#212121", color: "#ffffff", padding:"15px",}}>
          <img src={Cyber} alt="Logo"
            style={{
              maxWidth: "100%",
              height: "auto",
          }}
          />

          </Item>
        </Grid>
        <Grid item xs={ 12 } sm={3} md= {4}>
          <Item elevation={0} style={{backgroundColor: "#212121", color: "#ffffff", padding:"15px"}}>
          <img src={Portrait} alt="Logo"
            style={{
              maxWidth: "100%",
              height: "auto",
          }}
          />

          </Item>
        </Grid>
        <Grid item xs={ 12 } sm={3} md= {4}>
          <Item elevation={0} style={{backgroundColor: "#212121", color: "#ffffff", padding:"15px"}}>
          <img src={Surfer} alt="Logo"
            style={{
              maxWidth: "100%",
              height: "auto",
          }}
          />

          </Item>
        </Grid>
      </Grid>
  );
}
