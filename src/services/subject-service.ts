import axios from "axios";
import {SubjectsSectionType} from "../types/subjects-section.ts";

const API_URL = "http://localhost:8080/core/api/v1/public/active/subjects/section";

export const fetchSubjectsSection = async (): Promise<SubjectsSectionType | null> => {
    try {
        const response = await axios.get<SubjectsSectionType>(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching hero section data:", error);
        return null;
    }
};

export const fetchPublicSubjects = async (skip, take, filter) => {
    const params = new URLSearchParams({
        skip,
        take,
    });

    if (filter) {
        params.append("filter", filter);
    }

    const response = await fetch(`http://localhost:8080/core/api/v1/public/subjects?${params.toString()}`);
    return response.json();
};