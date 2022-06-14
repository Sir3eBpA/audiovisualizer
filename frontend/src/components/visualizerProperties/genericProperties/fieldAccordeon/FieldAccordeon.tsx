import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import React, { ReactElement } from "react";

export type FieldAccordeonSettings = {
  title: string;
  children?: ReactElement;
}

export const FieldAccordeon = (props: FieldAccordeonSettings) => {
  return (
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {props.children}
      </AccordionDetails>
    </Accordion>
  );

};
