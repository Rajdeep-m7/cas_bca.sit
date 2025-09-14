import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { loginSchema } from "../../schemas/authSchemas";
import { FaSpinner } from "react-icons/fa";

function Login() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  async function onSubmit(values, actions) {
    //api request
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 2000)
    );

    actions.resetForm();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-3/5 md:max-w-[600px] flex flex-col gap-5 p-10 bg-white shadow-lg"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          type="email"
          className="border border-gray-300 rounded-sm  p-2"
          placeholder="Enter your Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
        />
        {errors.email && touched.email ? (
          <p className="text-sm text-red-500">{errors.email}</p>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          type="password"
          className="border border-gray-300 rounded-sm  p-2"
          placeholder="Enter your Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
        />

        {errors.password && touched.password ? (
          <p className="text-sm text-red-500">{errors.password}</p>
        ) : (
          ""
        )}
      </div>
      <Link to={"/cas_bca.sit/auth/signup"}>
        <p className="text-blue-600 text-sm hover:cursor-pointer hover:text-blue-800">
          Don't have have an account? Signup!
        </p>
      </Link>
      <button
        disabled={isSubmitting}
        className="bg-amber-500 flex justify-center items-center gap-2 font-semibold py-2 rounded-sm hover:cursor-pointer hover:bg-amber-400"
        type="submit"
      >
        {isSubmitting && <FaSpinner className="animate-spin" size={18} />}
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default Login;
