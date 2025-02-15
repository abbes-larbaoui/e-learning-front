import {Link} from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import {Menu, MenuHandler, MenuList, MenuItem, Button} from "@material-tailwind/react";

export default function AuthNavbar() {
    // const { isAuthenticated, userRoles, logout } = useAuth();
    const isAuthenticated = true;
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center border-none">
            {/*<h1 className="text-xl font-bold text-white">E-Learning</h1>*/}

            {isAuthenticated ? (
                <div className="max-w-2xl ml-auto">
                    <Menu>
                        <MenuHandler>
                            <Button color="white" className="text-black">User</Button>
                        </MenuHandler>
                        <MenuList>
                            {/*{userRoles.includes("Admin") && <MenuItem><Link to="/admin">Admin Panel</Link></MenuItem>}*/}
                            {/*{userRoles.includes("Teacher") && <MenuItem><Link to="/teacher">Teacher Dashboard</Link></MenuItem>}*/}
                            {/*{userRoles.includes("Student") && <MenuItem><Link to="/student">Student Dashboard</Link></MenuItem>}*/}
                            {/*<MenuItem onClick={logout}>Logout</MenuItem>*/}
                            <MenuItem><Link to="/admin">Admin Panel</Link></MenuItem>
                            <MenuItem><Link to="/teacher">Teacher Dashboard</Link></MenuItem>
                            <MenuItem><Link to="/student">Student Dashboard</Link></MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            ) : (
                <button className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={() => window.location.href = "/login"}>
                    Login
                </button>
            )}
        </nav>
    );
}
