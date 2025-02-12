import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlansPage from "./pages/plans.tsx";
import PlanDetailPage from "./pages/plan-detail.tsx";
import FieldsPage from "./pages/fields.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/plans" element={<PlansPage />} />
                <Route path="/plans/:id" element={<PlanDetailPage />} />
                <Route path="/fields" element={<FieldsPage />} />
            </Routes>
        </Router>
    );
}

export default App;