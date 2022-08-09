import { TextField } from "@mui/material";
import React, { useState } from "react";

export type TextInputSettings = {
  defaultValue?: string,
  onSetValue: (val: string) => void,
  label: string,
}

export const TextInput = (props: TextInputSettings) => {
  const [value, setValue] = useState(props.defaultValue || "");

  const onSetText = (val: string) => {
    setValue(val);
    props.onSetValue(val);
  }

  return (
    <TextField margin="dense"
               label={props.label}
               size="small"
               variant="outlined"
               type="url"
               value={value || ""}
               onChange={e => onSetText(e.target.value)} />
  );
}
