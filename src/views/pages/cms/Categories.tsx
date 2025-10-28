import { NavLink } from "react-router-dom";
import Category from "../../../models/Category";
import CategoryItem from "../../components/cms/CategoryItem";
import { useEffect } from "react";
import { categoriesActions } from "../../../redux/slices/categories-slice";
import AuthApiController from "../../../controller/auth-api-controller";
import CategoriesApiController from "../../../controller/categories-api-controller";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/redux-store";

let Categories: React.FC = () => {
  let categories = useSelector((state: RootState) => state.categories.data); // تعديل هنا
  let dispatch = useDispatch();

  let categoriesApiController = new CategoriesApiController();

  let fetchCategories = async () => {
    let loginTest = await new AuthApiController().login(
      "test@gmail.com",
      123456
    );
    console.log(loginTest);
    let data = await categoriesApiController.read();
    console.log(`categories : ${data}`);
    if (data && data.length > 0) {
      dispatch(categoriesActions.read(data));
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="content">
      <div className="content-header">
        <span>All Categories</span>
        <div className="content-header-options">
          <div className="content-header-options_filter">
            <img src="images/btn_Filter.svg" alt="" />
          </div>
          <NavLink to="/cms/categories/create" className="header-button">
            Create New Category
          </NavLink>
        </div>
      </div>
      <div className="content-body">
        <section className="all-categories">
          {categories && categories.length > 0 ? (
            categories.map((element: Category) => (
              <CategoryItem key={element.id} data={element} />
            ))
          ) : (
            <h1>No categories</h1>
          )}
        </section>
      </div>
    </section>
  );
};
export default Categories;