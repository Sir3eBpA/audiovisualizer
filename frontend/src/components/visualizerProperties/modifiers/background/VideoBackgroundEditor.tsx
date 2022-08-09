import { ColorPicker } from "../../genericProperties/colorPicker/ColorPicker";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { Input } from "@mui/material";
import { TextInput } from "../../genericProperties/textInput/TextInput";
import { NumberInput } from "../../genericProperties/numberInput/NumberInput";

export const VideoBackgroundEditor = () => {
  const { data, setData } = useModifiersContext();
  const bgData = data[Modifiers.BACKGROUND];

  const onBackgroundColorSet = (src: string) => {
    bgData["bgSrc"] = src;
    setData({ ...data, data });
  };

  const onBackgrondOpacitySet = (opacity: number) => {
    bgData["bgOpacity"] = opacity;
    setData({...data, data});
  }

  return (
    <FieldAccordeon title="Youtube URL">
      <TextInput onSetValue={onBackgroundColorSet}
                 label="Youtube URL"
                 defaultValue={bgData["bgSrc"]} />
      <NumberInput onSetValue={onBackgrondOpacitySet}
                   label="Opacity"
                   defaultValue={20}
                   minValue={0}
                   maxValue={100} />
    </FieldAccordeon>
  );
};
