import {Field} from "./field.ts";

export interface SectionSubject {
    id: number;
    name: string;
    description: string;
    image: string;
    icon: string;
    status: string;
    field: Field;
}