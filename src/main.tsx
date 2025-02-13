import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./config/keycloak.ts";

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// createRoot(document.getElementById("root")!).render(
//     <ReactKeycloakProvider authClient={keycloak}>
//         <App />
//     </ReactKeycloakProvider>
// );

createRoot(document.getElementById("root")!).render(
    <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: "check-sso", silentCheckSsoRedirectUri: window.location.origin }}>
        <App />
    </ReactKeycloakProvider>
);
