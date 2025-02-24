import { useFormik } from "formik";
import * as Yup from "yup";

export default function CreateJob() {
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      description: "",
      companyName: "",
      jobType: "",
      jobSalary: "",
      location: "",
      jobLogo: "",
      experienceLevel: "",
      currency: "",
    },
    validationSchema: Yup.object({
      jobTitle: Yup.string().required("Job Title is required"),
      description: Yup.string().required("Description is required"),
      companyName: Yup.string().required("Company Name is required"),
      jobType: Yup.string().required("Job Type is required"),
      jobSalary: Yup.number()
        .typeError("Salary must be a number")
        .required("Salary is required"),
      location: Yup.string().required("Location is required"),
      jobLogo: Yup.string()
        .url("Enter a valid URL")
        .required("Job Logo is required"),
      experienceLevel: Yup.string().required("Experience Level is required"),
      currency: Yup.string().required("Currency is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
    onReset: () => {
      console.log("Form Cleared");
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
        className="p-6 bg-white shadow-xl rounded-xl max-w-2xl w-full mx-auto grid gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Create a Job
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(formik.initialValues).map((field) => (
            <div key={field} className="flex flex-col gap-1">
              <label className="font-semibold text-gray-600 outline-none">
                {field.replace(/([A-Z])/g, " $1").trim()}:
              </label>
              <input
                type={field === "jobSalary" ? "number" : "text"}
                name={field}
                value={formik.values[field]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border border-gray-300 p-2 rounded-lg focus:outline-none"
              />
              {formik.touched[field] && formik.errors[field] && (
                <div className="text-red-500 text-sm">
                  {formik.errors[field]}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-md"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 shadow-md"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
