import { Route, Routes } from "react-router-dom";
import WebSiteHome from "../views/pages/website/WebSiteHome";
import WebSiteParent from "../views/pages/website/webSiteParent";

let WebRoutes = () =>{
return (
<Routes>  
    <Route path="/"  element={<WebSiteParent />}>
    <Route path="home" element={<WebSiteHome />}/> 
    </Route>
</Routes>);
}
export default WebRoutes;
