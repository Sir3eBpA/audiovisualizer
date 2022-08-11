import { UploadButton } from "./SongUploadButtonElements";
import { useRef } from "react";

export type SongUploadSettings = {
  onClick: (url: string) => void
};

export const SongUploadButton = (props: SongUploadSettings) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null && event.target?.files?.length > 0) {
      const file = URL.createObjectURL(event.target.files[0]);
      props.onClick(file);
    }
  };

  return (
    <>
      <input type="file"
             style={{ display: "none" }}
             accept="audio/*"
             ref={fileInput}
             onChange={onFileUpload}
      />
      <UploadButton sx={{ color: "text.primary" }}
                    variant="contained"
                    onClick={() => fileInput.current?.click()}>
        Or.. Choose your own song!
      </UploadButton>
    </>
  );
};
