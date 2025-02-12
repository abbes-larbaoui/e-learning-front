import axios from "axios";
import {StatSection} from "../types/statSection.ts";

const API_URL = "http://localhost:8080/core/api/v1/public/active/stat/section";

export const fetchStatSection = async (): Promise<StatSection | null> => {
    try {
        const response = await axios.get<StatSection>(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching stat section data:", error);
        return null;
    }
};