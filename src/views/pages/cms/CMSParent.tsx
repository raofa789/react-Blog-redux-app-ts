import { Outlet } from "react-router";
import '../../../resources/css/cms.css';
import CMSNav from "../../components/cms/CMSNav";
import userAvatar from "../../../resources/images/user_avatar.svg";
import LogoutIcon from "../../../resources/images/ic_delete.svg";

let CMSParent : React.FC = () =>{
    return(
    <section className="main-section">
      <aside>
        <div className="aside-top">
          <span><span>B</span>LOGS</span>
          <CMSNav />
        </div>
        <section className="user-info-section">
          <img src={userAvatar} alt="" />
          <article className="user-info">
            <span className="user-name">User Name</span>
            <span className="user-role">Admin</span>
          </article>
          <img src={LogoutIcon} alt="" />
        </section>
      </aside>
      <div className="content-wrapper">
        <header>
          <section>
            <span>Hi</span>
            <span>User Name</span>
          </section>
          <div className="search-input">
            <img src="images/ic_blogs.svg" alt="" />
            <input type="text" id="search" placeholder="Search" />
          </div>
        </header>
        <Outlet />
      </div>
    </section>)
};
export default CMSParent;
