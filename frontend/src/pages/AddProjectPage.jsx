import { useFormik } from "formik";
import { addProjectSchema } from "../schemas/addProjectSchema";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      studentName: "",
      year: "",
      section: "",
      projectName: "",
      projectImage: "",
      gitUrl: "",
      liveUrl: "",
    },
    validationSchema: addProjectSchema,
    onSubmit,
  });

  const navigate = useNavigate();

  async function onSubmit(values, actions) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    navigate("/cas_bca.sit/", {
      state: { showAddedToast: true },
      replace: true,
    });
    actions.resetForm();
  }

  console.log(errors);
  console.log(isSubmitting);
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center gap-10 p-10">
        <h1 className="text-4xl text-blue-900 font-bold">Add Your Project</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg p-5 rounded-md flex flex-col gap-5 w-full md:w-4/5 md:max-w-[700px]"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="studentName">Student Name</label>

            <input
              value={values.studentName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="name"
              name="studentName"
              id="name"
              placeholder="Enter your name"
              className={`border border-gray-300 rounded-md p-2 ${
                errors.studentName ? "border-red-800 text-red-800" : ""
              }`}
            />
            {errors.studentName && (
              <p className="text-md text-red-500">{errors.studentName}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="year">Year</label>
            <input
              value={values.year}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              min={1}
              max={4}
              name="year"
              id="year"
              placeholder="Enter your current year"
              className={`border border-gray-300 rounded-md p-2 ${
                errors.year ? "border-red-800 text-red-800" : ""
              }`}
            />
            {errors.year && (
              <p className="text-md text-red-500">{errors.year}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="section">Section</label>
            <input
              value={values.section}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="section"
              id="section"
              placeholder="Enter your section"
              className={`border border-gray-300 rounded-md p-2 ${
                errors.section ? "border-red-800 text-red-800" : ""
              }`}
            />
            {errors.section && (
              <p className="text-md text-red-500">{errors.section}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="projectName">Project Name</label>
            <input
              value={values.projectName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="projectName"
              id="projectName"
              placeholder="Enter your project name"
              className={`border border-gray-300 rounded-md p-2 ${
                errors.projectName ? "border-red-800 text-red-800" : ""
              }`}
            />
            {errors.projectName && (
              <p className="text-md text-red-500">{errors.projectName}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="projectImage">Project Image</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="file"
              name="projectImage"
              id="projectImage"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="gitUrl">GitHub Link</label>
            <input
              value={values.gitUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              type="url"
              name="gitUrl"
              id="gitUrl"
              placeholder="Enter link"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="liveUrl">Live Link</label>
            <input
              value={values.liveUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              type="url"
              name="liveUrl"
              id="liveUrl"
              placeholder="Enter link"
              className={`border border-gray-300 rounded-md p-2 ${
                errors.liveUrl ? "border-red-800 text-red-800" : ""
              }`}
            />
            {errors.liveUrl && (
              <p className="text-md text-red-500">{errors.liveUrl}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-amber-500 py-3 rounded-md hover:bg-amber-400 hover:cursor-pointer font-semibold text-xl"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProject;
