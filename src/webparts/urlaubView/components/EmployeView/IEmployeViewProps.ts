import { MSGraphClient } from "@microsoft/sp-http";

export interface IEmployeViewProps {
    client: Promise<MSGraphClient>;
}
