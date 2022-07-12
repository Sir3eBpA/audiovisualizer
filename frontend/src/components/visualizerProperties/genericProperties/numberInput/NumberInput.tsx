import { TextField } from "@mui/material";
import React, { useState } from "react";

export type NumberInputSettings = {
  defaultValue?: number,
  onSetValue: (val: number) => void,
  label: string,
  maxValue?: number,
  minValue?: number,
  integersOnly?: boolean
}

export const NumberInput = (props: NumberInputSettings) => {
  const [value, setValue] = useState(props.defaultValue || 0);

  const onSetNumber = (val: number) => {
    let finalVal = val;
    if(props.integersOnly)
      finalVal = Math.round(finalVal);

    if(props.minValue && finalVal < props.minValue) {
      setValue(props.minValue);
      return;
    }

    if(props.maxValue && finalVal > props.maxValue) {
      setValue(props.maxValue);
      return;
    }

    setValue(finalVal);
    props.onSetValue(finalVal);
  }

  return (
    <TextField margin="dense"
               label={props.label}
               size="small"
               variant="outlined"
               type="number"
               value={value || props.minValue}
               onChange={e => onSetNumber(parseFloat(e.target.value))} />
  );
}
