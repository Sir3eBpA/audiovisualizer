import { ColorPicker } from "../../genericProperties/colorPicker/ColorPicker";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { Input } from "@mui/material";
import { TextInput } from "../../genericProperties/textInput/TextInput";
import { NumberInput } from "../../genericProperties/numberInput/NumberInput";
import { GetYoutubeVideoId } from "../../../../utils/StringUtils";

export const VideoBackgroundEditor = () => {
  const { data, setData } = useModifiersContext();
  const bgData = data[Modifiers.BACKGROUND];

  const onBackgroundColorSet = (src: string) => {
    const videoId = GetYoutubeVideoId(src);
    if(videoId) {
      bgData["bgOriginalSrc"] = src;

      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&vq=hd1080`;
      bgData["bgSrc"] = embedUrl;

      setData({ ...data });
    }
  };

  const onBackgrondOpacitySet = (opacity: number) => {
    bgData["bgOpacity"] = opacity;
    setData({...data});
  }

  return (
    <FieldAccordeon title="Youtube URL">
      <TextInput onSetValue={onBackgroundColorSet}
                 label="Youtube URL"
                 defaultValue={bgData["bgOriginalSrc"]} />
      <NumberInput onSetValue={onBackgrondOpacitySet}
                   label="Opacity"
                   defaultValue={20}
                   minValue={0}
                   maxValue={100} />
    </FieldAccordeon>
  );
};
