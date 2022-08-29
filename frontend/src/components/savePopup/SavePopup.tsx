import { useModifiersContext } from "../../contexts/ModifiersContext";
import Emitter from "../../utils/Emitter";
import { EmitterEvents } from "../../utils/EmitterEvents";
import {
  Backdrop,
  Box, Button,
  CircularProgress,
  Dialog, DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";
import { useEffect, useState } from "react";
import { MakeID } from "../../utils/StringUtils";
import { BackgroundType, Modifiers } from "../../Constants";
import { takeVisualizerScreenshot, uploadVisualizer } from "../../services/UploadVisualizer";
import { SaveDialogue } from "./SaveDialogue";

const isVideoBackgroundActive = (data: any) : boolean => {
  const bgModifier = data[Modifiers.BACKGROUND];
  return bgModifier["type"] === BackgroundType.VIDEO;
}

export const SavePopup = () => {
  const { data } = useModifiersContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onSaveButtonPressed() {
      setIsOpen(true);
    }
    Emitter.on(EmitterEvents.SAVE_PRESET, onSaveButtonPressed);

    return function() {
      Emitter.off(EmitterEvents.SAVE_PRESET, onSaveButtonPressed);
    };
  }, []);

  const handleSave = async (name: string) => {
    setIsLoading(true);
    try {
      // reset camera before taking the screenshot
      Emitter.emit(EmitterEvents.RESET_CAMERA);

      const bgCanvas = await takeVisualizerScreenshot(isVideoBackgroundActive(data));
      await uploadVisualizer(bgCanvas.toDataURL(), name, data);

      console.log("Saved: %s", name);
    } catch (e) {
      alert(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => setIsOpen(false);

  return (
    <Box>
      <SaveDialogue isOpen={isOpen}
                    onClose={handleClose}
                    onSave={handleSave} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.modal + 1 }}
        open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};
