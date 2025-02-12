import axios from "axios";
import {HeroSection} from "../types/heroSection.ts";

const API_URL = "http://localhost:8080/core/api/v1/public/active/hero/section";

export const fetchHeroSection = async (): Promise<HeroSection | null> => {
    try {
        const response = await axios.get<HeroSection>(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching hero section data:", error);
        return null;
    }
};