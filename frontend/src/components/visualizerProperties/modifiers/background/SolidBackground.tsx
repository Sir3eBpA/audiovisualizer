import { ColorPicker } from "../../genericProperties/colorPicker/ColorPicker";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";

export const SolidBackgroundEditor = () => {
  const { data, setData } = useModifiersContext();
  const bgData = data[Modifiers.BACKGROUND];

  const onBackgroundColorSet = (color: string) => {
    bgData["bgColor"] = color;
    setData({...data});
  };

  return (
    <FieldAccordeon title="Color">
      <ColorPicker setColor={onBackgroundColorSet}
                   label="Background color"
                   color={bgData["bgColor"]}/>
    </FieldAccordeon>
  );
}
