import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8088", // Keycloak server URL
    realm: "erp-dev",          // Replace with your realm name
    clientId: "e-learn",   // Replace with your client ID
});

export default keycloak;
