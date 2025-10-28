import axios from "axios";
import ApiResponse from "../models/ApiResponse";
import User from "../models/User";

class AuthApiController {
  //عبارة عن دالة تستدعى و ما بقدر انفذ عملية اللوج ان الا باستدعاؤها
  requstCsrfToken = async () => {
    //npm install axios
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8000/";
    try {
      let response = await axios.get("api/v1/auth/login", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
        },
      });
      localStorage.setItem("csrfToken", response.data.csrfToken);
      return response.status == 200;
    } catch (error) {
      return this.errorResponse();
    }
  };
  login = async (email : string , password : number) => {
    let cookiesRequst = await this.requstCsrfToken();
    if (cookiesRequst) {
      try {
        let response = await axios.post(
          `api/v1/auth/login`,
          {
            email: "test@gmail.com",
            password: "123456",
          },
          {
            withCredentials: true,
            headers: {
              "X-CSRF-Token": localStorage.getItem("csrfToken"),
              Accept: "application/json",
            },
          }
        );
        if (response.status == 200) {
          localStorage.setItem("logged_in", "true");
          // بعد الـ login
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("csrfToken", response.data.csrfToken);
          return true;
        }
        return new ApiResponse(
          response.data["success"],
          response.data["message"]
        );
      } catch (error) {
        return this.errorResponse();
      }
    }
  };
  register = async (user : User) => {
    //ما بحتاج csrfCookie في الريجستر
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8000/";
    try {
      let response = await axios.post("api/v1/auth/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
        user_name: user.user_name,
      });
      return new ApiResponse(
        response.data["success"],
        response.data["message"]
      );
    } catch (error) {
      return this.errorResponse();
    }
  };
  logout = async () => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8000/";
    try {
      let response = await axios.get(`api/v1/auth/logout`);
      localStorage.setItem("logged_in", "false");
      return new ApiResponse("true", "Logged out successfully");
    } catch (error) {
      return this.errorResponse();
    }
  };
 private errorResponse = () => new ApiResponse("false", "sth went wrong ,try again");
}
export default AuthApiController;

