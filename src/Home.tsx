import Faq from "./components/faq";
import Doods from "./components/doods";
import TheDoods from "./components/thedoods"
import TheDoods2 from "./components/doodscopy"
import Perks from "./components/perks"
import Drawer from "./components/drawer"
import Team from "./components/teams"
import Roadmap from "./components/roadmap"
import Roadmap2 from "./components/roadmap2"
import Footer from "./components/footer"

import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Container, Accordion, AccordionSummary, AccordionDetails, Button, CircularProgress, Snackbar, Grid, Paper, Box,BoxProps, Card, Typography, CardMedia, CardContent, CardActions, } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from "@material-ui/lab/Alert";
import HeaderImage from "./images/happydood.png";
import LogoImage from "./images/Asset3.svg";
import ChillImage from "./images/chilldood.svg";
import faq from "./components/faq"
import * as anchor from "@project-serum/anchor";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here


export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  function Header() {
    // Import result is the URL of your image
    return <img src={HeaderImage} alt="Good Doods Hero Image" />;
  }

  function Logo() {
    // Import result is the URL of your image
    return <img src={LogoImage} alt="Good Doods Logo" />;
  }


  function Chill() {
    // Import result is the URL of your image
    return <img src={ChillImage} alt="Dood Chills" />;
  }



  return (

    <main style={{ display: "flex", height: "100vh", backgroundColor: "#24305e",}}>
      
      <div style={{padding: "30", display: "flex", flex: 1, flexDirection: "column", }}>

       <div style={{display: "flex", justifyContent: "space-between", maxHeight: "120px", paddingLeft: '5%', paddingRight:'10%', paddingTop: '3%' }}>
          <img src={LogoImage} alt="Logo"
            style={{
            maxWidth: "20%",
            height: "auto",
            marginLeft: "20px",
            minWidth: "15%",
            display: "flex",
            justifyContent: "left"}}
          />
          {wallet && (<p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>)}
      
          <ConnectButton >{wallet ? "Connected" : "Connect Wallet" }</ConnectButton>
          

          

        
    </div> 

  


    <div style={{ flex: 1, display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column",}}>
      
     <Container style={{flex: 1, display: "flex",justifyContent: "center", alignItems: "center",flexDirection: "column", padding: "20px" }}>
      <img src={HeaderImage} alt="Header"
        style={{
        maxWidth: "40%",
        minWidth: "300px",
        height: "auto",
        }}
        
      />

<MintContainer style ={{backgroundColor: "#384885", position: "absolute"}}>
          <MintButton style ={{backgroundColor: "#ffffff", color: "#000000", width: "200px", justifyContent: "center", fontWeight: "bold"}} disabled={isSoldOut || isMinting || !isActive} onClick={onMint} variant="contained">
            {isSoldOut ? (
              "SOLD OUT"
            ) : isActive ? (
              isMinting ? (
                <CircularProgress />
              ) : (
                "Be a Good Dood"
              )
            ) : (
              <Countdown
                date={startDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            )}
          </MintButton>
      </MintContainer>

</Container>

      <div style={{
        padding: "30",
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "#384885",
       }}>   





      {wallet && <p>Supply: {itemsRedeemed}/{itemsAvailable}</p>}
        </div>
        </div>  

      <div style={{
        padding: "30",
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
       }}>
    </div>

    <div style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
       }}>

    <Doods/>
    <div><TheDoods2/></div>
    <div><Perks/></div>
    <div><Roadmap/></div>
    <div><Roadmap2/></div>


    </div>

    <div><TheDoods/></div>



    <div>
      <Team/>
    </div>

    <div>
      <Footer/>
    </div>



      <Snackbar open={alertState.open} autoHideDuration={6000} onClose={() => setAlertState({ ...alertState, open: false })}>
        <Alert onClose={() => setAlertState({ ...alertState, open: false })} severity={alertState.severity}>
          {alertState.message}
        </Alert>
      </Snackbar>

      </div>
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;

