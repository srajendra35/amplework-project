import ApplicationMaintenance from "../container/view/application-maintenance/ApplicationMaintenacne";
import EnterpriseMobility from "../container/view/enterprise-mobility/EnterpriseMobility";
import EnterpriseWebDevelopment from "../container/view/enterprise-web-development/EnterpriseWebDevelopment";
import Softwaremaintenancesupport from "../container/view/softwaremaintenancesupport/Softwaremaintenancesupport";

const routes = [
  { path: "/", name: "ApplicationMaintenance", element: ApplicationMaintenance },
  { path: "/About-us", name: "ApplicationMaintenance", element: EnterpriseWebDevelopment },
  { path: "/services", name: "enterprisemobility", element: EnterpriseMobility},
  { path: "/our-culture", name: "Softwaremaintenance", element: Softwaremaintenancesupport},

];

export default routes;
