import {Field} from "./field.ts";

export interface HeroSection {
    id: number;
    title: string;
    description: string;
    fields: Field[];
    active: boolean;
}