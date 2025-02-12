import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { fetchPlanDetails } from "../services/plan-service";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {UserIcon} from "@heroicons/react/24/solid";
import {CalendarIcon, ClockIcon, CurrencyDollarIcon} from "@heroicons/react/24/outline";
import {ClipboardDocumentListIcon, UsersIcon} from "@heroicons/react/16/solid";


export default function PlanDetailPage() {
    const { id } = useParams(); // Get plan ID from URL
    const [plan, setPlan] = useState(null);

    useEffect(() => {
        fetchPlanDetails(id).then(setPlan);
    }, [id]);

    if (!plan) {
        return (
            <div>
                <Navbar/>
                <div className="flex justify-center items-center h-screen">
                    <Typography variant="h4">Loading...</Typography>
                    <Footer/>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto px-4 py-10 flex-1">
                <Card className=" mx-auto shadow-lg bg-white rounded-lg p-6">
                    <CardBody>
                        {/* Header */}
                        <div className="text-center mb-6">
                            <Typography variant="h2" className="font-bold text-gray-900">
                                {plan.subject}
                            </Typography>
                            <Typography variant="h5" className="text-gray-600">
                                {plan.field}
                            </Typography>
                        </div>

                        {/* Plan Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Teacher */}
                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                <UserIcon className="h-6 w-6 text-gray-600" />
                                <Typography className="text-gray-700">
                                    <strong>Teacher:</strong> {plan.teacherName}
                                </Typography>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                <CurrencyDollarIcon className="h-6 w-6 text-gray-600" />
                                <Typography className="text-gray-700">
                                    <strong>Price:</strong> ${plan.price}
                                </Typography>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                <CalendarIcon className="h-6 w-6 text-gray-600" />
                                <Typography className="text-gray-700">
                                    <strong>Duration:</strong> {plan.months} months
                                </Typography>
                            </div>

                            {/* Sessions Per Week */}
                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                <ClockIcon className="h-6 w-6 text-gray-600" />
                                <Typography className="text-gray-700">
                                    <strong>Sessions:</strong> {plan.sessionsPerWeek} per week
                                </Typography>
                            </div>

                            {/* Subscribers */}
                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                <UsersIcon className="h-6 w-6 text-gray-600" />
                                <Typography className="text-gray-700">
                                    <strong>Subscribers:</strong> {plan.subscriptions}
                                </Typography>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3 mb-2">
                                <ClipboardDocumentListIcon className="h-6 w-6 text-gray-600" />
                                <Typography variant="h6" className="text-gray-800">
                                    Plan Description
                                </Typography>
                            </div>
                            {/*<Typography className="text-gray-700">{plan.description}</Typography>*/}
                            <Typography className="text-gray-700">
                                Here what you will learn in this plan english basics, here u will learn the basics of Spring Framework and more and more, all about Spring boot, Sring MVC, Spring Data
                            </Typography>
                        </div>

                        {/* Enroll Button */}
                        <div className="text-center mt-6">
                            <Button color="black" >
                                Enroll Now
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <Footer />
        </div>
    );
}
