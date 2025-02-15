import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Container, Typography, CircularProgress, CardContent, Box, Divider, CardActions} from "@mui/material";
import {toast, ToastContainer} from "react-toastify";
import AuthLayout from "../../../components/auth-layout.tsx";
import {Button, Card, CardHeader} from "@material-tailwind/react";
import {fetchPlanById} from "../../../services/plan-service.ts";
import {AttachMoney, CalendarMonth, Category, Check, Schedule, School} from "@mui/icons-material";
import {GiMatterStates} from "react-icons/gi";

export default function PlanView() {
    const {id} = useParams(); // Get plan ID from the URL
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            loadPlan(id);
        }
    }, [id]);

    const loadPlan = async (planId: string) => {
        setLoading(true);
        try {
            const data = await fetchPlanById(planId);
            setPlan(data);
        } catch (error) {
            console.error("Error fetching plan:", error);
            toast.error("Failed to load plan details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <Container maxWidth="xl" sx={{mt: 4}}>
                <Card className="px-8 py-4 shadow-md rounded-lg mb-4">
                    <Typography variant="h5">
                        Plan View
                    </Typography>
                </Card>

                <Card className="p-4 shadow-md rounded-lg mb-4">
                    {loading ? (
                        <CircularProgress/>
                    ) : plan ? (
                        <>
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    {/*<School color="primary"/>*/}
                                    <Typography  fontWeight="bold" className="w-52">Subject:</Typography>
                                    <Typography >{plan.subject.name}</Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    {/*<Category color="secondary"/>*/}
                                    <Typography  fontWeight="bold" className="w-52">Field:</Typography>
                                    <Typography >{plan.subject.field.name}</Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    {/*<CalendarMonth color="success"/>*/}
                                    <Typography  fontWeight="bold" className="w-52">Duration:</Typography>
                                    <Typography >{plan.months} months</Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    {/*<Schedule color="error"/>*/}
                                    <Typography  fontWeight="bold" className="w-52">Sessions per
                                        Week:</Typography>
                                    <Typography >{plan.sessionsPerWeek}</Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    {/*<AttachMoney color="warning"/>*/}
                                    <Typography  fontWeight="bold" className="w-52">Price:</Typography>
                                    <Typography >${plan.price}</Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    {/*<Check color="warning"/>*/}
                                    <Typography fontWeight="bold" className="w-52">Status:</Typography>
                                    <Typography className="bg-green-500 text-white rounded px-1">{plan.status}</Typography>
                                </Box>
                            </CardContent>

                        </>
                    ) : (
                        <Typography  color="error">Plan not found</Typography>
                    )}
                </Card>

                <div className="text-right">
                    <Link to="/teacher/plans" className="px-4 py-2 text-sm font-medium text-white bg-black content-center  rounded-md hover:drop-shadow-lg mr-1 border-black border-2">
                        Back
                    </Link>
                    <Link to={`/plans/${plan?.id}/edit`} className="px-4 py-2 text-sm font-medium content-center  rounded-md hover:drop-shadow-lg border-black border-2">
                        Edit
                    </Link>
                </div>

            </Container>
            <ToastContainer/>
        </AuthLayout>
    );
}
