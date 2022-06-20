import React, { useEffect, useRef, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Container, Paper, TextField, Typography } from "@mui/material";
import { MdExpandMore } from "react-icons/md";

export type MinMaxNumberSettings = {
  title: string,
  min?: number,
  max?: number,
  onChanged: (min: number, max: number) => void,
};

export const MinMaxNumber = (props: MinMaxNumberSettings) => {
  const [minVal, setMinVal] = useState(props.min || 0);
  const [maxVal, setMaxVal] = useState(props.max || 1);

  useEffect(() => {
    props.onChanged(minVal, maxVal);
  }, [minVal, maxVal]);

  return (
    <Accordion disableGutters
               defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField margin="dense"
                     label="Min"
                     size="small"
                     variant="outlined"
                     type="number"
                     defaultValue={minVal}
                     onChange={e => setMinVal(parseFloat(e.target.value))} />

          <TextField margin="dense"
                     label="Max"
                     size="small"
                     variant="outlined"
                     type="number"
                     defaultValue={maxVal}
                     onChange={e => setMaxVal(parseFloat(e.target.value))} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
