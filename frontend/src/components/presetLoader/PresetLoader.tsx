import { useModifiersContext } from "../../contexts/ModifiersContext";
import { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { asyncGetVisualizerById } from "../../services/Visualizer";

export const PresetLoader = () => {
  const { data, setData } = useModifiersContext();
  const [open, setOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function LoadVisualizer(id: string) {
      const data = await asyncGetVisualizerById(id);
      const parsedJson = JSON.parse(data.json);
      setData(parsedJson);
    }

    if(id) {
      setOpen(true);

      try {
        console.log(`Loading preset from: ${id}`);
        setOpen(false);
        LoadVisualizer(id);
      }
      catch (ex) {
        console.error(ex);
      }
      finally {
        setOpen(false);
      }
    }
  }, []);

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
