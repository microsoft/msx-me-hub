import { IMyCalendarWebPartProps } from "../MyCalendarWebPart";
import { DisplayMode } from "@microsoft/sp-core-library";


export interface IMyCalendarProps extends IMyCalendarWebPartProps {
  displayMode: DisplayMode;
  updateProperty: (value: string) => void;
}
