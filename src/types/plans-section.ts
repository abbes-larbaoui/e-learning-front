import {Plan} from "./plan.ts";

export interface PlansSectionType {
    id: number;
    title: string;
    description: string;
    plans: Plan[];
    active: boolean;
}