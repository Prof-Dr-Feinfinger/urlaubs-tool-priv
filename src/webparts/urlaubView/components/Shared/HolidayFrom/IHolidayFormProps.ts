import { MSGraphClient } from "@microsoft/sp-http";

export interface IHolidayFormProps {
    client: Promise<MSGraphClient>;
}