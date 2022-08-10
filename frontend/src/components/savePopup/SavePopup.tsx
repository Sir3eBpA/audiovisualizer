import { useModifiersContext } from "../../contexts/ModifiersContext";
import Emitter from "../../utils/Emitter";
import { EmitterEvents } from "../../utils/EmitterEvents";
import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export const SavePopup = () => {
  const { data } = useModifiersContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onSavePresetPressed() {
      setOpen(true);
      console.log(JSON.stringify(data));
      setTimeout(() => setOpen(false), 2000);
    }
    Emitter.on(EmitterEvents.SAVE_PRESET, onSavePresetPressed);

    return function() {
      Emitter.off(EmitterEvents.SAVE_PRESET, onSavePresetPressed);
    }
  }, [])

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}
