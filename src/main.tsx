import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import Keycloak from 'keycloak-js';

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

const keycloakSetting = {
    url: "http://localhost:8088",
    realm: "erp-dev",
    clientId: "e-learn",
};

const authInstance = new Keycloak(keycloakSetting);

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(
        <ReactKeycloakProvider authClient={authInstance}>
            <App />
        </ReactKeycloakProvider>
    );
}
