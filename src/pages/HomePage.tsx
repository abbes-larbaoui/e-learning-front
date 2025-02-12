import Navbar from "../components/navbar.tsx";
import Hero from "../components/hero.tsx";
import OutImpressiveStats from "../components/out-impressive-stats.tsx";
import CoursesCategories from "../components/courses-categories.tsx";
import Footer from "../components/footer.tsx";
import StudentsFeedback from "../components/students-feedback.tsx";
import FiledsSection from "../components/fields-section.tsx";
import PlansSection from "../components/plans-section.tsx";

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <OutImpressiveStats />
            <FiledsSection />
            <CoursesCategories />
            <PlansSection />
            {/*<ExploreCourses />*/}
            {/*<SubscriptionPlans />*/}
            <StudentsFeedback />
            <Footer />
        </div>
    );
}