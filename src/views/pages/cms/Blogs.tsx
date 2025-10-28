import { NavLink } from 'react-router';
import BlogTableRow from './BlogTableRow';
import { useSelector } from 'react-redux';
import Blog from '../../../models/Blogs';
let Blogs : React.FC = ()=>{
  let data = useSelector((state: { blogs: { data: Blog[] } }) => state.blogs.data);
return  <>
<section className="content">
          <div className="content-header">
            <span>All Blogs</span>
            <div className="content-header-options">
              <div className="content-header-options_filter">
                <img src="images/btn_Filter.svg" alt="" />
              </div>
              <NavLink to='/cms/blogs/create' className="header-button">Create New Blog</NavLink>
            </div>
          </div>
          <div className="content-body">
            <div className="content-body_table">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Blog title</th>
                    <th>Due date</th>
                    <th>Publisher</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
              {data.map((element :Blog) =>(<BlogTableRow key={element._id} blog={element} />))}
              
                </tbody>
              </table>
            </div>
          </div>
        </section>
</>
}
export default Blogs;
