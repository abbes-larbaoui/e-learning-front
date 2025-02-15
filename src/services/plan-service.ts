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

export const fetchPlanDetails = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/core/api/v1/public/subscription-plans/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching plan details:", error);
        return null;
    }
};

// const API_URL = "http://localhost:8080/core/api/v1/subscription-plans";

export const fetchPlans = async (skip: number, take: number, filterParams: string) => {
    try {
        const response = await fetch(`http://localhost:8080/core/api/v1/subscription-plans?skip=${skip}&take=${take}&${filterParams}`);
        if (!response.ok) throw new Error("Failed to fetch plans");

        return await response.json();
    } catch (error) {
        console.error("Error fetching plans:", error);
        throw error;
    }
};

export const deletePlan = async (planId: number) => {
    try {
        const response = await fetch(`http://localhost:8080/core/api/v1/subscription-plans/${planId}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Failed to delete plan");

        return true;
    } catch (error) {
        console.error("Error deleting plan:", error);
        throw error;
    }
};

export const fetchPlanById = async (id: string) => {
    const response = await fetch(`http://localhost:8080/core/api/v1/subscription-plans/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch plan");
    }
    return response.json();
};
