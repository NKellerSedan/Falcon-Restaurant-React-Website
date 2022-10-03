import React from 'react';
import { useNavigate } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// npm install @mui/material @mui/styled-engine-sc styled-components
// npm install @mui/icons-material

type Props = {};

const FAQ = (props: Props) => {
  return (
    <><div>
      <h1 id="topics-hk">
        Frequently Asked Questions
      </h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Are you open on holidays?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are open for service during any holiday except New Years.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you take reservations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We do take reservations and 15 minutes wait time until you arrive otherwise we have to forfeit your seat to other customers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can we bring our own cake / wine for birthdays or celebrations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you may bring it however we do have additional fees for service.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div><p>Please feel free to send an email if you have any further questions</p>
      <ul id='dashboard'>
        <li id='sections'>
          <a id='email' href="mailto:kalafatzaferhakan@gmail.com">Send Email</a>
        </li>

      </ul>
    </>

  );
};

export default FAQ;
