import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  useTheme
} from "@mui/material";
import { useState } from "react";
import { ColoredText, ColorType } from "../coloredText/ColoredText";

export type SaveDialogueSettings = {
  isOpen: boolean,
  onClose: () => void,
  onSave: (name: string) => void,
  errorMessage?: string,
}


export const SaveDialogue = (props: SaveDialogueSettings) => {
  const theme = useTheme();
  const [name, setName] = useState('');

  const isNameInputEmpty = () : boolean => {
    return name.length === 0;
  }

  return (
    <Dialog open={props.isOpen}
            onClose={props.onClose}>
      <DialogTitle>Save Visualizer</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please give a name to your visualizer preset. Others will see it so choose wisely!
        </DialogContentText>
        <TextField
          onChange={event => setName(event.currentTarget.value)}
          autoFocus
          margin="dense"
          id="name"
          label="Visualizer name"
          type="text"
          fullWidth
          variant="standard"
        />
        <ColoredText type={ColorType.Error}
                     marginTop={2}
                     text={props.errorMessage || ""} />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined"
                onClick={props.onClose}>
          Cancel
        </Button>
        <Button variant="contained"
                disabled={isNameInputEmpty()}
                onClick={() => props.onSave(name)}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
