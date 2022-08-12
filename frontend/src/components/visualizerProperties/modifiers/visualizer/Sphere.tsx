import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { NumberInput } from "../../genericProperties/numberInput/NumberInput";
import React from "react";

export const Sphere = () => {
  const { data, setData } = useModifiersContext();
  const visualizerData = data[Modifiers.VISUALIZER];

  const onBoxesAmountChanged = (value: any) => {
    visualizerData["amount"] = value;
    setData({ ...data });
  };

  const onBoxesSizeChanged = (value: any) => {
    visualizerData["size"] = value;
    setData({ ...data });
  };

  const onRadiusChanged = (value: any) => {
    visualizerData["radius"] = value;
    setData({ ...data });
  };

  return (
    <FieldAccordeon title="Settings">
      <NumberInput label="Amount"
                   onSetValue={onBoxesAmountChanged}
                   minValue={1}
                   maxValue={256}
                   integersOnly
                   defaultValue={visualizerData["amount"] || 80} />
      <NumberInput label="Size"
                   onSetValue={onBoxesSizeChanged}
                   minValue={0.1}
                   maxValue={10}
                   defaultValue={visualizerData["size"] || 1} />
      <NumberInput label="Radius"
                   onSetValue={onRadiusChanged}
                   minValue={0.1}
                   maxValue={10000}
                   defaultValue={visualizerData["radius"] || 1} />
    </FieldAccordeon>
  );
};
