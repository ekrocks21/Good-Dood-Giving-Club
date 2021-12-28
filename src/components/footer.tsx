import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChillImage from "../images/chilldood.svg";
import Portrait from "../images/portraitdood.png";
import Surfer from "../images/2016.png";
import Cyber from "../images/cyberdood.png";
import LogoImage from "../images/Asset 6.svg";
import TwitterIcon from '@mui/icons-material/Twitter';


const Item = styled(Paper)(({ theme }) => ({
  height: 150,
  justifyContent: "center",
  padding: "10%"

}));


export default function BasicGrid() {
  return (
      <Grid container spacing={{ xs: 2, md: 3 }}  style={{ height: "auto", backgroundColor: "#24305e",  }}>
        <Grid item xs={ 12 } sm={12} md= {4} lg= {4}>
          <Item elevation={0} style={{backgroundColor: "#24305e",  color: "#ffffff", maxHeight: "20px",}}>



          </Item>
        </Grid>
        <Grid item xs={ 12 } sm={12} md= {4} lg= {4}>
          <Item elevation={0} style={{backgroundColor: "#24305e", color: "#ffffff", }}>

          <img src={LogoImage} alt="Logo"
            style={{
            height: "90%",
            minWidth: "100%",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center"}}
          />


          </Item>
        </Grid>
        <Grid item xs={ 12 } sm={12} md= {4} lg= {4}>
          <Item elevation={0} style={{backgroundColor: "#24305e", color: "#ffffff",  textAlign: "right", marginTop: "20px"  }}>
            <a href="https://twitter.com/gooddoodNFT" target="blank" style={{color: "#ffffff" }}><TwitterIcon ></TwitterIcon></a>
            <br></br>
          <a >© 2021 Good Dood LLC</a>
          <br></br>
            <a href="www.google.com" style={{color: "#a8cfe5", }}>GDGC Terms and Conditions</a>
            <br></br>



          </Item>
        </Grid>
      </Grid>
  );
}



