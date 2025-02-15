import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Box, CardContent, Container, TextField, Typography} from "@mui/material";
import {toast, ToastContainer} from "react-toastify";
import AuthLayout from "../../../components/auth-layout.tsx";
import {Card} from "@material-tailwind/react";
import {createPlan} from "../../../services/plan-service.ts";
import {useKeycloak} from "@react-keycloak/web";

export default function PlanCreate() {

    const { keycloak } = useKeycloak();

    const navigate = useNavigate();
    const [planData, setPlanData] = useState({
        subjectId: "",
        months: "",
        sessionsPerWeek: "",
        price: "",
        status: "PENDING",
    });

    const handleChange = (e) => {
        setPlanData({...planData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("---------------------TOKEN------------------")
        console.log(keycloak.token)
        try {
            await createPlan(planData, keycloak.token);
            toast.success("Plan created successfully!");
            navigate("/teacher/plans");
        } catch (error) {
            console.error("Error creating plan:", error);
            toast.error("Failed to create plan.");
        }
    };

    return (
        <AuthLayout>
            <Container maxWidth="xl" sx={{mt: 4}}>
                {/* Header Card */}
                <Card className="px-8 py-4 shadow-md rounded-lg mb-4">
                    <Typography variant="h5">
                        Plan Create
                    </Typography>
                </Card>
                <form onSubmit={handleSubmit}>

                    {/* Form Card */}
                    <Card className="p-4 shadow-md rounded-lg mb-4">
                        <CardContent>
                            <Box display="flex" flexDirection="column" gap={2}>

                                <TextField
                                    label="Subject"
                                    name="subjectId"
                                    value={planData.subjectId}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />

                                <TextField
                                    label="Duration (Months)"
                                    name="months"
                                    type="number"
                                    value={planData.months}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />

                                <TextField
                                    label="Sessions per Week"
                                    name="sessionsPerWeek"
                                    type="number"
                                    value={planData.sessionsPerWeek}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />

                                <TextField
                                    label="Price ($)"
                                    name="price"
                                    type="number"
                                    value={planData.price}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />

                                <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>

                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                    <div className="text-right">
                        <Link to="/teacher/plans"
                              className="px-4 py-2 text-sm font-medium text-white bg-black content-center  rounded-md hover:drop-shadow-lg mr-1 border-black border-2">
                            Back
                        </Link>
                        <button type="submit" color="primary"
                                className="px-4 py-1.5 text-sm font-medium content-center  rounded-md hover:drop-shadow-lg border-black border-2">Save
                        </button>
                    </div>
                </form>
            </Container>
            <ToastContainer/>
        </AuthLayout>
    );
}
