import {useState} from "react";
import {Button, Input, Option, Select} from "@material-tailwind/react";

export default function PlansFilter({ onFilterChange }) {
    const [subject, setSubject] = useState("");
    const [field, setField] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minMonths, setMinMonths] = useState("");
    const [maxMonths, setMaxMonths] = useState("");
    const [minSessions, setMinSessions] = useState("");
    const [maxSessions, setMaxSessions] = useState("");

    const handleApplyFilters = () => {
        onFilterChange({ subject, field, minPrice, maxPrice, minMonths, maxMonths, minSessions, maxSessions });
    };

    return (
        <div className="w-full p-4 rounded-lg bg-white">
            <h3 className="text-lg font-semibold mb-4 text-center">Filter Plans</h3>

            <div className="flex flex-col gap-3">
                <Input
                    type="text"
                    label="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <Input
                    type="text"
                    label="Field"
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                />

                <Input
                    type="number"
                    label="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <Input
                    type="number"
                    label="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

                <Input
                    type="number"
                    label="Min Months"
                    value={minMonths}
                    onChange={(e) => setMinMonths(e.target.value)}
                />
                <Input
                    type="number"
                    label="Max Months"
                    value={maxMonths}
                    onChange={(e) => setMaxMonths(e.target.value)}
                />

                <Input
                    type="number"
                    label="Min Sessions per week"
                    value={minSessions}
                    onChange={(e) => setMinSessions(e.target.value)}
                />
                <Input
                    type="number"
                    label="Max Sessions per week"
                    value={maxSessions}
                    onChange={(e) => setMaxSessions(e.target.value)}
                />

                <Button color="black" onClick={handleApplyFilters}>
                    Apply Filters
                </Button>
            </div>
        </div>
    );
}


