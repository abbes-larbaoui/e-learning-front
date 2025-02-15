import {ReactNode} from "react";
import {useKeycloak} from "@react-keycloak/web";

interface PrivateRouteProps {
    children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { keycloak } = useKeycloak();


    return keycloak.authenticated ? children : keycloak.login();
}
