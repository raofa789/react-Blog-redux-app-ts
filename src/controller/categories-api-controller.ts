import axios from "axios";
import ApiResponse from "../models/ApiResponse";
import Category from "../models/Category";

type categoryResponse= {
  id: number;
  name: string;
  slug: string;
  image?: string;
};
class CategoriesApiController {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/";
    axios.defaults.withCredentials = true;
  }

  // إنشاء category
  create = async (category : Category) => {
      let csrfRes = await axios.get("/csrf-token", { withCredentials: true });
      localStorage.setItem("csrfToken", csrfRes.data.csrfToken);

    try {
      let response = await axios.post(`api/v1/categories`, {
        name: category.name,
        slug: category.slug, // مطابق للـ frontend
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "x-csrf-token": localStorage.getItem("csrfToken"),
        },
        withCredentials: true,
      }
    );

      if (response.status === 201 || response.status === 400) {
             console.log(localStorage.getItem("token"));

        // ارجع الكائن كما هو من السيرفر، يحتوي على id حقيقي
        return response.data.data; // data يحتوي على id و title و briefInfo
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      return this.errorResponse();
    }
  };

  // قراءة كل categories
  read = async () => {
    try {
      let response = await axios.get(`api/v1/categories`);
      if (response.status === 200) {
        // ارجع array من Plain Objects فقط
        return response.data.data.map((element : categoryResponse) => ({
          id: element.id, // id الحقيقي من السيرفر
          name: element.name,
          slug: element.slug,
          image : element.image,
        }));
      } else {
        return []; // لو مافي data
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  // حذف category
  delete = async (id : number) => {
    try {
      let response = await axios.delete(`api/v1/categories/${id}` , {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT
        "x-csrf-token": localStorage.getItem("csrfToken"),        // CSRF
      },
      withCredentials: true,
      });

    if (response.status === 200 || response.status === 204) {
      return new ApiResponse("Category deleted successfully", "true");
    }else {
      return new ApiResponse("Failed to delete category", "false");
    } 
    } catch (error) {
      console.error(error);
      return this.errorResponse();
    }
  };

  // تحديث category
  update = async (id : number, category : Category) => {
    //1-get CSRF Token
    let csrfRes = await axios.get("/csrf-token", { withCredentials: true });
    localStorage.setItem("csrfToken", csrfRes.data.csrfToken);
    try {
      //2- send update to server
      let response = await axios.put(`api/v1/categories/${id}`, {
        name: category.name,
        slug: category.slug,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "x-csrf-token": localStorage.getItem("csrfToken"),
        },
        withCredentials: true,
      });
      // 3- تحقق من الحالة
      if (response.status === 200) {
        return new ApiResponse(
        response.data.message || "Category updated successfully",
        response.data.success
      );
      }
      return new ApiResponse("Failed to update category", "false");
    } catch (error) {
      console.error(error);
    return this.errorResponse();
    }
  };
    private errorResponse = () => new ApiResponse("false", "sth went wrong ,try again");

}

export default CategoriesApiController;
