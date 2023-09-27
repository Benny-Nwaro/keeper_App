import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isValidEmail } from "../../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import {
  registerStaffAuth,
  RESET_AUTH,
} from "../../../redux/features/auth/authSlice";
const initialState = {
  username: "",
  password: "",
  confirm_password: "",
  email: "",
  first_name: "",
  last_name: "",
  date_of_birth: "",
  gender: "",
  position_id: "",
  staff_address: "",
  job_description: "",
  salary: "",
  date_employed: "",
  phone_number: "",
  // user_type: "",
  role_id: "",
};

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

  const {
    username,
    password,
    confirm_password,
    email,
    first_name,
    last_name,
    date_of_birth,
    gender,
    position_id,
    staff_address,
    job_description,
    salary,
    date_employed,
    phone_number,
    // user_type,
    role_id,
  } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // console.log(formData)
  const registerStaff = async (e) => {
    e.preventDefault();
    if (
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !confirm_password ||
      !username ||
      !date_of_birth ||
      !gender ||
      !position_id ||
      !staff_address ||
      !job_description ||
      !salary ||
      !date_employed ||
      !phone_number ||
      // !user_type ||
      !role_id
    ) {
      return toast.error("All fields are required");
    }
    if (password.length < 8) {
      return toast.error("Password must be up to 8 characters.");
    }
    if (!isValidEmail(email)) {
      return toast.error("Invalid email address.");
    }
    if (password !== confirm_password) {
      return toast.error("Password do not match.");
    }
    const userData = {
      username,
      password,
      email,
      first_name,
      last_name,
      date_of_birth,
      gender,
      position_id,
      staff_address,
      job_description,
      salary,
      date_employed,
      phone_number,
      // user_type,
      role_id,
    };
    await dispatch(registerStaffAuth(userData));
  };
  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/");
    }
    dispatch(RESET_AUTH());
  }, [dispatch, isLoggedIn, isSuccess, navigate]);
  // console.log(isLoggedIn, isSuccess);
  return (
    <>
      {/* {isLoading && <p>Loading...</p>} */}

      <div className="bg-slate-100 min-h-screen flex flex-col">
        <div className="bg-slate-100 container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl font-extrabold text-center">
              Sign up
            </h1>

            <form onSubmit={registerStaff}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="first_name"
                placeholder="First Name"
                value={first_name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="last_name"
                placeholder="Last Name"
                value={last_name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleInputChange}
              />{" "}
              <div>
                <p className="text-black/[0.4]">DOB</p>
                <input
                  type="date"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="date_of_birth"
                  placeholder="DOB"
                  value={date_of_birth}
                  onChange={handleInputChange}
                />{" "}
              </div>
              <select
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="gender"
                value={gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <select
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="position_id"
                value={position_id}
                onChange={handleInputChange}
              >
                <option value="">Select Position</option>
                <option value="1">CEO</option>
                <option value="2">Head of Audit</option>
                <option value="3">Team Lead</option>
                <option value="4">Software Engineer</option>
                <option value="5">Marketing Manager</option>
              </select>
              {/* <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="position_id"
                placeholder="Position Id"
                value={position_id}
                onChange={handleInputChange}
              />{" "} */}
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="staff_address"
                placeholder="Staff Address"
                value={staff_address}
                onChange={handleInputChange}
              />{" "}
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="job_description"
                placeholder="Job Description"
                value={job_description}
                onChange={handleInputChange}
              />{" "}
              <input
                type="number"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="salary"
                placeholder="Staff Salary"
                value={salary}
                onChange={handleInputChange}
              />{" "}
              <div>
                <p className="text-black/[0.3]">Date Employed</p>
                <input
                  type="date"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="date_employed"
                  placeholder="Date Employed"
                  value={date_employed}
                  onChange={handleInputChange}
                />{" "}
              </div>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="phone_number"
                placeholder="Phone Number"
                value={phone_number}
                onChange={handleInputChange}
              />{" "}
              {/* <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="user_type"
              placeholder="User Type"
              value={user_type}
              onChange={handleInputChange}
            />{" "} */}
              {/* <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="role_id"
                placeholder="Role Id"
                value={role_id}
                onChange={handleInputChange}
              />{" "} */}
              <select
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="role_id"
                value={role_id}
                onChange={handleInputChange}
              >
                <option value="">Select Role</option>
                <option value="1">Super User</option>
                <option value="2">Admin</option>
                <option value="3">Staff</option>
                <option value="4">Learner</option>
                <option value="5">User</option>
              </select>
              <button
                type="submit"
                className={`text-white bg-green-600 h-12 w-full rounded-md hover:bg-green-700 ${
                  isLoading && "cursor-not-allowed"
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Creating account.." : "Create Account"}
              </button>
            </form>
          </div>
          <div className="flex flex-row space-x-4 pt-2">
            <p>Already have an account?</p>
            <p className="text-blue-900">
              <NavLink to="/auth/login">Login</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
