import { TextField } from "@mui/material";
import React, { useState } from "react";

export type NumberInputSettings = {
  defaultValue?: number,
  onSetValue: (val: number) => void,
  label: string,
  maxValue?: number,
  minValue?: number,
}

export const NumberInput = (props: NumberInputSettings) => {
  const [value, setValue] = useState(props.defaultValue || 0);

  const onSetNumber = (val: number) => {
    if(props.minValue && val < props.minValue) {
      setValue(props.minValue);
      return;
    }

    if(props.maxValue && val > props.maxValue) {
      setValue(props.maxValue);
      return;
    }

    setValue(val);
    props.onSetValue(val);
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
