import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Blog from "../../../models/Blogs";
import { blogsActions } from "../../../redux/slices/blogs-slice";
import Category from "../../../models/Category";

const NewBlog: React.FC = () => {
  // categories => الموجودة في الردكس ستور
  // data => categories-slice الموجودة بداخل ال
  const categories = useSelector(
    (state: { categories: { data: Category[] } }) => state.categories.data
  );

  const titleRef = useRef<HTMLInputElement>(null);
  const PublisherNameRef = useRef<HTMLInputElement>(null);
  const ImageRef = useRef<HTMLInputElement>(null);
  const CategoryRef = useRef<HTMLSelectElement>(null);
  const DescriptionRef = useRef<HTMLTextAreaElement>(null);

  const dispatch = useDispatch();

  // تحقق من البيانات المدخلة
  const checkData = () => {
    if (
      titleRef.current!.value !== "" &&
      PublisherNameRef.current!.value !== "" &&
      ImageRef.current!.value !== "" &&
      CategoryRef.current!.value !== "" &&
      DescriptionRef.current!.value !== ""
    ) {
      return true;
    }
    alert("Enter required data"); // لتعرف إذا لم يتم إدخال بيانات
    return false;
  };

  // إنشاء كائن Blog فعلي
 const getBlog = (): Blog => {
  return new Blog(
    Date.now(), // id كرقم
    titleRef.current!.value,
    PublisherNameRef.current!.value,
    ImageRef.current!.value,
    Number(CategoryRef.current!.value), // تحويل قيمة select من string إلى number
    DescriptionRef.current!.value
  );
};


  // مسح القيم بعد الحفظ
  const clear = () => {
    titleRef.current!.value = "";
    PublisherNameRef.current!.value = "";
    CategoryRef.current!.value = "";
    ImageRef.current!.value = "";
    DescriptionRef.current!.value = "";
  };

  // معالجة حفظ المدخلات
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (checkData()) {
      const blog = getBlog();
      dispatch(blogsActions.create(blog)); // إرسال الحدث
      clear();
    }
  };

  return (
    <section className="content">
      <div className="content-header">
        <span>New Blog</span>
      </div>
      <div className="content-body">
        <section className="create-item">
          <form className="create-item_form" onSubmit={onSubmitHandler}>
            <div className="create-item_form_content">
              <section className="create-item_left">
                <div className="form-group">
                  <label htmlFor="blog-title">Blog Title</label>
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
                  <label htmlFor="Publisher-Name">Publisher Name</label>
                  <input
                    type="text"
                    className="form-input"
                    name="Publisher-Name"
                    id="Publisher-Name"
                    placeholder="Publisher Name"
                    ref={PublisherNameRef}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Image">Image</label>
                  <input
                    type="file"
                    className="form-input"
                    name="Image"
                    id="Image"
                    ref={ImageRef}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="categories">Category</label>
                  <select
                    name="categories"
                    id="categories"
                    className="form-select"
                    ref={CategoryRef}
                  >
                    {categories.map((element: { id: number; name: string }) => (
                      <option key={element.id} value={element.name}>
                        {element.name}
                      </option>
                    ))}
                  </select>
                </div>
              </section>
              <section className="create-item_right">
                <div className="form-group">
                  <label htmlFor="blog-description">Description</label>
                  <textarea
                    className="form-textarea"
                    id="blog-description"
                    rows={11}
                    placeholder="Write description"
                    ref={DescriptionRef}
                  ></textarea>
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

export default NewBlog;
