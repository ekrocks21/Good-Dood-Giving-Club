import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rider from "../images/riderdood.png";
import Foil from "../images/foildood.png";
import VrDood from "../images/vrdood.png";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  justifyContent: 'center',
  width: 400,
  height: 400,

}));

export default function BasicGrid() {
  return (
      
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ height: "auto", backgroundColor: "#384885", padding: "40px", justifyContent: "space-between", }}>
        <h1> Team </h1>
        <Grid item xs={ 12 } sm={3} md= {4}>
          <Item elevation={0} style={{backgroundColor: "#384885", color: "#ffffff", padding:"15px",}}>
          <img src={Foil} alt="Logo"
            style={{
              maxWidth: "100%",
              height: "auto",
          }}
          />

          </Item>
        </Grid>
        <Grid item xs={ 12 } sm={3} md= {4}>
          <Item elevation={0} style={{backgroundColor: "#384885", color: "#ffffff", padding:"15px"}}>
          <img src={VrDood} alt="Logo"
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
