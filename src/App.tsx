import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/public/HomePage.tsx";
import PlansPage from "./pages/public/plans.tsx";
import PlanDetailPage from "./pages/public/plan-detail.tsx";
import FieldsPage from "./pages/public/fields.tsx";
import SubjectsPage from "./pages/public/subjects.tsx";
import Dashboard from "./pages/dashboard.tsx";
import PlanList from "./pages/teacher/plan/plan-list.tsx";
import PlanView from "./pages/teacher/plan/plan-view.tsx";
import PlanCreate from "./pages/teacher/plan/plan-create.tsx";
import PrivateRoute from "./config/private-route.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/plans" element={<PlansPage />} />
                <Route path="/plans/:id" element={<PlanDetailPage />} />
                <Route path="/fields" element={<FieldsPage />} />
                <Route path="/subjects" element={<SubjectsPage />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />

                <Route
                    path="/teacher/plans/create"
                    element={
                        <PrivateRoute>
                            <PlanCreate />
                        </PrivateRoute>
                    }
                />
                <Route path="/teacher/plans" element={<PlanList />} />
                <Route path="/teacher/plans/view/:id" element={<PlanView />} />
                {/*<Route path="/teacher/plans/create" element={<PlanCreate />} />*/}
            </Routes>
        </Router>
    );
}

export default App;