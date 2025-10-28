import { useRef } from "react";
import { useDispatch } from "react-redux";
import { categoriesActions } from "../../../redux/slices/categories-slice";
import Category from "../../../models/Category";

let EditCategory: React.FC = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const briefInfoRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (checkData()) {
      save();
    }
  };

  const checkData = () => {
    if (
      titleRef.current &&
      briefInfoRef.current &&
      titleRef.current.value.trim() !== "" &&
      briefInfoRef.current.value.trim() !== ""
    ) {
      return true;
    }
    alert("Enter required data");
    return false;
  };

  const save = () => {
    if (!titleRef.current || !briefInfoRef.current) return;

    // إنشاء كائن Category صحيح باستخدام الكلاس
    const newCategory = new Category(
      Date.now(), // id مؤقت أو استخدم id من السيرفر إذا متاح
      titleRef.current.value.trim(),
      briefInfoRef.current.value.trim()
    );

    dispatch(categoriesActions.create(newCategory));
    clear();
  };

  const clear = () => {
    titleRef.current!.value = "";
    briefInfoRef.current!.value = "";
  };

  return (
    <section className="content">
      <div className="content-header">
        <span>Edit Category</span>
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
                    name="blog-title"
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
                    name="brief-info"
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

export default EditCategory;
