import { NavLink } from "react-router-dom";
export const Login = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 bg-slate-100">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl font-extrabold text-center ">Login</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="username"
            placeholder="Username"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="text-white bg-green-600 h-12 w-full rounded-md hover:bg-green-700"
          >
            Login
          </button>
        </div>
        <div className="flex flex-row space-x-4 pt-2">
          <p> Don't have an account?</p>
          <p className=" text-blue-900">
            <NavLink to="/auth/register">Sign up</NavLink>.
          </p>
        </div>
      </div>
    </div>
  );
};
