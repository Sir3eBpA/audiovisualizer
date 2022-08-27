import { useModifiersContext } from "../../contexts/ModifiersContext";
import Emitter from "../../utils/Emitter";
import { EmitterEvents } from "../../utils/EmitterEvents";
import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { DataURItoBlob, MakeID } from "../../utils/StringUtils";
import html2canvas from "html2canvas";
import { Tools } from "@babylonjs/core";
import { Visualizer } from "../audioVisualizer/AudioVisualizer";

export const SavePopup = () => {
  const { data } = useModifiersContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function onSavePresetPressed() {
      setOpen(true);

      try {
        const backgroundDiv = document.querySelector("#background") as HTMLElement;
        if(!backgroundDiv)
          throw new Error("Cannot find Background div!");

        // make a copy of canvas in webgl
        await Tools.CreateScreenshotAsync(Visualizer.engine, Visualizer.camera, { width: 1024, height: 576 });
        // copy the background canvas with the cached copy from babylon we obtain above
        // this is actually pretty interesting because it helps us reduce amount of actions on the client
        // there's no need to merge these 2 screenshots on the output
        const backgroundScreenshot = await html2canvas(backgroundDiv, { onclone: (doc, el) => {
          el.style.width = "1024px";
          el.style.height = "576px";
          }
        });

        var formData = new FormData();
        formData.append("preview", DataURItoBlob(backgroundScreenshot.toDataURL()), "screenshot.png");

        const name = MakeID(8);
        formData.append("json", JSON.stringify(data));
        formData.append("name", name);

        await axios({
          method: "post",
          url: 'api/v1/visualizer/create',
          headers: { 'Content-Type': 'multipart/form-data' },
          data: formData,
        });

        console.log("Saved: %s", name);
      }
      catch (e) {
        alert(e);
      }
      finally {
        setOpen(false);
      }

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
