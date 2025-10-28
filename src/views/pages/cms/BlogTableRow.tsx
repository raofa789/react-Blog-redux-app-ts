import { useDispatch, useSelector } from 'react-redux';
import Delete from '../../../resources/images/ic_delete.svg';
import Edit from '../../../resources/images/ic_edit.svg';
import { blogsActions } from '../../../redux/slices/blogs-slice';
import Blog from '../../../models/Blogs';
import Category from '../../../models/Category';

let BlogTableRow = (props:{blog: Blog})=>{
  let dispatch = useDispatch(); // عند الحاجة لارسال او حذف بيانات 
    // جلب كل الكاتيجوريز
  let categories = useSelector(
    (state: { categories: { data: Category[] } }) => state.categories.data 
  );
    // البحث عن اسم الفئة حسب categoryId
  let categoryName =
    categories.find((cat: Category) => {
      return cat.id.toString() === props.blog._CategoryId.toString();
    })
      ?.name || "Unknown";

  let deleteBlogHandler = () =>{
    dispatch(blogsActions.delete(props.blog._id))
  }
    return(    
    <tr>
                    <td className="blog-category">{props.blog._id}</td>
                    <td>{props.blog._title}</td>
                    <td className="grey-info">{props.blog._PublisherName}</td>
                    <td className="grey-info">{categoryName}</td>
                    <td>{props.blog._discription}</td>
                    <td>
                      <div className="table-options">
                        <div className="table-option">
                          <img src={Edit} alt="" />
                        </div>
                        <div className="table-option">
                          <img src={Delete} alt="" onClick={deleteBlogHandler}/>
                        </div>
                      </div>
                    </td>
                  </tr>);
}
export default BlogTableRow;
