import {useState, useEffect} from "react";
import {Typography} from "@material-tailwind/react";
import Navbar from "../../components/navbar.tsx";
import Footer from "../../components/footer.tsx";
import PlanCard from "../../components/plan-card.tsx";
import Pagination from "../../components/pagination.tsx";
import {fetchPublicPlans} from "../../services/plan-service.ts";
import PlansFilter from "../../components/plans-filter.tsx";

export default function PlansPage() {
    const [plans, setPlans] = useState([]);
    const [filters, setFilters] = useState({});
    const [skip, setSkip] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const TAKE = 6; // Number of items per page

    const handleFilterChange = (newFilters) => {
        const filterParams = [];

        if (newFilters.subject) {
            filterParams.push(`subject.name,contains,${newFilters.subject}`);
        }
        if (newFilters.field) {
            filterParams.push(`subject.field.name,contains,${newFilters.field}`);
        }
        if (newFilters.minPrice) {
            filterParams.push(`price,>=,${newFilters.minPrice}`);
        }
        if (newFilters.maxPrice) {
            filterParams.push(`price,<=,${newFilters.maxPrice}`);
        }
        if (newFilters.minMonths) {
            filterParams.push(`months,>=,${newFilters.minMonths}`);
        }
        if (newFilters.maxMonths) {
            filterParams.push(`months,<=,${newFilters.maxMonths}`);
        }
        if (newFilters.minSessions) {
            filterParams.push(`sessionsPerWeek,>=,${newFilters.minSessions}`);
        }
        if (newFilters.maxSessions) {
            filterParams.push(`sessionsPerWeek,<=,${newFilters.maxSessions}`);
        }

        // Join filters with "and"
        const filterQuery = filterParams.length ? `[${filterParams.join(",and,")}]` : "";

        setFilters(filterQuery);
        setSkip(0); // Reset pagination when filters change
    };

    useEffect(() => {
        fetchPublicPlans(skip, TAKE, filters).then((data) => {
            setPlans(data.content);
            setTotalElements(data.totalElements);
        });
    }, [skip, filters]);

    return (
        <div>
            <Navbar/>
            <div className="relative min-h-screen flex flex-col">


                {/* Main Content Wrapper */}
                <div className="flex-grow flex">
                    {/* Filter Sidebar (Fixed Left) */}
                    <div className="fixed left-0 top-32 w-64 h-full p-4 bg-white">
                        <PlansFilter onFilterChange={handleFilterChange}/>
                    </div>

                    {/* Centered Content */}
                    <div className="container mx-auto px-4 py-10 ml-72 flex-grow">
                        <Typography variant="h2" color="blue-gray" className="mb-6 text-center text-4xl">
                            Available Plans
                        </Typography>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
                            {plans.length ? (
                                plans.map((plan, key) => <PlanCard key={key} plan={plan}/>)
                            ) : (
                                <Typography variant="h6" className="text-center col-span-3 mt-6">
                                    No plans found
                                </Typography>
                            )}
                        </div>

                        <Pagination skip={skip} take={TAKE} totalElements={totalElements} setSkip={setSkip}/>
                    </div>
                </div>

                {/* Footer - Full Width */}
                <Footer/>
            </div>
        </div>
    );


}


