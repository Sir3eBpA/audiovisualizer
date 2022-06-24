import { Accordion, AccordionDetails, AccordionSummary, Paper, TextField, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { MdExpandMore } from "react-icons/md";
import { FieldAccordeon } from "../fieldAccordeon/FieldAccordeon";

export type DropdownPropertySettings = {
  value: any,
  setValue: (arg: any) => void,
  children: ReactElement | ReactElement[],
  folded?: boolean,
  title?: string,
}

export const DropdownProperty = (props: DropdownPropertySettings) => {
  const element = (
    <Paper>
      <TextField value={props.value}
                 style={{ width: "90%", margin: "0.5em" }}
                 label={props.title}
                 size="small"
                 variant="outlined"
                 select
                 onChange={e => props.setValue(e.target.value)}>
        {props.children}
      </TextField>
    </Paper>
  );

  if (!props.folded) {
    return element;
  }

  return (
    <FieldAccordeon title={props.title || "%NO_NAME%"}>
      {element}
    </FieldAccordeon>
  );
};
