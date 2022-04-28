import { MSGraphClient } from "@microsoft/sp-http";

export interface IHumanResourceViewProps {
    client: Promise<MSGraphClient>;
}
