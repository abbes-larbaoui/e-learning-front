import {SectionSubject} from "./section-subject.ts";

export interface SubjectsSection {
    id: number;
    title: string;
    description: string;
    subjects: SectionSubject[];
    active: boolean;
}