import AuthSidebar from "./auth-sidebar.tsx";
import AuthNavbar from "./auth-navbar.tsx";


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <AuthSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <AuthNavbar />

                {/* Page Content */}
                <main className="flex-1 p-4 overflow-auto">{children}</main>
            </div>
        </div>
    );
}
