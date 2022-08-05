import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import React, { ReactElement } from "react";
import { Container } from "./FieldAccordeonElements";

export type FieldAccordeonSettings = {
  title: string;
  rowGap?: number | string;
  children?: ReactElement | ReactElement[];
}

export const FieldAccordeon = (props: FieldAccordeonSettings) => {
  return (
    <Accordion disableGutters
               defaultExpanded={true}
               sx={{
                 margin: "5px",
                 borderRadius: "15px"
               }}>
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          backgroundColor: "#1c1c1c",
          borderStyle: "solid",
          borderColor: "#2c2c2c",
          borderRadius: "15px 15px 0 0",
          borderWidth: "2px 2px 0 2px"
        }}>
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#1c1c1c",
          borderStyle: "solid",
          borderColor: "#2c2c2c",
          borderRadius: "0 0 15px 15px",
          borderWidth: "0 2px 2px 2px"
        }}>
        <Container rowGap={props.rowGap}>
          {props.children}
        </Container>
      </AccordionDetails>
    </Accordion>
  );

};
