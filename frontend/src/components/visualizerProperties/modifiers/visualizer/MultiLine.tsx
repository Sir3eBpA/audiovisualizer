import { useModifiersContext } from "../../../../contexts/ModifiersContext";
import { Modifiers } from "../../../../Constants";
import { FieldAccordeon } from "../../genericProperties/fieldAccordeon/FieldAccordeon";
import { NumberInput } from "../../genericProperties/numberInput/NumberInput";
import React from "react";

export const MultiLine = () => {
  const { data, setData } = useModifiersContext();
  const visualizerData = data[Modifiers.VISUALIZER];

  const onBoxesAmountChanged = (value: any) => {
    visualizerData["amount"] = value;
    setData({ ...data });
  };

  const onBoxesSizeChanged = (value: number) => {
    visualizerData["size"] = value;
    setData({ ...data });
  };

  const onWidthChanged = (value: number) => {
    visualizerData["width"] = Math.round(value);
    setData({...data});
  }

  return (
    <FieldAccordeon title="Settings">
      <NumberInput label="Amount"
                   onSetValue={onBoxesAmountChanged}
                   minValue={1}
                   maxValue={128}
                   integersOnly
                   defaultValue={visualizerData["amount"]} />
      <NumberInput label="Width"
                   onSetValue={onWidthChanged}
                   minValue={1}
                   maxValue={12}
                   integersOnly
                   defaultValue={visualizerData["width"]} />
      <NumberInput label="Size"
                   onSetValue={onBoxesSizeChanged}
                   minValue={0.1}
                   maxValue={10}
                   defaultValue={visualizerData["size"]} />
    </FieldAccordeon>
  );
};
