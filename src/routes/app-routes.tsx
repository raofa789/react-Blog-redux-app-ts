import { useLocation } from "react-router";
import CMSRoutes from "./cms-routes";
import WebRoutes from "./web-routes";

let AppRoutes :React.FC = () => {
  let location = useLocation();
  let href = location.pathname; //لجلب الرابط 
  console.log(href.startsWith("/cms"));

  return (
    // لو كان الراوت يبدأ ب cms روح علىCMSRoutes ولو لا روح على  WebRoutes
    <> {href.startsWith("/cms") ? <CMSRoutes /> : <WebRoutes />};</>
  );
};

export default AppRoutes;