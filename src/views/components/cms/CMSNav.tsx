import { NavLink } from "react-router";
import Overview from'../../../resources/images/ic_overview.svg'
import Blogs from'../../../resources/images/ic_blogs.svg'
import Categories from'../../../resources/images/ic_categories.svg'
import Settings from'../../../resources/images/ic_settings.svg'
import Notifications from'../../../resources/images/ic_notifications.svg'

let CMSNav : React.FC = () =>{
return(<nav>
            <span>Admin tools</span>
            <ul className="nav-items">
              <li>
                <NavLink to="/cms" className={(props : {isActive:boolean})=>props.isActive ? 'active' : 'in-active'} end>
                  <div className="nav-item-content">
                    <img src={Overview} alt="" />
                    <span>Overview</span>
                  </div>
                  <span className="nav-item-count">2</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cms/blogs" className={(props : {isActive:boolean})=>props.isActive ? 'active' : 'in-active'} end>
                  <div className="nav-item-content">
                    <img src={Blogs} alt="" />
                    <span>All Blogs</span>
                  </div>
                  <span className="nav-item-count">2</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cms/categories"  className={(props : {isActive:boolean})=>props.isActive ? 'active' : 'in-active'} end>
                  <div className="nav-item-content">
                    <img src={Categories} alt="" />
                    <span>Categories</span>
                  </div>
                  <span className="nav-item-count">2</span>
                </NavLink>
              </li>
              <li className="last-item">
                <NavLink to="/"  className={(props: {isActive:boolean})=>props.isActive ? 'active' : 'in-active'} end>
                  <div className="nav-item-content">
                    <img src={Settings} alt="" />
                    <span>Settings</span>
                  </div>
                  <span className="nav-item-count">2</span>
                </NavLink>
              </li>
            </ul>
            <span>Insights</span>
            <ul className="nav-items">
              <li>
                <NavLink to="/"  className={(props : {isActive:boolean})=>props.isActive ? 'active' : 'in-active'} end>
                  <div className="nav-item-content">
                    <img src={Notifications} alt="" />
                    <span>Notifications</span>
                  </div>
                  <span className="nav-item-count">2</span>
                </NavLink>
              </li>
            </ul>
          </nav>);
}
export default CMSNav ;
