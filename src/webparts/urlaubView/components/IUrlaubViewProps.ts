import { MSGraphClientFactory } from "@microsoft/sp-http";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IUrlaubViewProps {
  description: string;
  context: WebPartContext;
  user_group: string;
}
