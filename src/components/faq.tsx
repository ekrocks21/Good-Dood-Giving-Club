import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function SimpleAccordion() {
  return (
    <div style={{ padding: "40px", backgroundColor: "#212121" }}>
      <h1> FAQs</h1>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style= {{color: "white"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style= {{ backgroundColor: "#212121", color: "white" }}
          
        >
          <Typography fontSize= "36px" fontWeight="bold" paddingTop="30px" paddingBottom="30px"  >What is the Good Doods Club?</Typography>
        </AccordionSummary>
        <AccordionDetails style= {{ backgroundColor: "#212121", color: "white" }}>
          <Typography fontSize= "22px" paddingBottom="20px" >
          The Good Doods Club is for Good Doods who want to Do Good. We trade art, earn SOL, 
          and donate capital to execute Do Good Projects. Each quarter the highest earning Dood can 
          choose a 501c Non-Profit Organization as the Club’s Beneficiary. Club Organizers will plan, 
          produce, and promote the Do Good Project to Do Good. 
          The initial Beneficiary will be able to direct 50,000 SOL to causes they believe in.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style= {{color: "white"}}  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style= {{ backgroundColor: "#212121", color: "white" }}
        >
          <Typography fontSize= "36px" fontWeight="bold" paddingTop="30px" paddingBottom="30px" >What are the Club Benefits?</Typography>
        </AccordionSummary>
        <AccordionDetails style= {{ backgroundColor: "#212121", color: "white" }}>
        <Typography fontSize= "22px" paddingBottom="20px" >
          First and foremost the Good Doods Club aims to Do Good buy raising and allocating capital via art transactions. We believe raising awareness is a necessary and noble first step.

The most important benefit is being part of a community that will allocate capital towards noble causes.

Each quarter one Good Dood will be selected as the Project Proposer.  The Project Proposer can work with Project Organizers to present three opportunities to The Club.

Via DAO the Good Doods will vote on the Proposed Projects and one Project will be selected as the Good Doods Project for execution.

The Good Doods Club Members deserve to be rewarded for their faith in our mission and our launch mint will reward many of our members handsomely. 

If you mint a Good Dood that includes Traits such as a Rolex Datejust or Super73 Electric Bike you will receive that item. 

Each quarter the Project Organizers will randomly select 50 Doods to receive the item featured in the Dood they are holding.

Please see The Good Doods Club Membership Rewards Terms and Conditions for further details on Membership Rewards.

          </Typography>
        </AccordionDetails>
      </Accordion>
   


      
    </div>
  );
}