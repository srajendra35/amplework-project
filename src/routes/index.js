import ApplicationMaintenance from "../container/view/application-maintenance/ApplicationMaintenacne";
import EnterpriseWebDevelopment from "../container/view/enterprise-web-development/EnterpriseWebDevelopment";

const routes = [
  { path: "/", name: "ApplicationMaintenance", element: ApplicationMaintenance },
  { path: "/Home", name: "ApplicationMaintenance", element: EnterpriseWebDevelopment },

];

export default routes;
