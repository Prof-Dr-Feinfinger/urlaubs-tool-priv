import { MSGraphClient } from "@microsoft/sp-http";
export interface IAdminViewProps {
    client: Promise<MSGraphClient>;
}
