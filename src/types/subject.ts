import {Field} from "./field.ts";

export interface Subject {
    id: number;
    name: string;
    description: string;
    status: string;
    field: Field;
}