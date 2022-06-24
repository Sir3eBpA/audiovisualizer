import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import React, { ReactElement } from "react";
import { Container } from "./FieldAccordeonElements";

export type FieldAccordeonSettings = {
  title: string;
  rowGap?: number|string;
  children?: ReactElement | ReactElement[];
}

export const FieldAccordeon = (props: FieldAccordeonSettings) => {
  return (
    <Accordion disableGutters
               defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Container rowGap={props.rowGap}>
          {props.children}
        </Container>
      </AccordionDetails>
    </Accordion>
  );

};
