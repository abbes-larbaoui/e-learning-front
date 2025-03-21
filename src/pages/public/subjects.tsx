import {useEffect, useState} from "react";
import Navbar from "../../components/navbar.tsx";
import Footer from "../../components/footer.tsx";
import {Typography} from "@material-tailwind/react";
import Pagination from "../../components/pagination.tsx";
import CategoryCard from "../../components/category-card.tsx";
import {fetchPublicSubjects} from "../../services/subject-service.ts";

export default function SubjectsPage() {
    const [subjects, setSubjects] = useState([]);
    const [filters, setFilters] = useState({});
    const [skip, setSkip] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const TAKE = 9; // Number of items per page

    useEffect(() => {
        fetchPublicSubjects(skip, TAKE, filters).then((data) => {
            setSubjects(data.content);
            setTotalElements(data.totalElements);
        });
    }, [skip, filters]);

    return (
        <div>
            <Navbar/>

            <div className="flex flex-col min-h-screen ">

                <div className="container mx-auto px-4 py-10 flex-1">
                    <Typography variant="h2" className="text-center font-bold text-gray-900 mb-8">
                        Explore Fields
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
                        {subjects.length ? (
                            subjects.map((subject) =>
                                <CategoryCard
                                    key={subject.id}
                                    title={subject.name}
                                    desc="100 plans"
                                    img={"/image/subject-section-bg-1.jpg"}
                                    field={subject.field.name}
                                />
                            )
                        ) : (
                            <Typography variant="h6" className="text-center col-span-3 mt-6">
                                No plans found
                            </Typography>
                        )}
                    </div>

                    <Pagination skip={skip} take={TAKE} totalElements={totalElements} setSkip={setSkip}/>

                </div>
                <Footer/>
            </div>
        </div>
    );
}
