import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useRef } from "react";

export type SaveDialogueSettings = {
  isOpen: boolean,
  onClose: () => void,
  onSave: (name: string) => void,
}


export const SaveDialogue = (props: SaveDialogueSettings) => {
  const nameInput = useRef<HTMLInputElement>();

  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      <DialogTitle>Save Visualizer</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please give a name to your visualizer preset. Others will see it so choose wisely!
        </DialogContentText>
        <TextField
          inputRef={nameInput}
          autoFocus
          margin="dense"
          id="name"
          label="Visualizer name"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={props.onClose}>Cancel</Button>
        <Button variant="contained" onClick={() => props.onSave(nameInput.current?.value || "")}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
