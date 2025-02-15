import {useEffect, useState} from "react";
import {DataGrid, GridColDef, GridFilterModel, GridPaginationModel} from "@mui/x-data-grid";
import {Container, Typography, IconButton} from "@mui/material";
import AuthLayout from "../../../components/auth-layout.tsx";
import {Card} from "@material-tailwind/react";
import {Delete, Edit, Info} from "@mui/icons-material";
import {deletePlan, fetchPlans} from "../../../services/plan-service.ts";
import ConfirmDialog from "../../../components/confirm-dialog.tsx";
import {ToastContainer, toast} from 'react-toastify';
import {Link, useNavigate} from "react-router-dom";


export default function PlanList() {
    const navigate = useNavigate();
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 0,
        pageSize: 10,
    });
    const [filterModel, setFilterModel] = useState<GridFilterModel>({
        items: [],
    });
    const [totalRows, setTotalRows] = useState(0);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const columns: GridColDef[] = [
        {field: "id", headerName: "ID", width: 70},
        {field: "subject.name", headerName: "Subject", flex: 1},
        {field: "subject.field.name", headerName: "Field", flex: 1},
        {field: "months", headerName: "Duration (months)", flex: 1, type: "number"},
        {field: "sessionsPerWeek", headerName: "Sessions per Week", flex: 1, type: "number"},
        {field: "price", headerName: "Price ($)", flex: 1, type: "number"},
        {field: "status", headerName: "Status", flex: 1,
            renderCell: (params) => (
                <div>
                    {params.row.status == 'PENDING' && <span className="bg-blue-500 text-white rounded text-center p-2">Pending</span> }
                    {params.row.status == 'PUBLISHED' && <span className="bg-green-500 text-white rounded text-center p-2">Published</span> }
                    {params.row.status == 'DISABLED' && <span className="bg-black text-white rounded text-center p-2">Disabled</span> }
                </div>
            ),
        },
        {
            field: "actions",
            headerName: "Actions",
            filterable: false,
            width: 150,
            sortable: false,
            renderCell: (params) => (
                <>
                    <IconButton color="inherit" onClick={() => handleView(params.row)}>
                        <Info/>
                    </IconButton>
                    <IconButton color="inherit" onClick={() => handleEdit(params.row)}>
                        <Edit/>
                    </IconButton>
                    <IconButton color="error" onClick={() => openConfirmDialog(params.row.id)}>
                        <Delete/>
                    </IconButton>
                </>
            ),
        },
    ];

    useEffect(() => {
        loadPlans();
    }, [paginationModel.page, paginationModel.pageSize, filterModel]);

    const buildFilterParams = () => {
        return filterModel.items
            .map(
                (filter) =>
                    `filter=%5B${encodeURIComponent(filter.field)},${encodeURIComponent(filter.operator)},${encodeURIComponent(filter.value)}%5D`
            )
            .join("&");
    };

    const loadPlans = async () => {
        setLoading(true);
        const skip = paginationModel.page * paginationModel.pageSize;
        const take = paginationModel.pageSize;
        const filterParams = buildFilterParams();

        try {
            const data = await fetchPlans(skip, take, filterParams);

            setPlans(
                data.content.map(plan => ({
                    id: plan.id,
                    "subject.name": plan.subject.name,
                    "subject.field.name": plan.subject.field.name,
                    months: plan.months,
                    sessionsPerWeek: plan.sessionsPerWeek,
                    price: plan.price,
                    status: plan.status,
                }))
            );

            setTotalRows(data.totalElements);
        } catch (error) {
            toast.error("Error loading plans.");
            console.error("Error loading plans:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleView = (plan) => {
        navigate(`/teacher/plans/view/${plan.id}`);
    };

    const handleEdit = (plan) => {
        console.log("Editing plan:", plan);
    };

    const openConfirmDialog = (planId: number) => {
        setDeleteId(planId);
        setConfirmOpen(true);
    };

    const handleDelete = async () => {
        if (deleteId !== null) {
            try {
                await deletePlan(deleteId);
                setPlans((prev) => prev.filter((plan) => plan.id !== deleteId));
                toast.success("Plan with ID " + deleteId + " deleted successfully!");
            } catch (error) {
                toast.error("Error deleting plan, " + error);
                console.error("Error deleting plan:", error);
            } finally {
                setConfirmOpen(false);
                setDeleteId(null);
            }
        }
    };

    return (
        <AuthLayout>
            <Container maxWidth="xl" sx={{mt: 4}}>
                <Card className="px-8 py-4 shadow-md rounded-lg mb-4 w-full">
                    <Typography variant="h5" className="center">
                        <span>Plans List</span>
                            <Link to="/teacher/plans/create"
                                  className="px-4 py-1.5 text-sm font-medium text-white bg-black content-center  rounded-md hover:drop-shadow-lg mr-1  float-right">
                                Add New
                            </Link>
                    </Typography>

                </Card>

                <Card>
                    <DataGrid
                        rows={plans}
                        columns={columns}
                        loading={loading}
                        paginationMode="server"
                        rowCount={totalRows}
                        pageSizeOptions={[10]}
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                        filterMode="server"
                        filterModel={filterModel}
                        onFilterModelChange={setFilterModel}
                    />
                </Card>
            </Container>

            <ConfirmDialog
                open={confirmOpen}
                title="Delete Plan"
                message="Are you sure you want to delete this plan? This action cannot be undone."
                onConfirm={handleDelete}
                onCancel={() => setConfirmOpen(false)}
            />
            <ToastContainer/>
        </AuthLayout>
    );
}
