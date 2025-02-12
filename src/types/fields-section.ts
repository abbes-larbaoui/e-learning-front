import {SectionField} from "./section-field.ts";

export interface FieldsSectionType {
    id: number;
    title: string;
    description: string;
    fields: SectionField[];
    active: boolean;
}