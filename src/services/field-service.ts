import axios from "axios";
import {FieldsSectionType} from "../types/fields-section.ts";

const API_URL = "http://localhost:8080/core/api/v1/public/active/fields/section";

export const fetchFieldsSection = async (): Promise<FieldsSectionType | null> => {
    try {
        const response = await axios.get<FieldsSectionType>(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching fields section data:", error);
        return null;
    }
};

export const fetchPublicFields = async (skip, take, filter) => {
    const params = new URLSearchParams({
        skip,
        take,
    });

    if (filter) {
        params.append("filter", filter);
    }

    const response = await fetch(`http://localhost:8080/core/api/v1/public/fields?${params.toString()}`);
    return response.json();
};