import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { categoriesActions } from "../../../redux/slices/categories-slice";
import CategoriesApiController from "../../../controller/categories-api-controller";
import Category from "../../../models/Category";
import { useNavigate } from "react-router-dom";

const NewCategory: React.FC = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const briefInfoRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoriesApiController = new CategoriesApiController();

  const checkData = () => {
    if (titleRef.current?.value !== "" && briefInfoRef.current?.value !== "") 
      return true;
    // {alert("Enter required data"); return false;} -> عدلت الأقواس لتكون صحيحة
    alert("Enter required data"); // لتعرف إذا لم يتم إدخال بيانات
    return false;
  };

  const clear = () => {
    titleRef.current!.value = "";
    briefInfoRef.current!.value = "";
  };

  const Save = async () => {
    if (!titleRef.current || !briefInfoRef.current) return;

    // أنشئ كائن plain object
    const newCategory = {
      name: titleRef.current.value.trim(),
      slug: briefInfoRef.current.value.trim()
    };

    try {
      // استدعاء الـ API
      const response = await categoriesApiController.create(newCategory as any);

      // تأكد من نجاح العملية
      if (response && response.status !== false) {
        const categoryToAdd = new Category(
          response.data?.id || Date.now(), // إذا API رجعت id استخدمه، وإلا استخدم تاريخ اليوم كـ id فريد
          newCategory.name,
          newCategory.slug
        );
        dispatch(categoriesActions.create(categoryToAdd));
        clear();
        navigate("/cms/categories");
      } else {
        alert("حدث خطأ أثناء الإضافة: " + response?.message); // لتعرف إذا فشل الإضافة
      }
    } catch (error: any) {
      console.error(error);
      alert("حدث خطأ أثناء الإضافة: " + error.message); // للتأكد من أي خطأ محتمل
    }
  };

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (checkData()) {
      await Save();
    }
  };

  return (
    <section className="content">
      <div className="content-header">
        <span>New Category</span>
      </div>
      <div className="content-body">
        <section className="create-item">
          <form className="create-item_form" onSubmit={onSubmitHandler}>
            <div className="create-item_form_content">
              <section className="create-item_left">
                <div className="form-group">
                  <label htmlFor="blog-title">Category Title</label>
                  <input
                    className="form-input"
                    type="text"
                    id="blog-title"
                    placeholder="Blog title"
                    ref={titleRef}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="brief-info">Brief info</label>
                  <input
                    type="text"
                    className="form-input"
                    id="brief-info"
                    placeholder="Brief info"
                    ref={briefInfoRef}
                  />
                </div>
              </section>
            </div>
            <div className="create-item_form_actions">
              <button className="form-action" type="reset">
                Cancel
              </button>
              <button className="form-action done-action" type="submit">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default NewCategory;
