import axios from "axios";
import {SubjectsSection} from "../types/subjects-section.ts";

const API_URL = "http://localhost:8080/core/api/v1/public/active/subjects/section";

export const fetchSubjectsSection = async (): Promise<SubjectsSection | null> => {
    try {
        const response = await axios.get<SubjectsSection>(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching hero section data:", error);
        return null;
    }
};