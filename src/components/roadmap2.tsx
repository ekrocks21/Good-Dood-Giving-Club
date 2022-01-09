import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CyberDood from "../images/2182.png";

function createData(
  id: number,
  description: string,
  status: string,


) {
  return { id, description, status };
}


const rows = [
  createData( 1, 'Develop Giving Model and Identify Operation Giving Day Beneficiary', 'Complete' ),
  createData( 2, 'Create Initial Art Concept #00 - The Original Good Dood Collection ', 'Complete' ),
  createData( 3, 'Learn how to generate 5001 NFTs', 'Complete' ),
  createData( 4, 'Develop Art Engine', 'Complete' ),
  createData( 5, 'Learn how to mint to Solana', 'Complete' ),
  createData( 6, 'Develop Minting Platform', 'Complete' ),
  createData( 7, 'Build Landing Page Website', 'Complete' ),
  createData( 8, 'Connect with Jared Isaacman - Commander Inspiration4 ', 'Need Support' ),
  createData( 9, 'Connect with St Jude to ensure this is cool with them / incorporate feedback', 'Need Support' ),
  createData( 10, 'Update Collection based on Feedback', 'Need Support' ),
  createData( 11, 'Prepare for Launch', 'Need Support' ),
  createData( 12, 'Ask Elon to Tweet ', 'Need Support' ),
  createData( 13, 'Launch OG Collection ', 'In Progress' ),
  createData( 14, 'Sell out Mint ', 'In Progress' ),
  createData( 15, 'Procure Products from Brands ', 'Dependent on #7' ),
  createData( 16, 'Plan and Execute Operation Giving Day ', 'In Progress' ),
  createData( 17, 'Transfer Research Grant to St Jude ', 'Dependent on #7' ),
  createData( 18, 'Form Partnership with Brands ', 'Need Support' ),
  createData( 19, 'Determine Democratized Giving Model', 'Open for Feedback' ),
  createData( 20, 'Create Collection #01 Art Concept', 'Not Started' ),
  createData( 21, 'Partner with an actual NFT Designer ', 'Search Started' ),
  createData( 22, 'Design and Launch Good Dood Collection #01 - TBD ', 'Need Support' ),
  createData( 23, '? ', '?' ),
];

export default function BasicTable() {
  return (

    <TableContainer component={Paper} style={{ backgroundColor: "#212121",  marginBottom: "40px" }}>
      <Table sx={{ maxWidth: 400 }} style={{ backgroundColor: "#212121", height: "auto", marginLeft: "80px",}} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell style={{ color: "#ffffff"}} align="left">ID</TableCell>
            <TableCell style={{ color: "#ffffff"}} >Description</TableCell>
            <TableCell style={{ color: "#ffffff"}} >Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow style={{ color: "#ffffff"}}
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{ color: "#ffffff",}} component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell style={{ color: "#ffffff", }} >{row.description}</TableCell>
              <TableCell style={{ color: "#ffffff", }} >{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


  );
}