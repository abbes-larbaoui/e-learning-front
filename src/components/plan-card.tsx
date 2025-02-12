import {Button, Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";
import {Plan} from "../types/plan.ts";
import {CalendarIcon, ClockIcon, CurrencyDollarIcon} from "@heroicons/react/24/outline";
import {UserIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

function PlanCard({plan}: { plan: Plan }) {
    return (
        <Link to={`/plans/${plan.id}`} className="block hover:no-underline">
            <Card className="p-6 rounded-2xl shadow-lg border border-gray-200 bg-white transition-transform transform hover:scale-105">

                <CardHeader className="mb-4 flex flex-col items-center gap-3 mt-1">
                    {/*<BookOpenIcon className="h-8 w-8 text-black" />*/}
                    <Typography variant="h5" className="font-bold text-gray-900 text-center">
                        {plan.subject}
                    </Typography>
                    <Typography variant="small" className="text-gray-600">
                        {plan.field}
                    </Typography>
                </CardHeader>

                <CardBody className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <UserIcon className="h-5 w-5 text-gray-500"/>
                        <Typography variant="small" className="text-gray-700">
                            Teacher: <span className="font-medium text-gray-900">{plan.teacherName}</span>
                        </Typography>
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5 text-gray-500"/>
                        <Typography variant="small" className="text-gray-700">
                            Duration: <span className="font-medium text-gray-900">{plan.months} months</span>
                        </Typography>
                    </div>

                    <div className="flex items-center gap-2">
                        <ClockIcon className="h-5 w-5 text-gray-500"/>
                        <Typography variant="small" className="text-gray-700">
                            Sessions: <span className="font-medium text-gray-900">{plan.sessionsPerWeek} per week</span>
                        </Typography>
                    </div>

                    <div className="flex items-center gap-2">
                        <CurrencyDollarIcon className="h-5 w-5 text-gray-500"/>
                        <Typography variant="small" className="text-gray-700">
                            Price: <span className="font-medium text-gray-900">${plan.price.toFixed(2)}</span>
                        </Typography>
                    </div>

                    <Button color="black" className="mt-4 w-full">
                        Enroll Now
                    </Button>
                </CardBody>
            </Card>
        </Link>
    );
}

export default PlanCard;