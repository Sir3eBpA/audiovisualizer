import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { MultiColorPicker } from "../../genericProperties/multiColorPicker/MultiColorPicker";
import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";

export const GradientBackground = () => {
  const { data, setData } = useModifiersContext();
  const bgData = data[Modifiers.BACKGROUND];

  const onBackgroundGradientSet = (colors: string[]) => {
    bgData["bgColors"] = colors;
    setData({...data, data});
  };

  return (
    <FieldAccordeon title="Color">
      <MultiColorPicker colors={bgData["bgColors"]} setColors={onBackgroundGradientSet}/>
    </FieldAccordeon>
  );
}
