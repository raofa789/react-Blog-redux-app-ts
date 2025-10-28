import TimeIcon from '../../../resources/images/ic_time.svg';
import DeleteIcon from '../../../resources/images/ic_delete.svg';
import EditIcon from '../../../resources/images/ic_edit.svg';
import { useDispatch } from 'react-redux';
import { categoriesActions } from '../../../redux/slices/categories-slice';
import { useNavigate } from 'react-router-dom';
import CategoriesApiController from '../../../controller/categories-api-controller';
import Category from '../../../models/Category';

type Props = {
  data: Category;
}; 

const CategoryItem : React.FC<Props> = ({data}) => {
    let dispatch = useDispatch();
    let navigate = useNavigate();

let categoriesApiController = new CategoriesApiController();

let OnDeleteHandler = async() =>{
  let response = await categoriesApiController.delete(data.id);
  if(response && response.status){
dispatch(categoriesActions.delete(data.id));
  }else {
    alert("Failed to delete category!"); // لتعرف إذا فشل الحذف
  }
}
let OnUpdateHandler = () =>{
  navigate(`/cms/categories/${data.id}/edit`)
}
    return(
    <article className="category">
                <div className="category-header">
                  <span>{data.name}</span>
                  <div className="table-option">
                    <img src={DeleteIcon} alt="" onClick={OnDeleteHandler}/>
                    <hr/>
                    <img src={EditIcon} alt="" onClick={OnUpdateHandler}/>

                  </div>
                </div>
                <span>{data.id} </span>
                <div className="category-footer">
                  <img src={TimeIcon} alt="" />
                  <span>23 Blog</span>
                </div>
              </article>);
}
export default CategoryItem;
