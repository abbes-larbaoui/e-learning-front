import axios from "axios";
import {PlansSectionType} from "../types/plans-section.ts";

const API_URL = "http://localhost:8080/core/api/v1/public/active/plans/section";

export const fetchPlansSection = async (): Promise<PlansSectionType | null> => {
    try {
        const response = await axios.get<PlansSectionType>(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching plan section data:", error);
        return null;
    }
};

// export const fetchPublicPlans = async (skip = 0, take = 4) => {
//     const response = await fetch(`http://localhost:8080/core/api/v1/public/subscription-plans?skip=${skip}&take=${take}`);
//     return response.json();
// };

export const fetchPublicPlans = async (skip, take, filter) => {
    const params = new URLSearchParams({
        skip,
        take,
    });

    if (filter) {
        params.append("filter", filter);
    }

    const response = await fetch(`http://localhost:8080/core/api/v1/public/subscription-plans?${params.toString()}`);
    return response.json();
};