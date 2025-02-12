import {SectionSubject} from "./section-subject.ts";

export interface SubjectsSectionType {
    id: number;
    title: string;
    description: string;
    subjects: SectionSubject[];
    active: boolean;
}