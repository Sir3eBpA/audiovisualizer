import { useModifiersContext } from "../../contexts/ModifiersContext";
import { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

export const PresetLoader = () => {
  const { data, setData } = useModifiersContext();
  const [open, setOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if(id) {
      setOpen(true);
      // todo add request load from backend
      console.log(id);

      setTimeout(() => {
        setOpen(false)
      }, 3000);
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
