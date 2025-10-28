import React, { Fragment } from "react";
// import '../../../resources/css/style.css';
import { Outlet } from "react-router";
let WebSiteParent :React.FC= () => {
return (<Fragment>
    <header className="website-header">
      <section>
        <span>BLOGS</span>
        <nav>
          <ul>
            <li><a href="#" className="active-link">Home</a></li>
            <li><a href="#">Trendey Blogs</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
        </nav>
        <button>Join Us</button>
      </section>
      <article>
        <span
          >Lt's Find The Best Trendy Blogs<br />
          To Read.</span>
      </article>
    </header>
<Outlet/>
</Fragment>);
}

export default WebSiteParent;















