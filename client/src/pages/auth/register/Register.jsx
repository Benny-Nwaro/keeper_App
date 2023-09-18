import { NavLink } from "react-router-dom";
export const Register = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <div className="bg-slate-100 container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl font-extrabold text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="text-white bg-green-600 h-12 w-full rounded-md hover:bg-green-700"
          >
            Create Account
          </button>
        </div>

        <div className="flex flex-row space-x-4 pt-2">
          <p> Already have an account?</p>
          <p className=" text-blue-900">
            <NavLink to="/auth/login">Login</NavLink>.
          </p>
        </div>
      </div>
    </div>
  );
};
