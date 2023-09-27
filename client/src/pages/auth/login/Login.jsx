import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMyStateNav } from "../../../contexts/ContextProvider";
import { login } from "../../../services/auth/login";

const initialState = {
  username: "",
  password: "",
};

export const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useMyStateNav();


  const [formData, setFormData] = useState(initialState);
  const { username, password } = formData;
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      return toast.error("All fields are required");
    }
    const userData = {
      usernameOrEmail: username,
      password,
    };

    await login(userData)
      .then((response) => {
        localStorage.setItem("user_data", JSON.stringify(response.data));
        console.log(response);
        setCurrentUser(response.data)
        toast.success(" login successful");
        navigate("/dashboard");

      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      });

    // await dispatch(loginAuth(userData));
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 bg-slate-100">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl font-extrabold text-center ">Login</h1>
          <form onSubmit={loginUser}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="Username or Email"
              autoComplete="off"
              value={username}
              onChange={handleInputChange}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-41"
              name="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={handleInputChange}
            />

            {/* <button
              type="submit"
              className={`text-white bg-green-600 h-12 w-full rounded-md hover:bg-green-700`}
            > */}
              <button
              type="submit"
              className={`text-white bg-green-600 h-12 w-full rounded-md hover:bg-green-700 ${
                loading && "cursor-not-allowed"
              }`}
              disabled={loading}
            >
              {loading ? "Logging In.." : "Login"}
              {/* login */}
            </button>
          </form>
        </div>
        <div className="flex flex-row space-x-4 pt-2">
          <p> Don&apos;t have an account?</p>
          <p className=" text-blue-900">
            <NavLink to="/auth/register">Sign up</NavLink>.
          </p>
        </div>
      </div>
    </div>
  );
};
