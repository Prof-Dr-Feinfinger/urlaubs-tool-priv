import { MSGraphClient } from "@microsoft/sp-http";


export interface IHolidaysFormProps {
    client: Promise<MSGraphClient>;
}