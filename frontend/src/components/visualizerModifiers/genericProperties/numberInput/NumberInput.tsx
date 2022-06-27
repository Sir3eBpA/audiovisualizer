import { TextField } from "@mui/material";
import React, { useState } from "react";
import { minmaxReduxPixelShader } from "@babylonjs/core/Shaders/minmaxRedux.fragment";

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
               defaultValue={value || 100}
               onChange={e => props.onSetValue(parseFloat(e.target.value))} />
  );
}
